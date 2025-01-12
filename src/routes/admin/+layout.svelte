<script>
    import { fetchUser } from "../../hooks/auth.js";

    import { user } from "$lib/stores/state.svelte.js";
    let { children } = $props()

    


    $effect(()=>{
        fetchUser();
        console.log(user);
        
    })
</script>

<main>

    {@render children()}
</main>


