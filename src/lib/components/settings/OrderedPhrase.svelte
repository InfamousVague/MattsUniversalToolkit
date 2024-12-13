<script lang="ts">
    import { fade } from "svelte/transition"
    import { animationDelay, animationDuration } from "$lib/globals/animations"
    import { Text, Loader } from "$lib/elements"
    import Input from "$lib/elements/Input/Input.svelte"
    import type { Writable } from "svelte/store"

    export let number: number = 0
    export let word: string = "UNKNOWN"
    export let loading: boolean = false
    export let editable: boolean = false
</script>

<div class="ordered-phrase">
    <span class="number">
        {#if loading}
            <Loader />
        {:else}
            <div data-cy="ordered-phrase-number-{number}" in:fade={{ duration: animationDuration, delay: number * animationDelay }}>
                {number}
            </div>
        {/if}
    </span>
    <span class="word {editable ? 'editable' : ''}">
        {#if loading}
            <Loader text />
        {:else}
            <div data-cy="ordered-phrase-word-{number}" in:fade={{ duration: animationDuration, delay: number * animationDelay }}>
                {#if editable}
                    <Input bind:value={word} noCapitalize on:paste></Input>
                {:else}
                    <Text>{word}</Text>
                {/if}
            </div>
        {/if}
    </span>
</div>

<style lang="scss">
    .ordered-phrase {
        display: inline-flex;
        flex: 40%;
        background-color: var(--alt-color);
        border-radius: var(--border-radius-minimal);
        overflow: hidden;
        align-items: center;
        justify-content: center;
        position: relative;
        height: var(--input-height);
        padding-left: 1.5rem;
        border: var(--border-width) solid var(--primary-color);
        font-family: "SpaceMono";

        .number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary-color);
            color: var(--color);
            font-size: var(--font-size-smaller);
            padding: 0 var(--padding-less);
            width: 1.75rem;
            height: 100%;
            align-self: flex-start;
            position: absolute;
            top: 0;
            left: 0;
        }

        .word {
            display: inline-block;
            flex: 1;
            padding: var(--padding-minimal) var(--padding);
            &.editable {
                padding: 0;
            }
        }

        :global(.input-group > .input-container) {
            border: none;
        }
        :global(.input-group > .input-container::selection) {
            border: none;
        }
    }
</style>
