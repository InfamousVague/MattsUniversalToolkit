<script lang="ts">
    import { Icon, Button, Title, Text } from "$lib/elements"
    import { Appearance, Shape } from "$lib/enums"
    import { _ } from "svelte-i18n"
    import { Identity } from "warp-wasm"
    import { MultipassStoreInstance } from "$lib/wasm/MultipassStore"
    import { OrderedPhrase } from "$lib/components"
    import FileInput from "$lib/elements/Input/FileInput.svelte"
    import { TesseractStoreInstance } from "$lib/wasm/TesseractStore"
    import { RelayStore } from "$lib/state/wasm/relays"
    import { WarpStore } from "$lib/wasm/WarpStore"
    import { get } from "svelte/store"
    import { LoginPage } from "."

    export let page: LoginPage
    export let onImport: (identity: Identity) => void

    let passphrase: string[] = new Array(12).fill("")

    let passphraseUpload: FileInput
    let accountUpload: FileInput

    let failed: string = ""

    async function init() {
        // Unlock tesseract first to access multipass?
        await TesseractStoreInstance.initTesseract()
        let t = await TesseractStoreInstance.getTesseract()
        let addressed = Object.values(get(RelayStore.state))
            .filter(r => r.active)
            .map(r => r.address)
        await WarpStore.initWarpInstances(addressed)
    }

    init()

    async function readPassphrase(files: File[]) {
        let file = files[0]
        let content = await file.text()
        // Allow splitting by new lines and/or whitespace
        passphrase = content.split("\n").join(" ").split(" ")
    }

    async function importAccount(files?: File[]) {
        let memory: Uint8Array | undefined = undefined
        if (files) {
            memory = new Uint8Array(await files[0].arrayBuffer())
        }
        let res = await MultipassStoreInstance.importAccount(passphrase.join(" "), memory)
        res.onSuccess(identity => {
            if (identity) onImport(identity)
            else failed = "null"
        })
        res.onFailure(err => {
            failed = err
        })
    }
</script>

<div class="account-import">
    <div class="header">
        <Title hook="title-import-account">{$_("pages.auth.import.title")}</Title>
        <Text hook="text-import-account-secondary" muted>{$_("pages.auth.import.description")}</Text>
    </div>
    {#each passphrase as word, i}
        <OrderedPhrase number={i + 1} bind:word={word} editable />
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
        <Button hook="button-import-account-go-back" class="full-width" text={$_("controls.go_back")} appearance={Appearance.Alt} on:click={() => (page = LoginPage.EntryPoint)}>
            <Icon icon={Shape.ArrowLeft} />
        </Button>
        <Button
            hook="import-account-file"
            disabled={passphrase.find(s => s.length === 0) !== undefined}
            on:click={() => {
                accountUpload.click()
            }}
            text={$_("pages.auth.import.file")}>
            <Icon icon={Shape.Document} />
        </Button>
        <Button
            hook="import-account"
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
    }
</style>
