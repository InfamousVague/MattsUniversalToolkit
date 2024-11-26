<script lang="ts">
    import { showCallPopUp, usersDidInActiveCall } from "$lib/media/Voice"
    import { Store } from "$lib/state/Store"
    import { onMount } from "svelte"
    import { page } from "$app/stores"
    import { Shape } from "$lib/enums"
    import { get } from "svelte/store"
    import Participant from "./Participant.svelte"
    import { UIStore } from "$lib/state/ui"
    import { log } from "$lib/utils/Logger"
    import Icon from "$lib/elements/Icon.svelte"
    import { _ } from "svelte-i18n"
    import LiveLabel from "./LiveLabel.svelte"

    let previewVideo: HTMLDivElement
    $: remoteStreams = Store.state.activeCallMeta
    $: gridTemplateColumns = `repeat(${Math.min(filteredUsers.length, 3)}, 1fr)`

    $: chat = get(Store.state.activeCall)?.chat
    let ownUserKey = get(Store.state.user).key

    function sortUsers(users: string[]) {
        return users.sort((a, b) => {
            const userA = $userCache[a]
            const userB = $userCache[b]
            if (userA.media.is_playing_audio && !userB.media.is_playing_audio) return -1
            if (!userA.media.is_playing_audio && userB.media.is_playing_audio) return 1
            return 0
        })
    }

    $: filteredUsers = sortUsers($usersDidInActiveCall.filter(user => $userCache[user] && $userCache[user].key !== ownUserKey && $remoteStreams[user]) || [])
    let lastSortedUsers: string[] = []

    $: {
        if ($usersDidInActiveCall.length > 1) {
            const usersPlayingAudio = filteredUsers.filter(user => $userCache[user].media.is_playing_audio)
            if (usersPlayingAudio.length > 0 && !arraysEqual(usersPlayingAudio, lastSortedUsers)) {
                filteredUsers = sortUsers($usersDidInActiveCall)
                usersDidInActiveCall.set(filteredUsers)
                lastSortedUsers = [...usersPlayingAudio]
            }
        }
    }

    function arraysEqual(a: any[], b: any[]) {
        if (a === b) return true
        if (a == null || b == null) return false
        if (a.length !== b.length) return false

        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false
        }
        return true
    }

    Store.state.activeCall.subscribe(async activeCall => {
        log.debug(`VideoPreview: Page: ${$page.route.id}. activeCall: ${activeCall}`)
        if (activeCall) {
            chat = activeCall.chat
        }
    })

    $: chats = UIStore.state.chats
    $: userCache = Store.getUsersLookup($chats.map(c => c.users).flat())

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

<div id="video-preview" class={$showCallPopUp ? "video-preview" : "hidden"}>
    <div id="preview-video" bind:this={previewVideo}>
        <div class="users-in-call">
            <Icon icon={Shape.Users}></Icon>
            {filteredUsers.length}
        </div>
        {#if chat !== undefined && get(Store.state.activeCall) !== null && filteredUsers.length > 0}
            <div class="video-grid" style="grid-template-columns: {gridTemplateColumns};">
                {#each filteredUsers.slice(0, 3) as user}
                    {#if $remoteStreams[user]}
                        <Participant participantDid={user} userCache={$userCache} on:click={_ => {}} />
                    {/if}
                {/each}
            </div>
        {:else if chat !== undefined && get(Store.state.activeCall) !== null && filteredUsers.length === 0}
            <div class="loading-when-no-answer">
                <div class="spinner"></div>
                <p>{$_("settings.calling.waitingOthersToJoin")}</p>
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
            border: var(--border-width) solid var(--color-muted);
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

            .users-in-call {
                position: absolute;
                display: flex;
                gap: 4px;
                bottom: 8px;
                right: 12px;
                align-items: center;
                justify-content: center;
                background-color: rgba(14, 13, 13, 0.5);
                color: white;
                padding: 4px 8px;
                border-radius: 8px;
                font-size: 14px;
                z-index: 1;
            }

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
        }
    }

    .spinner {
        width: 48px;
        height: 48px;
        border: 8px solid #f3f3f3;
        border-top: 8px solid #3498db;
        border-radius: 50%;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading-when-no-answer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin: 32px;
    }

    .loading-when-no-answer p {
        margin-top: 16px;
    }
</style>
