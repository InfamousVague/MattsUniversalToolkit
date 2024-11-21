<script lang="ts">
    import { page } from "$app/stores"
    import "$lib/lang"
    import { checkIfUserIsLogged } from "$lib/state/auth"

    checkIfUserIsLogged($page.route.id, true)
</script>
