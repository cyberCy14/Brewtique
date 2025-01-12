<script>
    // Placeholder for orders data (initially empty)
    import { format, parseISO } from 'date-fns';
    import { user } from '$lib/stores/state.svelte.js';


</script>

<main>
    <div class="container">
        <!-- Order History Section -->
        <section class="order-history">
            <h2>Order History</h2>

            {#if user.orders.length > 0}
                {#each user.orders as order}
                    <div class="order-box">
                        <div class="order-header">
                            <h3>Order # {order.order_number}</h3>
                            <p>Date: {format(parseISO(order.created_at), 'MMM d, yyyy')}</p>
                        </div>
                        <ul class="order-items">
                            {#each order.items as item}
                                <li>
                                    
                                    <span>{item.coffee.title} x{item.quantity}</span>
                                    <span>₱ {item.price * item.quantity}</span>
                                </li>
                            {/each}
                        </ul>
                        <div class="order-total">
                            <strong>Total: ₱ {order.total_price}</strong>
                        </div>
                    </div>
                {/each}
            {:else}
                <p>No orders found.</p>
            {/if}
        </section>
    </div>
</main>

<style>
    main {
        font-family: Arial, sans-serif;
        padding: 20px;
        max-width: 1000px;
        margin: auto;
        background-color: #fafafa;
    }

    .container {
        display: flex;
        gap: 20px;
    }

    /* Order History Section */
    .order-history {
        flex: 1;
        background-color: var(--text-white);
        padding: 20px;
        border-radius: 8px;
        margin-top: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.5rem;
    }

    .order-box {
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 15px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .order-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .order-header h3 {
        margin: 0;
        font-size: 1rem;
    }

    .order-header p {
        margin: 0;
        color: #666;
        font-size: 0.9rem;
    }

    .order-items {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .order-items li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding: 8px 0;
        font-size: 0.95rem;
    }

    .order-items li:last-child {
        border-bottom: none;
    }

    .order-total {
        text-align: right;
        margin-top: 10px;
        font-size: 1.1rem;
        color: #333;
    }

    p {
        text-align: center;
        color: #666;
        margin-top: 50px;
        font-size: 1rem;
    }




            /* ========IPADPRO==========*/
            @media only screen and (min-width: 835px) and (max-width: 1030px) {
         

            }


            /*==========iPAD==========*/
            @media only screen and (min-width: 700px) and (max-width: 835px){
            
            }


            /* ======== MOBILE RESPONSIVE ======== */
            @media only screen and (max-width: 600px) {
                .order-history {
                    padding: 1rem;
                    border-radius: 8px;
                    margin-top: 1rem;
                }

                main {
                font-family: Arial, sans-serif;
                padding: 2px;
                max-width: 1000px;
                margin: auto;
                background-color: #fafafa;
            }
            }
</style>
