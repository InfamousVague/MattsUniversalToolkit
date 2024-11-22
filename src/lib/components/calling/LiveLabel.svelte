<script>
    import { _ } from "svelte-i18n"

    export let screenShareEnabled = false
</script>

{#if screenShareEnabled}
    <div class="live-label">
        <span class="red-dot"></span>
        <span>{$_("settings.calling.live")}</span>
    </div>
{/if}

<style>
    .live-label {
        position: absolute;
        top: 8px;
        left: 12px;
        display: inline-flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 4px 8px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1;
    }

    .red-dot {
        width: 6px;
        height: 6px;
        background-color: red;
        border-radius: 50%;
        margin-right: 8px;
    }
</style>
