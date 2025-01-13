<script>
    import { goto } from "$app/navigation";
    import { user } from "$lib/stores/state.svelte.js";
    import { fetchUser } from "../../../../hooks/auth.js";
    import { PUBLIC_API_URL } from "$env/static/public";

    let { data } = $props();

    let coffee = $state(data.coffee);

    let quantity = $state(1);


    function increaseQuantity() {
        quantity += 1;
    }

    function decreaseQuantity() {
        if (quantity > 1) {
            quantity -= 1;
        }
    }



    const handleAddToCart = async () =>{
        try {

            let formData = {
                "coffee_id": coffee.id,
                "quantity": quantity
            }

            formData = JSON.stringify(formData)
            // console.log(formData);
            
            const response = await fetch(`https://${PUBLIC_API_URL}/api/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.accessToken}`
                },
                body: formData
            });


            if (response.ok) {
                let successMessage = 'Coffee added to cart successfully!';
                alert(successMessage);
                fetchUser();
                goto('/app/cart')
            }


        } catch (error) {
            let errorMessage = 'Error fetching coffee items.';
            console.error('Error fetching coffee items:', error);
        }
        
    }

    let totalPrice = $derived(coffee.price  * quantity);



    $effect(()=>{
        if (!user.isAuthenticated){
            alert('Please login first!')
            goto('/auth/login')
        }
    })
</script>


<main>
    {#if !user.isAuthenticated}
        <h1>Login First!</h1>
    {:else}
    <section>
        <!-- image section; 60% -->
        <div class="img-sec">
            <img class="img" src={coffee.img} alt="" />
        </div>

        <!-- text section; 40% -->
        <div class="text-sec">
            <div class="coffee-name">{coffee.title}</div>

            <!-- price -->
            <div class="price-sec">
                <span class="price">₱ {coffee.price}</span>
            </div>

            <!-- description -->

            <div class="description">
                <p class="desc-text">{coffee.description2}</p>
            </div>
            
            <!-- add to cart and no. of coffee buttons -->
            <div class="cart-buttons">
                <div class="quantity-sec">
                    <button onclick={decreaseQuantity}>-</button>
                        <span class="quantity">{quantity}</span>
                    <button onclick={increaseQuantity}>+</button>
                </div>

                <button class="add_to_cart" onclick={handleAddToCart}>
                    Add to Cart | ₱ {totalPrice}
                </button>
            </div>
        </div>
    </section>

    {/if}

 
</main>



<style>
    section {
        width: 100%;
        height: 100vh;
        background-color: var(--text-white);
        display: flex;
        flex-direction: row;
        overflow: auto;
    }

    .img-sec {
        width: 60%;
        justify-content: center;
        align-items: center;
        padding: 2em; 
        margin-top: 10em;
        text-align: center;
    }

    .img {
        width: 30em;
        max-width: 100%; 
        margin-top: -5em;
        height: auto;
    }

    .text-sec {
        width: 40%;
        text-align: left;
        padding: 5em;
    }

    .coffee-name {
        margin-top: 2em;
        font-size: 2em;
        font-weight: bold;
        color: var(--text-black);
    }


    .price-sec {
        display: flex;
        flex-direction: row;
        margin-top: 2em;
    }


    .price {
        font-size: 2em;
        color: var(--text-black);
    }

    .description {
        margin-top: 2em;
        width: 100%;
    }

    .desc-text {
        font-size: 1rem;
        color: var(--text-black);
    }

    .cart-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1em;
        border-radius: 10px;
        background-color: var(--text-white);
        padding: 1em; 
    }

    .quantity-sec {
        display: flex;
        align-items: center;
        gap: 1em; 
        padding: 0.5em;
        border-radius: 5px;
    }

    button {
        padding: 0.5em 1em;
        font-size: 1em;
        cursor: pointer;
        background-color: var(--text-white);
        border: 1px solid #ccc;
        border-radius: 5px;
        color: var(--text-black);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
        background-color: #e0e0e0;
        transform: translateY(-2px); 
    }

    .quantity {
        font-size: 2em;
        color: var(--text-black);
        text-align: center; 
        width: 2em; 
    }

    .add_to_cart {
        width: 25em;
        background-color: var(--primary-color);
        color: var(--text-white);
        border-radius: 5px;
        font-weight: bold;
    }

    .add_to_cart:hover {
        background-color: var(--text-white);
        color: var(--text-black);
    }

    /* ========IPADPRO========== */
    @media only screen and (min-width: 835px) and (max-width: 1030px) {

        main{
            margin-top: 5em;
        }

        .img-sec {
            padding: 1em; 
            width: 40%;
        }

        .text-sec {
            padding: 1em;
            margin-top: 3em;
            width: 60%;
        }

        .img {
            width: 25em;
        }

        .desc-text {
            margin-top: -.5em;
            font-size: 1.3em;
        }

        button {
            font-size: 1.5em;
        }

        .quantity {
            font-size: 1.3em;
        }
    }

    /*==========iPAD MINI==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px) {
        .img-sec {
            padding: 1em; 
            width: 50%;
        }

        .text-sec {
            padding: 2em;
            width: 50%;
            margin-top: 2em;
        }

        .img {
            width: 20em;
            margin-top: -1.5em;
        }

        .coffee-name {
            font-size: 2.5em;
        }

        .price {
            font-size: 2.5em;
        }

        .desc-text {
            font-size: 1.3em;
        }

        .add_to_cart {
            width: 100%; 
        }

        .quantity-sec {
            flex-direction: row;
        }

        .quantity {
            font-size: 1.5em;
            width: auto; 
        }
    }

    /*========MOBILE==========*/
    @media only screen and (max-width: 600px) {

        section{
            display: flex;
            flex-direction: column;
        }

        .img-sec {
            width: 80%;
            /* padding: 1em;  */
        }

        .text-sec {
            width: 90%;
            padding: 1em;
            margin-top: -2em;
        }

        .img {
            width: 100%; 
        }

        .coffee-name {
            font-size: 2.5em;
            justify-content: center;
        }

        .price {
            font-size: 2em;
        }

        .desc-text {
            font-size: 1.2em;
        }

        .add_to_cart {
            width: 100%; 
        }

        .quantity-sec {
            flex-direction: row; 
        }

        .quantity {
            font-size: 1.5em;
            width: auto;
        }
    }
</style>
