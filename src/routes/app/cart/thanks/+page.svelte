<script>
    import { user } from "$lib/stores/state.svelte.js";
    import { fetchUser } from "../../../../hooks/auth.js";


    $effect(()=>{
      fetchUser();
    })
  </script>
  
  <main>
    <div class="thank-you-page">
      <div class="content">
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
    
        <div class="order-details">
          <h2>Order Summary</h2>
          <p><strong>Order Number:</strong> #{user.orders[0].order_number}</p>
          <p><strong>Total Amount:</strong> ₱{user.orders[0].total_price}</p>
        </div>
    
        <div class="actions">
          <button onclick={() => window.location.href = '/'}>Return to Home</button>
        </div>
      </div>
    </div>
  </main>

  
  <style>
    .thank-you-page {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f8f9fa;
      text-align: center;
    }
  
    .content {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 90%;
    }
  
    h1 {
      color: var(--primary-color);
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  
    p {
      color: #6c757d;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
  
    .order-details {
      text-align: left;
      margin-bottom: 2rem;
    }
  
    .order-details h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }
  
    .order-details p {
      margin: 0.5rem 0;
      font-size: 1rem;
      color: var(--text-black);
    }
  
    .actions button {
      padding: 0.75rem 1.5rem;
      background-color: var(--text-black);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }
  
    .actions button:hover {
      opacity: 80%;
    }


      /* ======== MOBILE RESPONSIVE ======== */
      @media only screen and (max-width: 600px) {
        .thank-you-page{
          width: 80%;
        }

        main{
          justify-items: center;
        }
      }
  </style>
  