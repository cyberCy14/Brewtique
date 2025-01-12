<script>

  import { user } from "$lib/stores/state.svelte.js";
	let { showModal = $bindable(), confirmCheckout, totalAmount} = $props();

	let dialog = $state(); 



	$effect(() => {
		if (showModal) dialog.showModal();
    console.log(user.cart);
    
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}>

<div class="modal-content">
    <h2>Checkout</h2>
    <p>Review your order before proceeding.</p>

    <!-- Order Summary -->
    <div class="order-summary">
      {#each user.cart as item}
        <div class="order-item">
          <div>
            <strong>{item.coffee.title}</strong>
            <span > - {item.quantity}</span>
          </div>
          
          <div >
           
            <span>₱{item.coffee.price * item.quantity}</span>
          </div>
            

        </div>
      {/each}
    </div>

    <!-- Total -->
    <div class="total">
      <strong>Total:</strong>
      <span>₱{totalAmount}</span>
    </div>

    <!-- Action Buttons -->
    <div class="actions">
      <button onclick={confirmCheckout} class="confirm-button">Confirm</button>
      <button onclick={() => dialog.close()} class="cancel-button">Cancel</button>
    </div>
  </div>
</dialog>

<style>
  dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    width: 90%;
    max-width: 500px;
    padding: 1rem;
    background-color: white;
    text-align: center;
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
    animation: fade 0.2s ease-out;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .order-summary {
    text-align: left;
    margin-bottom: 1rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .order-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .confirm-button,
  .cancel-button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .confirm-button {
    background-color: var(--primary-color);
    color: white;
  }

  .confirm-button:hover {
    opacity: 80%;
  }

  .cancel-button {
    background-color: #dc3545;
    color: white;
  }

  .cancel-button:hover {
    background-color: #dc3545;
  }

  @keyframes zoom {
        from {
            transform: translate(-50%, 60%) scale(0.95); /* Start slightly lower and scaled down */
            opacity: 0; /* Fade in */
        }
        to {
            transform: translate(-50%, -50%) scale(1); /* End at the center and full size */
            opacity: 1;
        }
    }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


     /* ======== MOBILE RESPONSIVE ======== */
     @media only screen and (max-width: 600px) {
        dialog{
          width: 80%;
        }
      }
</style>
