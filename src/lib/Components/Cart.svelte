<script>

    import { fade } from "svelte/transition";

    let { coffee, quantity, handleDelete } = $props();



</script>
  

  
<main>

<div class="cart-container" transition:fade>
    <div class="cart-item">
        <div class="product-area">
        <img src={coffee.img} alt="" class="product-image" />
        <div class="product-details">
            <h2 class="product-title">{coffee.title}</h2>
            <p class="product-description">{coffee.description2}</p>
            <div class="product-variations">
            <br />
            <span class="variation-label">Price:</span>
            <span class="variation-value">{coffee.price}</span>
            <br />
            <br />
            <span class="variation-label">Quantity:</span>
            <span class="variation-value">{quantity}</span> 
            </div>


            <span class="total-price">Total:   ₱{coffee.price * quantity}</span>

        </div>
        </div>


        <div class="delete-area">
            <button class="delete-btn" onclick={()=>handleDelete}>Delete</button>
        </div>
    </div>

</div> 
</main>



<style>

  .cart-container {
      font-family: 'Arial', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -5em;
      margin-bottom: -5em;
      height: auto;
  }

  .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      background-color: var(--text-white);
      border: 1px solid var(--primary-color);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 20px;
      margin: 2rem 0;
      max-width: 1000px;
      width: 100%;
      transition: box-shadow 0.3s ease-in-out;
  }

  .cart-item:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .product-area {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex: 1;
  }

  .product-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid var(--primary-color);
      background-color: var(--text-white);
  }

  .product-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 60%;
  }

  .product-title {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--text-black);
      margin: 0;
  }

  .product-description {
      font-size: 1rem;
      color: var(--text-black);
      opacity: 0.8;
  }

  .product-variations {
      font-size: 0.95rem;
      color: var(--text-black);
  }

  .variation-label {
      font-weight: 600;
      margin-right: 5px;
  }

  .variation-value {
      font-weight: 400;
  }

  .total-price {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--text-black);
      font-weight: bold;
      font-size: 1.2rem;
      margin-top: 0.5rem;
  }


  .delete-area {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .delete-btn {
      background-color: var(--text-white);
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      padding: 10px 15px;
      font-size: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-transform: uppercase;
  }

  .delete-btn:hover {
      background-color: var(--primary-color);
      color: var(--text-white);
  }


          /* ========IPADPRO==========*/
          @media only screen and (min-width: 835px) and (max-width: 1030px) {
            
            .cart-container {
                font-family: 'Arial', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: -5em;
                margin-bottom: -5em;
                height: auto;
            }

        }


        /*==========iPAD==========*/
        @media only screen and (min-width: 700px) and (max-width: 835px){
        
        }


        /* ======== MOBILE RESPONSIVE ======== */
        @media only screen and (max-width: 600px) {
            .cart-container {
                width: 80vw;
            }

            main {
                justify-items: center;
            }

            .cart-item {
                flex-direction: column;
                align-items: flex-start; 
                padding: 15px;
            }

            .product-area {
                flex-direction: column;
                align-items: flex-start; 
                gap: 1rem;
            }

            .product-image {
                width: 100px;
                height: 100px;
                align-self: center;
            }

            .product-details {
                text-align: left;
                max-width: 100%;
                gap: 0.3rem;
            }

            .product-title {
                font-size: 1.2rem;
            }

            .product-description {
                font-size: 0.9rem;
            }

            .product-variations {
                font-size: 0.85rem;
                text-align: left; 
                display: flex;
                flex-direction: column;
            }

            .variation-label {
                font-weight: bold;
                margin-right: 0.5rem;
                gap: 5em;
            }

            .variation-value {
                font-weight: normal;
                gap: 5em;

            }

            .total-price {
                font-size: 1rem;
                margin-top: 1rem;
                margin-bottom: 1rem;
                font-weight: bold;
            }

            .delete-btn {
                font-size: 0.9rem;
                padding: 8px 12px;
                align-self: center; 
            }
        }

</style>
