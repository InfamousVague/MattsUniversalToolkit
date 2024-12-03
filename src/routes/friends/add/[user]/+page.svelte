<script lang="ts">
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
    import { Route } from "$lib/enums"
    import { PageState } from "$lib/state/page/PageStates"
    import { onMount } from "svelte"

    let { key } = $page.data

    onMount(() => {
        PageState.addFriend.set(key)
        goto(Route.Friends)
    })
</script>

<div></div>

<style lang="scss">
</style>
