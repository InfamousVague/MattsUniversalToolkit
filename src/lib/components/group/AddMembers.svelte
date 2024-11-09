<script lang="ts">
    import { Appearance, Size } from "$lib/enums"
    import type { Chat } from "$lib/types"
    import ProfilePicture from "../profile/ProfilePicture.svelte"
    import { Checkbox, Text } from "$lib/elements"
    import Button from "$lib/elements/Button.svelte"
    import Label from "$lib/elements/Label.svelte"
    import { _ } from "svelte-i18n"
    import { Store } from "$lib/state/Store"
    import { RaygunStoreInstance } from "$lib/wasm/RaygunStore"
    import { derived } from "svelte/store"
    import { createEventDispatcher } from "svelte"

    export let activeChat: Chat

    $: friends = derived(Store.getUsers(Store.state.friends), list => list.filter(friend => !activeChat.users.includes(friend.key)))
    let toAdd: string[] = []

    const dispatch = createEventDispatcher()
    async function add() {
        RaygunStoreInstance.addGroupParticipants(activeChat.id, toAdd)
        dispatch("close", _)
    }
</script>

<div class="friends" data-cy="group-chat-friends">
    <Label hook="label-group-invite-members" text={$_("chat.group.invite")} />
    <div class="user-selection-list" data-cy="user-selection-list">
        {#each $friends as friend}
            <button
                data-cy="user-single"
                class="user"
                on:click={() => {
                    if (toAdd.includes(friend.key)) {
                        toAdd.splice(toAdd.indexOf(friend.key), 1)
                    } else {
                        toAdd.push(friend.key)
                    }
                    toAdd = toAdd
                }}>
                <ProfilePicture hook="user-single-profile-picture" size={Size.Small} image={friend.profile.photo.image} status={friend.profile.status} />
                <div data-cy="user-single-info" class="info">
                    <Text hook="user-single-name" singleLine size={Size.Medium}>
                        {friend.name}
                    </Text>
                    <Text hook="user-single-key" singleLine muted>
                        {friend.key}
                    </Text>
                </div>
                <Checkbox hook="user-single-checkbox" checked={toAdd.includes(friend.key)} />
            </button>
        {/each}
    </div>
    <Button appearance={Appearance.Alt} disabled={toAdd.length === 0} on:click={add}>
        <Text size={Size.Medium}>{$_("chat.group.invite")}</Text>
    </Button>
</div>

<style lang="scss">
    .friends {
        display: inline-flex;
        flex-direction: column;
        padding: var(--padding);
        gap: var(--gap);
        width: 100%;

        .user {
            display: inline-flex;
            gap: var(--gap);
            align-items: center;
        }

        .user-selection-list {
            display: inline-flex;
            flex-direction: column;
            gap: var(--gap);
            height: var(--min-scrollable-height);
            overflow-y: auto;
            overflow-x: hidden;
            padding-right: var(--padding-less);
        }

        .user {
            display: inline-flex;
            gap: var(--gap);
            padding: var(--padding-less);
            padding-right: var(--padding);
            border-radius: var(--border-radius);
            border: var(--border-width) solid var(--border-radius);
            align-items: center;
            width: 100%;
            background-color: var(--alt-color);
            user-select: none;
            position: relative;
            color: var(--color);
            text-align: left;
            cursor: pointer;

            :global(input[type="checkbox"]:checked::after) {
                content: "";
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                position: absolute;
                border-radius: var(--border-radius);
                border: var(--border-width) solid var(--info-color);
                pointer-events: none;
            }

            &:hover {
                background-color: var(--alt-color-alt);
            }

            .info {
                display: inline-flex;
                flex-direction: column;
                flex: 1;
                justify-content: center;
                overflow: hidden;
                pointer-events: none;
                user-select: none;
            }
        }
    }
</style>
