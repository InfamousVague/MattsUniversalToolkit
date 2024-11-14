<script lang="ts">
    import CallScreen from "$lib/components/calling/CallScreen.svelte"
    import { callScreenVisible } from "$lib/media/Voice"
    import { Store } from "$lib/state/Store"
    import { onMount } from "svelte"
    import { page } from "$app/stores"
    import { Shape } from "$lib/enums"
    import { get } from "svelte/store"
    import Participant from "./Participant.svelte"
    import { UIStore } from "$lib/state/ui"
    import { log } from "$lib/utils/Logger"
    import Icon from "$lib/elements/Icon.svelte"

    let showVideoPreview = false
    let previewVideo: HTMLDivElement
    $: remoteStreams = Store.state.activeCallMeta

    $: chat = get(Store.state.activeCall)?.chat

    $: filteredUsers = chat?.users.filter(user => $userCache[user] && $userCache[user].key !== ownUser.key && $remoteStreams[user]) || []
    $: gridTemplateColumns = `repeat(${Math.min(filteredUsers.length, 3)}, 1fr)`

    Store.state.activeCall.subscribe(async activeCall => {
        log.debug(`VideoPreview: Page: ${$page.route.id}. activeCall: ${activeCall}`)
        if (activeCall) {
            chat = activeCall.chat
        } else {
            chat = undefined
            showVideoPreview = false
        }
    })

    callScreenVisible.subscribe(visible => {
        if (visible === true) {
            showVideoPreview = false
            return
        }
        if (visible === false && get(Store.state.activeCall) !== null) {
            setTimeout(() => {
                log.warn("Changing video preview visibility")
                showVideoPreview = true
            }, 100)
        }
    })

    $: ownUser = get(Store.state.user)
    $: chats = UIStore.state.chats
    $: userCache = Store.getUsersLookup($chats.map(c => c.users).flat())

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

    onMount(() => {
        const video = previewVideo

        video.addEventListener("mousedown", onMouseDown)

        function onMouseDown(event: any) {
            event.preventDefault()
            const offsetX = event.clientX - video.getBoundingClientRect().left
            const offsetY = event.clientY - video.getBoundingClientRect().top

            document.addEventListener("mousemove", onMouseMove)
            document.addEventListener("mouseup", onMouseUp)

            video.addEventListener("dblclick", () => {
                // TODO: Go to call
            })

            function onMouseMove(event: any) {
                let newLeft = event.clientX - offsetX
                let newTop = event.clientY - offsetY

                // Ensure the video stays within the bounds of the screen
                newLeft = Math.max(0, Math.min(window.innerWidth - video.offsetWidth, newLeft))
                newTop = Math.max(0, Math.min(window.innerHeight - video.offsetHeight, newTop))

                video.style.left = `${newLeft}px`
                video.style.top = `${newTop}px`
            }

            function onMouseUp() {
                document.removeEventListener("mousemove", onMouseMove)
                document.removeEventListener("mouseup", onMouseUp)

                // Snap to position (example: snap to corners)
                const middleX = window.innerWidth / 2
                const middleY = window.innerHeight / 2

                if (parseInt(video.style.left) < middleX / 2) {
                    video.style.left = "0px"
                } else if (parseInt(video.style.left) > middleX * 1.5) {
                    video.style.left = `${window.innerWidth - video.offsetWidth}px`
                }

                if (parseInt(video.style.top) < middleY / 2) {
                    video.style.top = "0px"
                } else if (parseInt(video.style.top) > middleY * 1.5) {
                    video.style.top = `${window.innerHeight - video.offsetHeight}px`
                }

                video.classList.add("snap-animation")
                setTimeout(() => {
                    video.classList.remove("snap-animation")
                }, 300)
            }
        }
    })
</script>

<div id="video-preview" class={showVideoPreview ? "video-preview" : "hidden"}>
    <div id="preview-video" bind:this={previewVideo}>
        {#if chat !== undefined && get(Store.state.activeCall) !== null}
            <div class="video-grid" style="grid-template-columns: {gridTemplateColumns};">
                {#each filteredUsers as user}
                    {#if $remoteStreams[user]}
                        <div class="video-container {$userCache[user].media.is_playing_audio ? 'talking' : ''}" style={!$remoteStreams[user].user.videoEnabled ? "display: none" : ""} role="none">
                            <video data-cy="remote-user-video" id="remote-user-video-{user}" class={$remoteStreams[user].user.videoEnabled ? "" : "disabled"} autoplay muted={false} use:attachStream={user}>
                                <track kind="captions" src="" />
                            </video>
                            <div class="user-name">{$userCache[user].name}</div>
                            {#if !$remoteStreams[user].user.audioEnabled}
                                <div class="mute-status">
                                    <Icon icon={Shape.MicrophoneSlash}></Icon>
                                </div>
                            {/if}
                        </div>

                        {#if !$remoteStreams[user].stream || !$remoteStreams[user].user.videoEnabled}
                            <Participant
                                participant={$userCache[user]}
                                hasVideo={$userCache[user].media.is_streaming_video}
                                isMuted={$remoteStreams[user] && !$remoteStreams[user].user.audioEnabled}
                                isDeafened={$remoteStreams[user] && $remoteStreams[user].user.isDeafened}
                                isTalking={$userCache[user].media.is_playing_audio}
                                on:click={_ => {}} />
                        {/if}
                    {/if}
                {/each}
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .hidden {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        z-index: -10;
        width: 0;
        height: 0;
        overflow: hidden;
        pointer-events: none;
    }

    #video-preview {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        #preview-video {
            width: 400px;
            height: 225px;
            background: var(--background-alt);
            border-radius: var(--border-radius);
            border: var(--border-width) solid var(--border-color);
            position: absolute;
            top: 0;
            right: 0;
            cursor: grab;
            pointer-events: all;
            transition: transform 0.3s ease;
            margin: var(--padding);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: var(--padding);
            box-sizing: border-box;
            overflow: hidden;
            align-items: center;

            .video-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                justify-content: center;
                align-items: center;
                justify-items: center;
                gap: 10px;
                width: 100%;
                height: 100%;
            }

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
        }
    }
</style>
