<!-- Checkout.svelte -->
<script>

    let {total, handleCheckout} = $props();

</script>
  

  
<div class="checkout-container">
    <div class="checkout-details">
        <strong>Total:</strong> ₱ {total}
    </div>

    <button class="checkout-button" onclick={handleCheckout}>
        Checkout
    </button>
</div>

<style>
/* Container that stays at the bottom of the page */
.checkout-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    border-top: 1px solid #ccc;
    padding: 1rem;
    box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
    z-index: 9999; /* Ensure it's on top of other elements */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Example styling for a total and a button */
.checkout-details {
    font-size: 1rem;
}

.checkout-button {
    background-color: var(--text-black);
    color: #ffffff;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

.checkout-button:hover {
    opacity: 70%;
}
</style>