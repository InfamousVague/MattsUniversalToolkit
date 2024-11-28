<script lang="ts">
    import { Icon, Button, Title, Text } from "$lib/elements"
    import { Appearance, Shape } from "$lib/enums"
    import { _ } from "svelte-i18n"
    import { Identity, WarpInstance } from "warp-wasm"
    import { MultipassStoreInstance } from "$lib/wasm/MultipassStore"
    import { OrderedPhrase } from "$lib/components"
    import FileInput from "$lib/elements/Input/FileInput.svelte"
    import { TesseractStoreInstance } from "$lib/wasm/TesseractStore"
    import { RelayStore } from "$lib/state/wasm/relays"
    import { WarpStore } from "$lib/wasm/WarpStore"
    import { get } from "svelte/store"
    import { LoginPage } from "."
    import Unlock from "./Unlock.svelte"
    import { AuthStore } from "$lib/state/auth"
    import { Store } from "$lib/state/Store"
    import { ToastMessage } from "$lib/state/ui/toast"

    export let page: LoginPage
    export let onImport: (identity: Identity) => void

    let loading = false

    let passphrase: string[] = new Array(12).fill("")

    let passphraseUpload: FileInput
    let accountUpload: FileInput

    let failed: string = ""
    let pin = ""

    // We cache it here to not init the warp instances in all stores since its not ready at this time
    let warp: WarpInstance

    async function setupTesseract(pinInput: string) {
        await TesseractStoreInstance.initTesseract()
        let tesseract = await TesseractStoreInstance.getTesseract()
        if (TesseractStoreInstance.exists()) {
            tesseract.clear()
        }
        let result = await TesseractStoreInstance.unlock(pinInput)
        let failed = false
        result.onFailure(_ => {
            failed = true
            console.log("Failed to unlock tesseract")
        })
        if (failed) return
        let addresses = Object.values(get(RelayStore.state))
            .filter(r => r.active)
            .map(r => r.address)
        warp = await WarpStore.createIpfs(addresses)
        pin = pinInput
    }

    async function readPassphrase(files: File[]) {
        let file = files[0]
        let content = await file.text()
        // Allow splitting by new lines and/or whitespace
        passphrase = content.split("\n").join(" ").split(" ")
    }

    async function importAccount(files?: File[]) {
        loading = true
        let memory: Uint8Array | undefined = undefined
        if (files) {
            memory = new Uint8Array(await files[0].arrayBuffer())
        }
        let res = await MultipassStoreInstance.importAccount(passphrase.join(" "), { to: memory, multipassBox: warp.multipass })
        res.onSuccess(identity => {
            if (identity) {
                AuthStore.setStoredPin(pin)
                WarpStore.updateWarpInstance(warp)
                onImport(identity)
            } else {
                Store.addToastNotification(new ToastMessage($_("pages.auth.import.fail.null"), "", 2))
            }
        })
        res.onFailure(err => {
            Store.addToastNotification(new ToastMessage($_("pages.auth.import.fail"), err, 2))
            failed = err
        })
        loading = false
    }
</script>

{#if pin.length == 0}
    <Unlock
        create={true}
        importing={true}
        on:pin={async e => {
            await setupTesseract(e.detail.pin)
            e.detail.done()
        }} />
{:else}
    <div class="account-import">
        <div class="header">
            <Title hook="title-import-account">{$_("pages.auth.import.title")}</Title>
            <Text hook="text-import-account-secondary" muted>{$_("pages.auth.import.description")}</Text>
        </div>
        {#each passphrase as word, i}
            <OrderedPhrase number={i + 1} bind:word={word} editable loading={loading} />
        {/each}
        <Button
            hook="upload-passphrase"
            on:click={() => {
                passphraseUpload.click()
            }}
            text={$_("pages.auth.import.passphrase")}>
            <Icon icon={Shape.Details} />
        </Button>
        <div class="import-button-group">
            <Button
                hook="button-import-account-go-back"
                loading={loading}
                text={$_("controls.go_back")}
                appearance={Appearance.Alt}
                on:click={() => {
                    page = LoginPage.EntryPoint
                    TesseractStoreInstance.clearTesseract()
                }}>
                <Icon icon={Shape.ArrowLeft} />
            </Button>
            <Button
                hook="import-account-file"
                loading={loading}
                disabled={passphrase.find(s => s.length === 0) !== undefined}
                on:click={() => {
                    accountUpload.click()
                }}
                text={$_("pages.auth.import.file")}>
                <Icon icon={Shape.Document} />
            </Button>
            <Button
                hook="import-account"
                loading={loading}
                disabled={passphrase.find(s => s.length === 0) !== undefined}
                on:click={() => {
                    importAccount()
                }}
                text={$_("pages.auth.import.remote")}>
                <Icon icon={Shape.Globe} />
            </Button>
            <FileInput
                bind:this={passphraseUpload}
                hidden
                on:select={e => {
                    readPassphrase(e.detail)
                }} />
            <FileInput
                bind:this={accountUpload}
                hidden
                on:select={e => {
                    importAccount(e.detail)
                }} />
        </div>
    </div>
{/if}

<style lang="scss">
    .account-import {
        align-self: center;
        align-content: center;
        justify-content: center;
        display: inline-flex;
        flex-direction: row;
        gap: var(--gap);
        padding: var(--padding);
        max-width: var(--max-component-width);
        flex-wrap: wrap;
        flex: 1;
        .import-button-group {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>
