<script>
    import { goto } from "$app/navigation";
    import Cart from "$lib/Components/Cart.svelte";

    import { user } from "$lib/stores/state.svelte.js";

    import Checkout from "$lib/Components/Checkout.svelte";

    import CheckoutModal from "$lib/Components/CheckoutModal.svelte";
    import { fetchUser } from "../../../hooks/auth.js";

    let showModal = $state(false);
    // $inspect(user.cart);

    // $inspect(user.totalPrice);

    import { PUBLIC_API_URL} from "$env/static/public";
  
    $effect( () => {
        
        
        user.computeTotalPrice();
    
        // if(!user.isAuthenticated){
        //     goto('/');
        // }

        
            
        }

        
    );


  
    const handleDelete = async (cartID) =>{
        try {
            const response = await fetch(`${PUBLIC_API_URL}/api/cart/${cartID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.accessToken}`
                },
            });


            if (response.ok) {
                let successMessage = 'Coffee removed to cart successfully!';
                const index = user.cart.findIndex(
                    (cart) => cart.id === cartID
                );
                user.cart.splice(index, 1);
            }

            } catch (error) {
                let errorMessage = 'Error fetching coffee items.';
                console.error('Error fetching coffee items:', error);
        }
        
    }

    const handleCheckout = () =>{
        showModal = true
        // alert('hello')

    }

    const confirmCheckout = async () =>{

        try {
            const response = await fetch(`${PUBLIC_API_URL}/api/cart/checkout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.accessToken}`
                }
            });


            if (!response.ok) {
                throw new Error('Failed to place order.');
            }
            goto('/app/cart/thanks');

            user.cart = [];

           fetchUser();
            

        } catch (error) {
                let errorMessage = 'Error fetching coffee items.';
                console.error('Error fetching coffee items:', error);
        }

    }


</script>

<main>
    {#if !user.cart?.length }

        <h2 class="empty-cart-text">Your cart is empty.</h2>

    {:else }
    
    {#each user.cart as cartItem}
        <Cart coffee = {cartItem.coffee} quantity = {cartItem.quantity} handleDelete = {handleDelete(cartItem.id)}/>

    {/each}
        

    {/if}

    <!-- <button onclick={checkPrice} > Check Price </button> -->
    <CheckoutModal bind:showModal confirmCheckout = {confirmCheckout} totalAmount={user.totalPrice}>

    </CheckoutModal>
</main>

{#if user.cart.length != 0}
    <Checkout total={user.totalPrice} handleCheckout = {handleCheckout}></Checkout> 
{/if}




<style>

    main{
        margin-top: 30vh;
        margin-bottom: 25vh;
        display: flex;
        flex-direction: column;
        gap: 10rem;
        margin-right: 5rem;
        margin-left: 5rem;

    }
    /* Empty Cart Message */
    .empty-cart-text {
        text-align: center;
        color: var(--text-black);
        font-size: 1.5rem;
    }

    
</style>