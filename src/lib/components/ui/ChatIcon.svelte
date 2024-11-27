<script lang="ts">
    import { ChatType, Size } from "$lib/enums"
    import type { Chat } from "$lib/types"
    import { ProfilePicture, ProfilePictureMany } from "$lib/components"
    import { Store } from "$lib/state/Store"

    export let chat: Chat
    export let loading: boolean = false
    export let profileHook: string = ""
    export let size: Size = Size.Medium
    export let noIndicator: boolean = false
    export let forceSize: boolean = false

    $: users = Store.getUsersLookup(chat.users)
</script>

{#if chat.icon}
    <ProfilePicture hook={profileHook} typing={chat.typing_indicator.size > 0} image={chat.icon} size={Size.Medium} loading={loading} />
{:else if chat.kind === ChatType.DirectMessage}
    <ProfilePicture
        hook={profileHook}
        typing={chat.typing_indicator.size > 0}
        id={$users[chat.users[1]]?.key}
        image={$users[chat.users[1]]?.profile.photo.image}
        frame={$users[chat.users[1]]?.profile.photo.frame}
        status={$users[chat.users[1]]?.profile.status}
        size={size}
        noIndicator={noIndicator}
        loading={loading} />
{:else}
    <ProfilePictureMany users={Object.values($users)} size={size} forceSize={forceSize} on:click />
{/if}
