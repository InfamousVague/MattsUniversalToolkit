<script lang="ts">
    import { Button, Icon, Text } from "$lib/elements"
    import { Appearance, Shape, Size } from "$lib/enums"
    import { VoiceRTCInstance } from "$lib/media/Voice"
    import { MessageType } from "$lib/types"
    import { getValidPaymentRequest } from "$lib/utils/Wallet"
    import { _ } from "svelte-i18n"

    export let chat: string
    export let texts: string[]
    export let remote: boolean
    export let type: MessageType
</script>

{#each texts as line}
    {#if getValidPaymentRequest(line) != undefined}
        <Button text={getValidPaymentRequest(line)?.toDisplayString()} on:click={async () => getValidPaymentRequest(line)?.execute()}></Button>
    {:else if type === MessageType.CDN}
        <div class="sticker">
            <Text hook="text-chat-message" markdown={line} size={Size.Smallest} appearance={remote ? Appearance.Default : Appearance.Alt} />
        </div>
    {:else if type === MessageType.CALL_START}
        <Text hook="text-chat-message" markdown={line} appearance={remote ? Appearance.Default : Appearance.Alt} />
        <div class="call-control">
            <Button
                tooltip={$_("settings.calling.join")}
                icon
                appearance={Appearance.Alt}
                on:click={async () => {
                    VoiceRTCInstance.startToMakeACall([], chat, true)
                    VoiceRTCInstance.makeCall(false)
                }}>
                <Icon icon={Shape.PhoneCall} /></Button>
            <Button
                tooltip={$_("settings.calling.join")}
                icon
                appearance={Appearance.Alt}
                on:click={async () => {
                    VoiceRTCInstance.startToMakeACall([], chat, false)
                    VoiceRTCInstance.makeCall(false)
                }}>
                <Icon icon={Shape.VideoCamera} /></Button>
        </div>
    {:else}
        <Text hook="text-chat-message" markdown={line} appearance={remote ? Appearance.Default : Appearance.Alt} />
    {/if}
{/each}

<style lang="scss">
    .sticker {
        width: var(--sticker-width-rendered);
    }
    .call-control {
        display: flex;
        gap: var(--gap);
        justify-content: center;
    }
</style>
