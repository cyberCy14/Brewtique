<script>
    import { flip } from 'svelte/animate';
    import {fade} from 'svelte/transition';

    let {data} = $props();

    let {allCoffees} = $state(data);

    let coffees = allCoffees;
    let selectedCategory = $state("All"); 
    let filteredCoffees = $state(coffees);

    const filterCategories = (category)=>{
        selectedCategory = category;
        if(category === 'All'){
            filteredCoffees = coffees;
        }else{
            filteredCoffees = coffees.filter(coffee => coffee.category.includes(category));
        }
        
    }

    $effect(()=>{
        console.log(coffees);
        
    })
    
</script>



<div class="categories-container">
    <button class="coffees" onclick={()=>{filterCategories('All')}}>All</button>
    <button class="coffees" onclick={()=>{filterCategories('Affogato')}}>Affogato</button>
    <button class="coffees" onclick={()=>{filterCategories('Americano')}}>Americano</button>
    <button class="coffees" onclick={()=>{filterCategories('Black Coffee')}}>Black Coffee</button>
    <button class="coffees" onclick={()=>{filterCategories('Café au Lait')}}>Cafe au Lait</button>
    <button class="coffees" onclick={()=>{filterCategories('Capuccino')}}>Capuccino</button>
    <button class="coffees" onclick={()=>{filterCategories('Cortado')}}>Cortado</button>
    <button class="coffees" onclick={()=>{filterCategories('Espresso')}}>Espresso</button>
    <button class="coffees" onclick={()=>{filterCategories('Flat White')}}>Flat White</button>
    <button class="coffees" onclick={()=>{filterCategories('Macchiato')}}>Macchiato</button>
    <button class="coffees" onclick={()=>{filterCategories('Mocha')}}>Mocha</button>

</div>

<main>
    <div class="coffee-area">
        <h1>{selectedCategory}</h1>
        <div class="cards-container">
            {#each filteredCoffees as coffee (coffee)}
                <div class="coffee-card" in:fade animate:flip={{duration: 200}}>
                    <h3>{coffee.title}</h3>
                    <img src={coffee.img} alt={coffee.title} />
                    <p class="description">{coffee.description}</p>
                    <a class="add-to-cart" href={`/app/coffees/${coffee.id}`}>Add to Cart</a>
                </div>
            {/each}
        </div>
    </div>

</main>



<style>
    .categories-container {
        justify-content: center;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 1rem;
        margin-top: 7em;
    }

    .coffees {
        background: var(--primary-color);
        color: var(--text-white);
        border: none;
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        text-decoration: none;
    }

    h1{
        color: var(--text-black);
        margin-bottom: 1em;
    }

    .coffees:hover {
        background-color: var(--text-black);
        transform: scale(1.05);
    }

    .coffees:active {
        transform: scale(0.95);
    }
    .coffee-area {
        flex: 1;
        padding: 2rem;
        overflow: auto;
    }

    .cards-container {
        display: grid; 
        grid-template-columns: repeat(4, 1fr); 
        gap:1rem; 
    }

    a{
        text-decoration: none;
    }

    .coffee-card {
        background: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        text-align: center;
        justify-content: space-between;
        width: 17vw;
        height: auto;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        color: var(--text-black);
        margin-left: 2.8em;
        margin-bottom: 5em;

    }

    .coffee-card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .coffee-card h3 {
        font-size: 1.2rem;
        color: var(--text-black);
        margin: 0.5rem 0;
    }

    .coffee-card img {
        display: block;
        width: 80%;
        height: auto;
        margin: 0 auto;
        border-radius: 6px;
    }

    .coffee-card p{
        font-size: 1rem;
        padding: 10px;
        color: var(--text-black);
    }


     .add-to-cart{
        background-color: var(--primary-color); 
        color: var(--text-white); 
        border: none;
        font-size: 1rem;
        padding: 10px 20px;
        /* margin-top: 1em; */
        width: 80%;
        margin: 0 auto;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
        font-weight: bold; 
     }

     .add-to-cart:hover{
        background-color: var(--text-white);
        color: var(--primary-color);
     }



             /* ========IPADPRO==========*/
             @media only screen and (min-width: 835px) and (max-width: 1030px) {
                .categories-container {
                    margin-top: 10em;
                    gap: 0.8rem;
                }

                .cards-container {
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 1rem;
                }

                .coffee-card {
                    width: 25vw; 
                    margin-left: 0;
                }

                main {
                    overflow-x: hidden;
                }

                }


                /*==========iPAD==========*/
                @media only screen and (min-width: 700px) and (max-width: 835px){
                
                    .categories-container {
                        margin-top: 8em;
                        gap: 0.7rem;
                        padding: 0 1rem;
                    }

                    .cards-container {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }

                    .coffee-card {
                        width: 30vw;
                    }

                }


                /* ======== MOBILE RESPONSIVE ======== */
                @media only screen and (max-width: 600px) {

                    .cards-container {
                        grid-template-columns: 1fr; 
                        gap: 3rem;
                        padding: 1rem;
                    }

                    .coffee-card {
                        width: 60vw; 
                        margin: 0 auto; 
                    }

                    .coffee-card h3 {
                        font-size: 1rem; 
                    }

                    .coffee-card p {
                        font-size: 0.9rem;
                    }

                    .coffee-card img {
                        width: 100%;
                        height: auto;
                    }

                    .add-to-cart {
                        font-size: 0.9rem;
                        padding: 0.8rem;
                    }
        }

</style>

