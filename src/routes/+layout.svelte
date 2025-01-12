<script>
    import "../app.css";
    import Navbar from "$lib/Components/Navbar.svelte";
    import AdminNav from "$lib/Components/AdminNav.svelte";
    import { fetchUser } from "../hooks/auth.js";
    import { user } from "$lib/stores/state.svelte.js";

    let { children } = $props();

 




    $effect( async ()=>{ 
        fetchUser(); // crucial to stay the user logged in
        console.log(user);
    })

    
</script>

{#if user.name === 'admin'}
    <AdminNav/>
{:else}
    <Navbar cartCount = {user.cart.length}/>
{/if}

<main>
    {@render children?.()}
</main>




