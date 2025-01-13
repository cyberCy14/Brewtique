<script>

  import { preventDefault } from 'svelte/legacy';
	let { showAddModal = $bindable()} = $props();

	let dialog = $state(); 

  import { PUBLIC_API_URL } from '$env/static/public';
  



  let formData = $state({
      title: '',
      category: '',
      description: '',
      description2: '',
      price: '',
      img: '',
      link: '/AddToCart'
  });



  // $inspect(formData)


  const categories = [
        "Black Coffee", "Capuccino", "Americano", "Espresso", "Macchiato",
        "Flat White", "Mocha", "Café au Lait", "Affogato", "Cortado",
    ];


  // Error and success messages
  let successMessage = $state('');
  let errorMessage = $state('');

  const handleFileInput = (event) => {
        const file = event.target.files[0];
        formData.img = file; 

  };
  
  // Submit function
  const addCoffee = async () => {

    
      errorMessage = '';
      successMessage = '';

      const dataToSend = new FormData();
      dataToSend.append('title', formData.title);
      dataToSend.append('category', formData.category);
      dataToSend.append('description', formData.description);
      dataToSend.append('description2', formData.description2);
      dataToSend.append('price', formData.price);
      dataToSend.append('link', formData.link);

      // Append the actual file
      if (formData.img) {
        dataToSend.append('img', formData.img);
      }
      // console.log(dataToSend);
      
      try {
          const res = await fetch("https://brewtique-laravel-production.up.railway.app/api/coffees", {
              method: 'POST',
              body: dataToSend
          });

          // console.log('reach: ' + dataToSend);
          if (res.ok) {
              const response = await res.json();
              successMessage = response.message || 'Coffee added successfully!';

              formData = ({
                title: '',
                img: response.image_url,
                category: '',
                description: '',
                description2: '',
                price: '',
                link: ''
              });

              alert(successMessage);
              location.reload();
          } else {
              const errorResponse = await res.json();
              errorMessage = errorResponse.error || 'Failed to add coffee.';
          }
      } catch (error) {
          errorMessage = error.message || 'Something went wrong. Please try again.';
      }
  };


  $effect(() => {
		if (showAddModal) dialog.showModal();
    
  });

</script>
  
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<dialog
    bind:this={dialog}
    onclose={() => (showAddModal = false)}
    onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
    <div class="modal-content">
        <h1>Add a New Coffee</h1>

        <!-- Success Message -->
        {#if successMessage}
          <p class="success">{successMessage}</p>
        {/if}

        <!-- Error Message -->
        {#if errorMessage}
          <p class="error">{errorMessage}</p>
        {/if}

    
        <!-- Coffee Form -->
        <form onsubmit={(addCoffee)|preventDefault}>
          <div class="fields-container">

            <div>
              <label for="title">Title</label>
              <input type="text" id="title" bind:value={formData.title} required />
            </div>
    
            <div>
                <label for="category">Category</label>
                <select id="category" bind:value={formData.category} required>
                  <option value="" disabled selected>Select a category</option>
                  {#each categories as category}
                    <option value={category}>{category}</option>
                  {/each}
                </select>
            </div>
    
            <div>
                <label for="description">Description</label>
                <textarea id="description" bind:value={formData.description} required></textarea>
            </div>
    
            <div>
                <label for="description2">Description 2</label>
                <textarea id="description2" bind:value={formData.description2}></textarea>
            </div>
     
            <div>
              <label for="img">Upload Image</label>
              <input type="file" id="img" accept="image/*" onchange={handleFileInput} required />
              <!-- <input type="file" id="imgFile" accept="image/*" bind:value={formData.imgFile} onchange={handleFileChange} required /> -->
            </div>
            <div>
                <label for="price">Price </label>
                <input type="number" id="price" bind:value={formData.price} min="0" required />
            </div>
          </div>

            
          <div class="actions">
            <button onclick={addCoffee} class="confirm-button">Confirm Add</button>
            <button onclick={() => dialog.close()} class="cancel-button">Cancel</button>
          </div>
    
           
        </form>
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
      width: 70vw;
      /* max-width: 500px; */
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
      /* Keep the modal content as a simple column flex 
         so the heading/success/error messages are stacked.
         The form below will handle its own grid layout. */
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    /* Grid layout for the form */
    form {
      grid-template-columns: 1fr 1fr; /* Two columns */

      /* If needed, you can add a max-width here
         max-width: 600px; */
    }
  
    .fields-container {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100%;
      column-gap: 2rem;
      row-gap: 5rem;
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      margin-top: 2rem;
    }
  
    .fields-container label {
      margin-bottom: 0.5rem;
      font-weight: bold;
      padding: 1rem;
      text-align: left;
    }
  
    .fields-container textarea {
      width: 80%;
      padding: 1rem;
      font-size: 1rem;
      box-sizing: border-box;
    }

    .fields-container select {
      padding: 0.5rem;
      font-size: 0.9rem;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  
    /* Make textareas span both columns if desired. Example: */
    /* 
    #description,
    #description2 {
      grid-column: 1 / 3; 
    } 
    */
    /* Success/Error Messages */
    .success {
      color: green;
      font-weight: bold;
      margin-bottom: 1rem;
      grid-column: 1 / 3; /* Span across both columns if you want them full width */
    }
  
    .error {
      color: red;
      font-weight: bold;
      margin-bottom: 1rem;
      grid-column: 1 / 3; /* Span across both columns if you want them full width */
    }
  
    /* Button actions: place them in a full-width row */
    .actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 5rem;
    }
  
    .confirm-button,
    .cancel-button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
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
      background-color: #c82333;
    }
  
    @keyframes zoom {
      from {
        transform: translate(-50%, 60%) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%) scale(1);
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
  
    /* Optional: make the form a single column on narrow screens */
    @media (max-width: 600px) {
      form {
        grid-template-columns: 1fr; /* single column */
      }
    }
  </style>
  