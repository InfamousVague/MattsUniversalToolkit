<script lang="ts">
    import { Label } from "$lib/elements"
    import { Modal, PinInput } from "$lib/components"
    import { Appearance, Shape } from "$lib/enums"

    import { _ } from "svelte-i18n"
    import { Text, Button, Icon } from "$lib/elements"
    import ProfilePicture from "$lib/components/profile/ProfilePicture.svelte"
    import { mock_users } from "$lib/mock/users"
    import Spacer from "$lib/elements/Spacer.svelte"
    import { get, writable } from "svelte/store"
    import RelaySelector from "$lib/components/ui/RelaySelector.svelte"
    import { Controls } from "$lib/layouts"
    import { AuthStore } from "$lib/state/auth"
    import { createEventDispatcher } from "svelte"
    import { SettingsStore } from "$lib/state"
    import { Store } from "$lib/state/Store"
    import { ToastMessage } from "$lib/state/ui/toast"
    import { TesseractStoreInstance } from "$lib/wasm/TesseractStore"
    export let create: boolean = false
    const dispatch = createEventDispatcher()

    let loading = false
    let scramble = get(AuthStore.state).scramblePin
    let stayLoggedIn = get(AuthStore.state).stayLoggedIn
    let isDeleteAccountModalOpened = writable(false)
    let wrongPinToDeleteAccountMessage = $_("settings.profile.delete_account_wrong_pin")

    let showAccounts = false
    let showConfigureRelay = false

    // Function to delete IndexedDB database by name
    function deleteIndexedDB(dbName: string) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.deleteDatabase(dbName)

            request.onsuccess = function () {
                console.log(`Database '${dbName}' deleted successfully.`)
                resolve("Success")
            }

            request.onerror = function () {
                console.error(`Failed to delete database '${dbName}':`, request.error)
                reject(request.error)
            }

            request.onblocked = function () {
                console.warn(`Database deletion for '${dbName}' is blocked. Close other tabs that use it and try again.`)
                // Continue even if blocked, but mark as incomplete
                resolve("Blocked")
            }
        })
    }

    // Function to clear all IndexedDB data, localStorage, sessionStorage, and cookies
    async function clearAllData() {
        try {
            // Clear localStorage and sessionStorage first
            localStorage.clear()
            console.log("localStorage cleared.")

            sessionStorage.clear()
            console.log("sessionStorage cleared.")

            // Attempt to delete specific database 'tesseract' and all other IndexedDB databases
            await deleteIndexedDB("tesseract")
            console.log("Database 'tesseract' cleared if it existed.")

            const dbNames = await indexedDB.databases()
            for (let dbInfo of dbNames) {
                if (dbInfo.name) {
                    const result = await deleteIndexedDB(dbInfo.name)
                    if (result === "Blocked") {
                        console.warn(`Could not delete database '${dbInfo.name}' due to blocking issues.`)
                    }
                }
            }
            console.log("All IndexedDB data cleared, where not blocked.")

            // Clear cookies
            document.cookie.split(";").forEach(cookie => {
                const cookieName = cookie.split("=")[0].trim()
                document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
            })
            console.log("Cookies cleared.")

            // Redirect to '/auth' with cache busting to prevent stale cache loading
            window.location.href = "/auth?cacheBust=" + new Date().getTime()
        } catch (error) {
            console.error("Error clearing data:", error)
        }
    }
</script>

<div id="auth-unlock">
    {#if showAccounts}
        <Modal hook="modal-select-profile" on:close={_ => (showAccounts = false)} padded>
            <div class="profiles">
                <Label hook="label-select-profile" text={$_("generic.profiles")} />
                <div class="user" data-cy="select-profile-user">
                    <ProfilePicture hook="select-profile-user-image" image={mock_users[1].profile.photo.image} noIndicator />
                    <Text hook="select-profile-user-name" class="username">{mock_users[1].name}</Text>
                </div>
                <div class="user" data-cy="select-profile-user">
                    <ProfilePicture hook="select-profile-user-image" image={mock_users[2].profile.photo.image} />
                    <Text hook="select-profile-user-name" class="username">{mock_users[2].name}</Text>
                </div>
                <Spacer />
                <Button hook="button-create-new-profile" text={$_("pages.auth.create.profile")} appearance={Appearance.Alt}>
                    <Icon icon={Shape.Plus} />
                </Button>
            </div>
        </Modal>
    {/if}

    {#if showConfigureRelay}
        <Modal hook="modal-select-relay" on:close={_ => (showConfigureRelay = false)} padded>
            <RelaySelector />
        </Modal>
    {/if}

    {#if loading}
        <Label text={$_("generic.loading")} />
    {:else}
        <Label text={create ? $_("pages.auth.unlock.choose_pin") : $_("pages.auth.unlock.enter_pin")} hook="label-choose-enter-pin" />
    {/if}

    <PinInput
        min={4}
        max={8}
        loading={loading}
        scramble={scramble}
        stayLoggedIn={stayLoggedIn}
        showSettings={false}
        on:submit={async e => {
            loading = true
            await new Promise(resolve => {
                dispatch("pin", { pin: e.detail, done: resolve })
            })
            loading = false
        }} />

    <div class="unlock-controls">
        <Controls>
            {#if get(SettingsStore.state).devmode}
                <!-- Change User Button (visible only in dev mode) -->
                <Button tooltip={$_("pages.auth.changeUser")} hook="button-change-user" icon on:click={_ => (showAccounts = true)} appearance={Appearance.Alt}>
                    <Icon icon={Shape.Profile} />
                </Button>
            {/if}

            <Button tooltip={$_("pages.auth.relay")} hook="button-configure-relay" icon on:click={_ => (showConfigureRelay = true)} appearance={Appearance.Alt}>
                <Icon icon={Shape.Relay} />
            </Button>
            <Button
                hook="button-delete-account"
                tooltip={$_("settings.profile.delete_title")}
                appearance={Appearance.Alt}
                icon
                on:click={_ => {
                    isDeleteAccountModalOpened.set(true)
                }}>
                <Icon icon={Shape.Trash} />
            </Button>
        </Controls>
    </div>
    {#if $isDeleteAccountModalOpened}
        <Modal
            on:close={_ => {
                isDeleteAccountModalOpened.set(false)
            }}>
            <div class="delete-account-pin">
                <Text hook="text-delete-account-pin-first-message" class="delete-account-pin-first-message" appearance={Appearance.Error}>
                    {$_("settings.profile.delete_account_action_description")}
                </Text>
                <Text>
                    {$_("settings.profile.delete_account_confirm_pin")}
                </Text>
                <PinInput
                    min={4}
                    max={8}
                    loading={false}
                    scramble={false}
                    stayLoggedIn={false}
                    showSettings={false}
                    showButtonSettings={false}
                    on:submit={async e => {
                        let pin = e.detail
                        await new Promise(async _ => {
                            let result = await TesseractStoreInstance.unlock(pin)
                            result.onFailure(_ => {
                                Store.addToastNotification(new ToastMessage("", wrongPinToDeleteAccountMessage, 3))
                            })
                            result.onSuccess(async _ => {
                                await clearAllData()
                            })
                        })
                    }} />
            </div>
        </Modal>
    {/if}
</div>

<style lang="scss">
    #auth-unlock {
        display: inline-flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding: var(--padding);
        width: 100%;
        height: 100%;

        .unlock-controls {
            position: absolute;
            right: var(--padding);
            bottom: var(--padding);
            display: flex;
            gap: var(--gap);
        }

        .profiles {
            display: inline-flex;
            flex-direction: column;
            gap: var(--gap);
            width: 100%;
            min-width: var(--min-component-width);
            .user {
                display: inline-flex;
                gap: var(--gap);
                width: 100%;
                justify-content: flex-start;
                align-items: center;
                border: var(--border-width) solid transparent;
                padding: var(--padding-minimal);
                border-radius: var(--border-radius);
                cursor: pointer;

                &:hover {
                    background-color: var(--alt-color);
                }

                :global(.username) {
                    flex: 1;
                }
            }
        }
        .delete-account-pin {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
            align-items: center;
            padding: var(--padding);
        }
    }
</style>
