<script lang="ts">
    import { Appearance, Shape, Size } from "$lib/enums"
    import { defaultUser, type User } from "$lib/types"
    import { fade } from "svelte/transition"
    import { ProfilePicture } from ".."
    import { animationDuration } from "$lib/globals/animations"
    import { mock_users } from "$lib/mock/users"
    import Controls from "$lib/layouts/Controls.svelte"
    import { Icon, Button, Text } from "$lib/elements"
    import Spacer from "$lib/elements/Spacer.svelte"
    import LiveLabel from "./LiveLabel.svelte"
    import { Store } from "$lib/state/Store"
    import { log } from "$lib/utils/Logger"
    import { createEventDispatcher } from "svelte"
    import { VoiceRTCInstance } from "$lib/media/Voice"

    export let participantDid: string
    export let showDetails: boolean = false
    export let userCache: Record<string, User>
    export let isOwnUser: boolean = false
    export let isFullScreen: boolean = false

    $: participantWihoutVideo = !$remoteStreams[participantDid]?.stream || (!$remoteStreams[participantDid]?.user?.videoEnabled && !$remoteStreams[participant.key]?.user?.screenShareEnabled)
    $: remoteStreams = Store.state.activeCallMeta

    $: isTalking = userCache[participantDid].media.is_playing_audio
    $: isMuted = $remoteStreams[participantDid] && !$remoteStreams[participantDid]?.user?.audioEnabled
    $: isDeafened = $remoteStreams[participantDid] && $remoteStreams[participantDid]?.user?.isDeafened

    let participant = userCache[participantDid] || defaultUser

    function attachStream(node: HTMLMediaElement, user: string) {
        const stream = $remoteStreams[user]?.stream

        if (stream) {
            node.srcObject = stream
            stream.onremovetrack = () => {
                log.dev("Stream removed: ", user)
            }
        }

        return {
            update(newUser: string) {
                const newStream = $remoteStreams[newUser]?.stream
                if (newStream && node.srcObject !== newStream) {
                    node.srcObject = newStream
                }
            },
            destroy() {
                node.srcObject = null
            },
        }
    }

    const dispatch = createEventDispatcher()

    function toggleDetails(state: boolean) {
        showDetails = state
    }
</script>

{#if !participantWihoutVideo && !isOwnUser}
    <div
        class="video-container {userCache[participantDid].media.is_playing_audio ? 'talking' : ''}"
        on:click
        style={!$remoteStreams[participantDid]?.user?.videoEnabled && !$remoteStreams[participantDid]?.user?.screenShareEnabled ? "display: none" : ""}
        role="none">
        <video
            data-cy="remote-user-video"
            id="remote-user-video-{participantDid}"
            class={$remoteStreams[participantDid]?.user?.videoEnabled || $remoteStreams[participantDid]?.user?.screenShareEnabled ? "" : "disabled"}
            autoplay
            muted={false}
            use:attachStream={participantDid}>
            <track kind="captions" src="" />
        </video>
        <div class="user-name">{userCache[participantDid].name}</div>
        <LiveLabel screenShareEnabled={$remoteStreams[participantDid]?.user?.screenShareEnabled} />
        {#if !$remoteStreams[participantDid]?.user?.audioEnabled}
            <div class="mute-status">
                <Icon icon={Shape.MicrophoneSlash}></Icon>
            </div>
        {/if}
    </div>
{:else if !participantWihoutVideo && isOwnUser}
    <div
        class="video-container {userCache[participantDid].media.is_playing_audio ? 'talking' : ''} {isFullScreen ? 'fullscreen' : ''}"
        style={!VoiceRTCInstance.callOptions.video.enabled && !VoiceRTCInstance.callOptions.video.screenShareEnabled ? "display: none" : ""}
        role="none"
        on:click>
        <video
            data-cy="local-user-video"
            id="local-user-video"
            bind:this={VoiceRTCInstance.localVideoCurrentSrc}
            style="display: {VoiceRTCInstance.callOptions.video.enabled || VoiceRTCInstance.callOptions.video.screenShareEnabled ? 'block' : 'none'}"
            muted
            autoplay>
            <track kind="captions" src="" />
        </video>
        <div class="user-name">{userCache[participantDid].name}</div>
        {#if !VoiceRTCInstance.callOptions.audio.enabled}
            <div class="mute-status">
                <Icon icon={Shape.MicrophoneSlash}></Icon>
            </div>
        {/if}
    </div>
{:else}
    <div class="participant" data-cy="call-participant">
        <!-- svelte-ignore a11y-media-has-caption -->

        {#if showDetails}
            <div class="details" in:fade={{ duration: animationDuration }}>
                <div data-cy="participant-user" class="user">
                    <ProfilePicture hook="participant-profile-picture" id={mock_users[1].key} image={mock_users[1].profile.photo.image} noIndicator size={Size.Smallest} />
                    <Text withShadow size={Size.Smaller}>{mock_users[1].name}</Text>
                </div>
            </div>
            <div class="state" in:fade={{ duration: animationDuration }}>
                <Controls>
                    {#if isMuted}
                        <Button hook="button-participant-mute" appearance={Appearance.Alt} small icon>
                            <Icon icon={Shape.MicrophoneSlash} />
                        </Button>
                    {/if}
                    {#if isDeafened}
                        <Button hook="button-participant-deafen" appearance={Appearance.Alt} small icon>
                            <Icon icon={Shape.HeadphoneSlash} />
                        </Button>
                    {/if}
                </Controls>
            </div>
        {/if}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->

        <div data-cy="participant-without-video" class="simple" on:click on:mouseover={() => toggleDetails(true)} on:mouseleave={() => toggleDetails(false)}>
            {#if showDetails}
                <div class="state centered" in:fade={{ duration: animationDuration }}>
                    <Controls>
                        {#if isMuted}
                            <Button hook="button-participant-mute" appearance={Appearance.Alt} icon disabled>
                                <Icon icon={Shape.MicrophoneSlash} />
                            </Button>
                        {/if}
                        {#if isDeafened}
                            <Button hook="button-participant-deafen" appearance={Appearance.Alt} icon>
                                <Icon icon={Shape.HeadphoneSlash} />
                            </Button>
                        {/if}
                    </Controls>
                </div>
            {/if}
            <ProfilePicture
                hook="participant-profile-picture"
                id={participant.key}
                image={participant.profile.photo.image}
                size={Size.Large}
                noIndicator
                highlight={isMuted || isDeafened ? Appearance.Error : isTalking ? Appearance.Success : Appearance.Alt} />
            <Spacer less />
            <Text singleLine size={Size.Smaller}>{participant.name}</Text>
        </div>
    </div>
{/if}

<style lang="scss">
    .video-container {
        position: relative;
        display: inline-block;
        border-radius: 12px;
        overflow: hidden;
        border: 2px solid var(--color-muted);
        cursor: pointer;
        &.talking {
            border: 2px solid var(--success-color);
        }
        width: 100%;
        height: 100%;
        aspect-ratio: 4 / 3;

        .user-name {
            position: absolute;
            bottom: 8px;
            left: 12px;
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 4px 8px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1;
        }

        .mute-status {
            position: absolute;
            display: flex;
            bottom: 8px;
            right: 12px;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 4px 8px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1;
        }

        video {
            object-fit: cover;
            border-radius: 12px;
            background-color: var(--black);
            width: 100%;
            height: 100%;

            &.disabled {
                width: 0;
                height: 0;
            }
        }
    }

    .participant {
        width: fit-content;
        height: fit-content;
        position: relative;
        align-items: center;
        justify-content: center;
        display: flex;

        .simple {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &:hover {
                cursor: pointer;
            }
        }

        // video {
        //     width: 300px;
        //     border-radius: var(--border-radius);
        //     border: var(--border-width-more) solid transparent;

        //     &:hover {
        //         border: var(--border-width-more) solid var(--primary-color);
        //         cursor: pointer;
        //     }

        //     &.muted,
        //     &.deafened {
        //         border: var(--border-width-more) solid var(--error-color);
        //     }
        // }

        .details {
            position: absolute;
            bottom: 0;
            padding: var(--padding-less) var(--padding-minimal);
            justify-content: center;
            pointer-events: none;

            .user {
                display: inline-flex;
                flex-direction: row;
                gap: var(--gap-less);
                justify-content: center;
                align-items: center;
                background-color: var(--opaque-color);
                padding: var(--padding-minimal);
                padding-right: var(--padding-less);
                border-radius: var(--border-radius-less);
                backdrop-filter: blur(var(--blur-radius));
                -webkit-backdrop-filter: blur(var(--blur-radius));
            }
        }

        .state {
            position: absolute;
            top: 0;
            right: 0;
            display: inline-flex;
            gap: var(--gap);
            padding: var(--padding-less);
            pointer-events: none;
            z-index: 2;

            &.centered {
                bottom: 0;
                left: 0;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
