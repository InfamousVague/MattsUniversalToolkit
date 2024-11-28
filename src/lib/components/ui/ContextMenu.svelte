<script lang="ts" context="module">
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

    let visible: boolean = false
    let coords: [number, number] = [0, 0]
    let context: HTMLElement
    let touchTimeout: number | undefined
    let slotContainer: HTMLElement
    export let items: ContextItem[] = []
    export let hook: string = ""

    const dispatch = createEventDispatcher()
    function onClose(event: CustomEvent<MouseEvent> | MouseEvent) {
        visible = false
        dispatch("close", event)
        close_context = undefined
    }

    function calculatePos(evt: MouseEvent | TouchEvent): [number, number] {
        if (!context) {
            if (evt instanceof MouseEvent) {
                return [evt.clientX, evt.clientY]
            } else if (evt instanceof TouchEvent) {
                const touch = evt.touches[0]
                return [touch.clientX, touch.clientY]
            }
            return [0, 0]
        }

        const { width, height } = context.getBoundingClientRect()

        let offsetX: number, offsetY: number, screenWidth: number, screenHeight: number

        if (evt instanceof MouseEvent) {
            offsetX = evt.pageX
            offsetY = evt.pageY
            screenWidth = evt.view!.innerWidth
            screenHeight = evt.view!.innerHeight
        } else if (evt instanceof TouchEvent) {
            const touch = evt.touches[0]
            const targetElement = touch.target as HTMLElement

            const doc = targetElement.ownerDocument!
            const win = doc.defaultView!

            offsetX = touch.pageX
            offsetY = touch.pageY
            screenWidth = win.innerWidth
            screenHeight = win.innerHeight
        } else {
            return [0, 0]
        }

        // Calculate overflow
        const overFlowX = screenWidth < width + offsetX
        const overFlowY = screenHeight < height + offsetY

        // Adjust X position
        const topX = overFlowX ? Math.max(5, screenWidth - width - 5) : Math.max(5, offsetX)

        // Adjust Y position
        const topY = screenHeight - offsetY < height + 30 ? Math.max(5, offsetY - height) : Math.max(5, overFlowY ? offsetY - height : offsetY)

        return [topX, topY]
    }

    async function openContext(evt: MouseEvent | TouchEvent) {
        if (close_context !== undefined) {
            close_context()
        }
        close_context = () => (visible = false)

        evt.preventDefault()
        visible = true

        if (evt instanceof MouseEvent) {
            coords = [evt.clientX, evt.clientY]
        } else if (evt instanceof TouchEvent) {
            const touch = evt.touches[0]
            coords = [touch.clientX, touch.clientY]
        }

        await tick()
        coords = calculatePos(evt)
    }

    function handleTouchStart(evt: TouchEvent) {
        document.body.style.userSelect = "none"

        touchTimeout = window.setTimeout(() => {
            openContext(evt)
        }, 350)
    }

    function handleTouchEnd() {
        if (touchTimeout !== undefined) {
            clearTimeout(touchTimeout)
            touchTimeout = undefined
        }
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
        // Add event listeners for mobile
        slotContainer.addEventListener("touchstart", handleTouchStart)
        slotContainer.addEventListener("touchend", handleTouchEnd)
    })

    onDestroy(() => {
        slotContainer.removeEventListener("touchstart", handleTouchStart)
        slotContainer.removeEventListener("touchend", handleTouchEnd)
    })
</script>

<div bind:this={slotContainer}>
    <slot name="content" open={openContext} />
</div>
{#if visible}
    <div id="context-menu" data-cy={hook} bind:this={context} use:clickoutside on:clickoutside={onClose} style={`left: ${coords[0]}px; top: ${coords[1]}px;`}>
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
