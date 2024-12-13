<script lang="ts" context="module">
    import { Keyboard } from "@capacitor/keyboard"
    // A close handler referencing the current open context menu
    let close_context: any
</script>

<script lang="ts">
    import Button from "$lib/elements/Button.svelte"
    import Icon from "$lib/elements/Icon.svelte"
    import { clickoutside } from "@svelte-put/clickoutside"
    import { Appearance } from "$lib/enums"
    import type { ContextItem } from "$lib/types"
    import { createEventDispatcher, onDestroy, onMount, tick } from "svelte"
    import { log } from "$lib/utils/Logger"
    import type { PluginListenerHandle } from "@capacitor/core"
    import { isAndroidOriOS } from "$lib/utils/Mobile"

    let visible: boolean = false
    let coords: [number, number] = [0, 0]
    let context: HTMLElement
    let slotContainer: HTMLElement
    export let items: ContextItem[] = []
    export let hook: string = ""

    const dispatch = createEventDispatcher()

    function onClose(event: CustomEvent<MouseEvent> | MouseEvent) {
        if (isLongPress) {
            return
        }
        visible = false
        dispatch("close", event)
        close_context = undefined
    }

    function calculatePos(evt: MouseEvent): [number, number] {
        if (context === undefined) return [evt.clientX, evt.clientY]
        const { width, height } = context.getBoundingClientRect()

        const offsetX = evt.pageX
        const offsetY = evt.pageY
        const screenWidth = evt.view!.innerWidth
        const screenHeight = evt.view!.innerHeight - keyboardHeight

        const overFlowX = screenWidth < width + offsetX
        const overFlowY = screenHeight < height + offsetY

        const topX = overFlowX ? Math.max(5, screenWidth - width - 5) : Math.max(5, offsetX)

        // Calculate Y position, prioritizing space above the cursor if not enough below
        const adjustedY = offsetY - height
        const topY = screenHeight - offsetY < height + 30 ? Math.max(5, adjustedY) : Math.max(5, overFlowY ? offsetY - height : offsetY)

        return [topX, topY]
    }

    async function openContext(evt: MouseEvent) {
        if (close_context !== undefined) {
            close_context()
        }
        close_context = () => {
            if (!isLongPress) {
                visible = false
            }
        }
        evt.preventDefault()
        coords = [evt.clientX, evt.clientY]
        visible = true
        await tick()
        coords = calculatePos(evt)
    }

    let keyboardHeight = 0
    onMount(() => {
        let mobileKeyboardListener01: PluginListenerHandle | undefined
        let mobileKeyboardListener02: PluginListenerHandle | undefined

        async function setupListeners() {
            mobileKeyboardListener01 = await Keyboard.addListener("keyboardWillShow", info => {
                keyboardHeight = info.keyboardHeight
            })

            mobileKeyboardListener02 = await Keyboard.addListener("keyboardWillHide", () => {
                keyboardHeight = 0
            })
        }
        if (isAndroidOriOS()) {
            setupListeners()
        }

        return () => {
            if (mobileKeyboardListener01) mobileKeyboardListener01.remove()
            if (mobileKeyboardListener02) mobileKeyboardListener02.remove()
        }
    })

    let touchTimer: number | undefined
    let isLongPress: boolean = false

    function handleTouchStart(evt: TouchEvent) {
        if (evt.touches.length === 1) {
            isLongPress = false
            let longPressElement = evt.target as HTMLElement
            longPressElement.style.pointerEvents = "none"
            touchTimer = window.setTimeout(() => {
                const touch = evt.touches[0]
                const mouseEvent = new MouseEvent("contextmenu", {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                })
                isLongPress = true
                openContext(mouseEvent)
            }, 500)
        }
    }

    function handleTouchEnd(evt: TouchEvent) {
        clearTimeout(touchTimer)
        let longPressElement = evt.target as HTMLElement
        longPressElement.style.pointerEvents = ""
        if (isLongPress) {
            evt.preventDefault()
        }
        setTimeout(() => {
            isLongPress = false
        }, 100)
    }

    function handleTouchMove(evt: TouchEvent) {
        clearTimeout(touchTimer)
        isLongPress = false
    }

    function handleItemClick(e: MouseEvent, item: ContextItem) {
        e.stopPropagation()
        log.info(`Clicked ${item.text}`)
        item.onClick()
        const customEvent = new CustomEvent("customMouseEvent", {
            detail: e,
        })
        onClose(customEvent)
    }

    onMount(() => {
        slotContainer.addEventListener("touchstart", handleTouchStart)
        slotContainer.addEventListener("touchend", handleTouchEnd)
        slotContainer.addEventListener("touchmove", handleTouchMove)
    })

    onDestroy(() => {
        slotContainer.removeEventListener("touchstart", handleTouchStart)
        slotContainer.removeEventListener("touchend", handleTouchEnd)
        slotContainer.removeEventListener("touchmove", handleTouchMove)
    })
</script>

<div class="long-press-div-container" bind:this={slotContainer}>
    <slot name="content" open={openContext} />
</div>
{#if visible}
    <div id="context-menu" data-cy={hook} bind:this={context} use:clickoutside on:clickoutside={onClose} style={`position: fixed; left: ${coords[0]}px; top: ${coords[1]}px;`}>
        <slot name="items" close={onClose}></slot>
        {#each items as item}
            <Button
                hook="context-menu-option-{item.text}"
                class="item"
                appearance={item.appearance === Appearance.Default ? Appearance.Transparent : item.appearance}
                disabled={item.disabled}
                text={item.text}
                on:click={e => handleItemClick(e, item)}>
                <Icon icon={item.icon} />
            </Button>
        {/each}
    </div>
{/if}

<style lang="scss">
    .long-press-div-container {
        all: unset;
        display: contents;
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
        user-select: none;
        touch-action: none;
    }

    #context-menu {
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
        display: inline-flex;
        flex-direction: column;
        gap: var(--gap-less);
        background-color: var(--opaque-color);
        backdrop-filter: blur(var(--blur-radius));
        -webkit-backdrop-filter: blur(var(--blur-radius));
        padding: var(--padding-less);
        border-radius: var(--border-radius);
        border: var(--border-width) solid var(--border-color);

        :global(.item) {
            justify-content: flex-start;
            text-wrap: no-wrap;
        }
    }
</style>
