<script lang="ts">
    import { Size } from "$lib/enums"
    import type { User } from "$lib/types"
    import ProfilePicture from "../profile/ProfilePicture.svelte"
    import { Text } from "$lib/elements"
    import Label from "$lib/elements/Label.svelte"
    import { _ } from "svelte-i18n"

    export let members: User[] = []
</script>

<div class="members" data-cy="group-chat-members">
    <Label text={$_("chat.group.amount", { values: { amount: members.length } })} />
    {#each members as member}
        <div class="user">
            <ProfilePicture id={member.key} image={member.profile.photo.image} noIndicator size={Size.Small} />
            <div class="username">
                <Text singleLine class="username">{member.name}</Text>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .members {
        display: inline-flex;
        flex-direction: column;
        padding: var(--padding);
        gap: var(--gap);

        .user {
            display: inline-flex;
            gap: var(--gap);
            align-items: center;

            .username {
                display: inline-flex;
                align-items: center;
                min-width: 150px;
                flex: 1;
            }
        }
    }
</style>
