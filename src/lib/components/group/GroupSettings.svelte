<script lang="ts">
    import Label from "$lib/elements/Label.svelte"
    import SettingSection from "$lib/layouts/SettingSection.svelte"
    import Switch from "$lib/elements/Switch.svelte"
    import Input from "$lib/elements/Input/Input.svelte"
    import Spacer from "$lib/elements/Spacer.svelte"
    import { _ } from "svelte-i18n"
    import { ProfilePicture } from ".."
    import FileUploadButton from "../ui/FileUploadButton.svelte"
    import { Appearance, Shape, Size } from "$lib/enums"
    import type { Chat } from "$lib/types"
    import Controls from "$lib/layouts/Controls.svelte"
    import Button from "$lib/elements/Button.svelte"
    import { Icon } from "$lib/elements"
    import { createEventDispatcher, onMount } from "svelte"
    import { RaygunStoreInstance, GroupPermission } from "$lib/wasm/RaygunStore"
    import { get, writable } from "svelte/store"
    import { Store } from "$lib/state/Store"
    import Text from "$lib/elements/Text.svelte"
    import { ToastMessage } from "$lib/state/ui/toast"

    export let activeChat: Chat
    $: groupChatToBeChanged = writable(structuredClone(activeChat))

    let unsavedChanges = false
    let shakeSaveControls = false
    let groupPicture = ""
    let user = get(Store.state.user)

    $: isAdmin = $groupChatToBeChanged.creator !== undefined ? $groupChatToBeChanged.creator === user.key : false
    $: canAdd = isAdmin || $groupChatToBeChanged.settings.permissions[user.key]?.includes(GroupPermission.AddParticipants)
    $: canRename = isAdmin || $groupChatToBeChanged.settings.permissions[user.key]?.includes(GroupPermission.SetGroupName)

    $: users = Store.getUsersLookup(activeChat.users)

    let selectedUser: string | undefined = undefined

    $: {
        unsavedChanges = Object.values(propertiesChangedList).some(value => value)
        shakeSaveControls = unsavedChanges
        onUnsavedChanges(unsavedChanges)
    }

    let propertiesChangedList = {
        groupName: false,
        pictureChanged: false,
        membersPermission: false,
    }

    const dispatch = createEventDispatcher()
    function onUnsavedChanges(value: boolean) {
        dispatch("unasavedChanges", value)
    }

    function onCancelChanges() {
        $groupChatToBeChanged = structuredClone(activeChat)
        propertiesChangedList = {
            groupName: false,
            pictureChanged: false,
            membersPermission: false,
        }
        dispatch("close", _)
    }

    function onSaveChanges() {
        if (propertiesChangedList.groupName) {
            RaygunStoreInstance.updateConversationName($groupChatToBeChanged.id, $groupChatToBeChanged.name)
        }
        if (propertiesChangedList.membersPermission) {
            RaygunStoreInstance.setGroupPermissions($groupChatToBeChanged.id, $groupChatToBeChanged.settings.permissions)
        }
        propertiesChangedList = {
            groupName: false,
            pictureChanged: false,
            membersPermission: false,
        }
        unsavedChanges = false
        dispatch("close", _)
    }

    function handleClickOutside() {
        if (unsavedChanges) {
            shakeSaveControls = false
            setTimeout(() => {
                shakeSaveControls = true
            }, 50)
        }
    }

    function togglePermission(perm: GroupPermission) {
        if (!selectedUser) return
        let perms = $groupChatToBeChanged.settings.permissions[selectedUser]
        if (!perms) {
            perms = []
            $groupChatToBeChanged.settings.permissions[selectedUser] = perms
        }
        let i = perms.indexOf(perm)
        if (i !== -1) {
            perms.splice(i, 1)
        } else {
            perms.push(perm)
        }
        propertiesChangedList.membersPermission = perms.includes(perm) !== (activeChat.settings.permissions[selectedUser]?.includes(perm) || false)
        $groupChatToBeChanged = $groupChatToBeChanged
    }

    function remove_member() {
        if (!selectedUser) return
        if (activeChat.users.length < 3) {
            Store.addToastNotification(new ToastMessage("", $_("chat.group.removeTooSmall"), 2))
            return
        }
        if (selectedUser === activeChat.creator) {
            Store.addToastNotification(new ToastMessage("", $_("chat.group.removeCreator"), 2))
            return
        }
        RaygunStoreInstance.removeGroupParticipants(activeChat.id, [selectedUser])
        selectedUser = undefined
    }

    onMount(() => {
        window.addEventListener("click", handleClickOutside)
    })
</script>

<div class="settings" data-cy="group-settings">
    <Label hook="group-settings-change-photo-label" text={$_("chat.group.settings.photo")} />
    <div class="profile-picture-container">
        <ProfilePicture hook="group-settings-profile-picture" noIndicator image={groupPicture} size={Size.Large} />
        <FileUploadButton
            icon
            disabled={!isAdmin}
            tooltip={$_("chat.group.settings.photo")}
            on:upload={async picture => {
                /// TODO(Lucas): It is not implemented in warp yet
                groupPicture = picture.detail
                propertiesChangedList.pictureChanged = true
            }} />
    </div>
    <Label hook="group-settings-name-label" text={$_("chat.group.settings.name")} />
    <Input
        hook="group-settings-name-input"
        bind:value={$groupChatToBeChanged.name}
        disabled={!canRename}
        on:input={_ => {
            propertiesChangedList.groupName = $groupChatToBeChanged.name !== activeChat.name
        }} />
    <Label hook="group-settings-description-label" text={$_("chat.group.settings.description")} />
    <Input hook="group-settings-description-input" disabled={!canRename} value={$_("chat.group.settings.description.placeholder")} />
    <div class="group-user-settings">
        <Label hook="group-settings-generic-label" text={$_("chat.group.members")} />
        <div class="group-users">
            {#each activeChat.users as member}
                {@const user = $users[member]}
                <Button
                    border={member === activeChat.creator ? "coral" : member === selectedUser ? "var(--color-alt)" : ""}
                    on:click={_ => {
                        if (!selectedUser || selectedUser !== user.key) selectedUser = user.key
                        else selectedUser = undefined
                    }}>
                    <ProfilePicture id={user.key} image={user.profile.photo.image} noIndicator size={Size.Smallest} />
                    <Text size={Size.Smallest}>{user.name}</Text>
                </Button>
            {/each}
            {#if canAdd}
                <Button
                    appearance={Appearance.Alt}
                    on:click={_ => {
                        dispatch("addUsers", _)
                    }}>
                    <Icon icon={Shape.Plus} />
                    <Text size={Size.Smallest}>{$_("chat.group.invite")}</Text>
                </Button>
            {/if}
        </div>
        {#if selectedUser && $users[selectedUser]}
            <Spacer less />
            {@const user = $users[selectedUser]}
            <Text>{$_("chat.group.selectedUser")}</Text>
            <div class="selected-user">
                <ProfilePicture id={user.key} image={user.profile.photo.image} noIndicator size={Size.Small} />
                <div class="selected-user-details">
                    <Text size={Size.Smallest}>{user.name}</Text>
                    <Text muted size={Size.Smallest}>{user.key}</Text>
                </div>
            </div>
            <div class="selected-user-kick-wrap">
                <div class="selected-user-kick-text">
                    <Text size={Size.Smaller}>{$_("chat.group.kick")}</Text>
                    <Text muted size={Size.Smallest}>{$_("chat.group.kick.description")}</Text>
                </div>
                <Button disabled={!canAdd || user.key === activeChat.creator} appearance={Appearance.Error} on:click={remove_member}>
                    <Text size={Size.Smallest}>{$_("chat.group.kick")}</Text>
                </Button>
            </div>
            {#if isAdmin && user.key !== activeChat.creator}
                <div class="user-permissions-wrap">
                    <Text>{$_("chat.group.permissions")}</Text>
                    <div class="user-permissions">
                        <SettingSection small hook="settings-section-add-members" name={$_("chat.group.settings.add")} description={$_("chat.group.settings.add.description")}>
                            <Switch
                                small
                                hook="switch-add-members"
                                on={$groupChatToBeChanged.settings.permissions[user.key]?.includes(GroupPermission.AddParticipants)}
                                on:toggle={_ => {
                                    togglePermission(GroupPermission.AddParticipants)
                                }} />
                        </SettingSection>
                        <SettingSection small hook="settings-section-change-details" name={$_("chat.group.settings.details")} description={$_("chat.group.settings.details.description")}>
                            <Switch
                                small
                                hook="switch-change-details"
                                on={$groupChatToBeChanged.settings.permissions[user.key]?.includes(GroupPermission.SetGroupName)}
                                on:toggle={_ => {
                                    togglePermission(GroupPermission.SetGroupName)
                                }} />
                        </SettingSection>
                        <SettingSection small hook="settings-section-change-photo" name={$_("chat.group.settings.photo")} description={$_("chat.group.settings.photo.description")}>
                            <Switch small hook="switch-change-photo" on={false} disabled={true} on:toggle={_ => {}} />
                        </SettingSection>
                    </div>
                </div>
            {/if}
        {/if}
    </div>
    {#if unsavedChanges}
        <div class={`save-controls ${shakeSaveControls ? "shake" : ""}`} data-cy="save-controls">
            <Controls>
                <Button
                    hook="button-cancel"
                    text={$_("generic.cancel")}
                    appearance={Appearance.Alt}
                    on:click={_ => {
                        onCancelChanges()
                    }}>
                    <Icon icon={Shape.XMark} />
                </Button>
                <Button
                    hook="button-save"
                    text={$_("generic.save")}
                    appearance={Appearance.Primary}
                    on:click={async _ => {
                        onSaveChanges()
                    }}>
                    <Icon icon={Shape.CheckMark} />
                </Button>
            </Controls>
        </div>
    {/if}
</div>

<style lang="scss">
    .save-controls {
        z-index: 2;
        position: absolute;
        bottom: var(--padding);
        right: calc(var(--padding) * 2);
        padding: var(--padding);
        background-color: var(--background-alt);
        border-radius: var(--border-radius);
        border: var(--border-width) solid var(--border-color);
    }

    .group-user-settings {
        display: flex;
        flex-direction: column;
        padding: var(--padding-less);
        background-color: var(--background);
        border-radius: var(--border-radius);
        gap: var(--gap);
        max-height: 300px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 0;
        }
        .group-users {
            display: flex;
            gap: var(--gap-less);
            flex-wrap: wrap;
        }

        .selected-user {
            display: flex;
            gap: var(--gap-less);
            .selected-user-details {
                align-self: center;
            }
        }

        .selected-user-kick-wrap {
            display: flex;
            justify-content: end;
            .selected-user-kick-text {
                margin-right: auto;
            }
        }

        .user-permissions-wrap {
            display: flex;
            flex-direction: column;
            margin: var(--margin-less);
            gap: var(--gap);
            .user-permissions {
                display: flex;
                flex-direction: column;
                padding: var(--padding);
                background-color: var(--alt-color);
                border-radius: var(--border-radius);
            }
        }
    }
    @keyframes shake {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-10px);
        }
        50% {
            transform: translateX(10px);
        }
        75% {
            transform: translateX(-10px);
        }
        100% {
            transform: translateX(0);
        }
    }

    .shake {
        animation: shake 0.5s ease;
    }

    .settings {
        display: inline-flex;
        flex-direction: column;
        padding: var(--padding);
        gap: var(--gap);

        .profile-picture-container {
            position: relative;
            width: fit-content;

            :global(.button) {
                position: absolute;
                bottom: calc(var(--padding-less) * -0.5);
                right: calc(var(--padding-less) * -0.5);
                z-index: 2;
            }
        }
    }
</style>
