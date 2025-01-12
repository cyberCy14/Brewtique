<script>
    import AddCoffeeModal from "$lib/Components/Admin/AddCoffeeModal.svelte";
    import { fade } from "svelte/transition";
    import { PUBLIC_API_URL } from "$env/static/public";
    
   
    let {data} = $props();

    let products = $state(data.allCoffees);
  

    let showAddModal = $state(false);

    let currentProduct = $state({
      id: null,
      name: '',
      price: 0,
      stock: 0
    });


    // Error and success messages
    let successMessage = $state('');
    let errorMessage = $state('');
    

  

    $effect(() => {

    });

    function openAddModal() {
      showAddModal = true;
    }
  

  

    async function deleteProduct(productId) {
      if (confirm('Are you sure you want to delete this product?')) {
          try {
            const res = await fetch(`${PUBLIC_API_URL}/api/coffee/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (res.ok) {
                const response = await res.json();
                console.log(response.message || 'Coffee deleted successfully!')
                products = products.filter((p) => p.id !== productId);
            } else {
                const errorResponse = await res.json();
                errorMessage = errorResponse.error || 'Failed to delete coffee.';
            }
        } catch (error) {
            errorMessage = error.message || 'Something went wrong. Please try again.';
            console.log(errorMessage);
            
        }
        
      }
    }
  
  </script>
  
  
  <div class="container">
    <h1>Products Management</h1>

    <button class='action-btn' onclick={openAddModal}> Add Coffee</button>

    <AddCoffeeModal bind:showAddModal></AddCoffeeModal> 


   
    <table>
      <thead>
        <tr>
          <th style="width: 10%;">ID</th>
          <th style="width: 20%;">Name</th>
          <th style="width: 20%;">Category</th>
          <th style="width: 30%;">Description</th>
          <th style="width: 10%;">Price</th>
          <th style="width: 10%;">Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each products as product}
          <tr transition:fade>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>

            <td>

              <button class='action-btn delete' style="margin-top: 1rem;" onclick={() => deleteProduct(product.id)}>Delete</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- <AddProduct/> -->


<style>
/* Basic styling for demo purposes */
.container {
    margin: 2rem auto;
    max-width: 70%;
    padding: 3rem 6rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 20vh;
}

h1 {
    margin-bottom: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

th, td {
    padding: 0.75rem;
    border: 1px solid #ccc;
    text-align: left;
}

th {
    background-color: var(--primary-color);
    color: white;
}

button {
    margin-right: 0.5rem;
    cursor: pointer;
}

.action-btn{
  padding: 0.75rem 1.5rem;
  border: solid;
  border-color: var(--primary-color);
  border-width: thin;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  background-color: white;
}

.delete{
  border-color: red;
}

.action-btn:hover{
  background-color: var(--primary-color);
  color: white;
  border-color: white;
}

.delete:hover{
  border-color: red;
  background-color: red;
}
</style> 

