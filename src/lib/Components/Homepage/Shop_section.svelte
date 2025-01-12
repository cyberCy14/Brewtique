<script>
    let scrollContainer;

    let {coffeeItems} = $props();



    function scrollLeft() {
        scrollContainer.scrollBy({
            top: 0,
            left: -200,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        scrollContainer.scrollBy({
            top: 0,
            left: 200,
            behavior: 'smooth'
        });
    }
</script>


<main>
    <section>

        <div class="container">
            <h2 class="text">Coffees We Sell</h2>

            <div class="scroll-container">
                <button class="arrow left" onclick={scrollLeft}> ❮ </button>
                <div class="wrapper" bind:this={scrollContainer}>

                    {#each coffeeItems as coffee (coffee.id)}
                        <div class="mini-container">
                            <p class="coffee-title">{coffee.title}</p>
                            <div class="inside-mini-cont">
                                <img alt="coffees" src={coffee.img} class="img" />
                                <p class="description">{coffee.description}</p>
                            </div>
                        </div>
                    {/each}

                </div>
                <button class="arrow right" onclick={scrollRight}>❯</button>
            </div>
            <a class="more-btn" href="/app/coffees">See More</a>
        </div>
    </section>
</main>




<style>
    .container {
        text-align: center;
        margin: 0 auto;
        padding: 20px;
        background-color: var(--primary-color);
        margin-top: 5em;
        margin-bottom: 5em;
    }

    .text {
        font-size: 2rem;
        margin-bottom: 20px;
        color: var(--text-white);
    }

    .scroll-container {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 20px 0;
    }

    .wrapper {
        display: flex;
        scroll-behavior: smooth;
        width: 100%;
        gap: 2em;
        overflow-x: hidden;
        cursor: grab;
    }

    .wrapper:active{
        cursor: grabbing;
    }

    .mini-container {
        flex: 0 0 auto;
        width: 40vh;
        /* height: 60vh; */
        margin: 1em;
        text-align: center;
        text-decoration: none;
        color: inherit;
        border-radius: 5px;
        transition: transform 0.3s;
        background-color: var(--text-white);
        box-shadow: 0 4px 8px var(--text-black);
        overflow: hidden;
    }

    .mini-container:hover {
        transform: scale(1.05); 
    }

    .coffee-title {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--text-black);
        margin: 10px;
    }

    .inside-mini-cont {
        padding: 10px;
    }

    .img {
        width: 100%;
        height: 40vh;
        border-bottom: 1px solid #ccc;
    }

    .description {
        font-size: 0.9rem;
        margin: .5em;
        color: var(--text-black);
    }

    .arrow {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .arrow.left {
        margin-right: 10px;
        color: var(--text-white);
    }

    .arrow.right {
        margin-left: 10px;
        color: var(--text-white);
    }

    .arrow:hover {
        color: var(--text-white);
        backdrop-filter: blur(100px);
    }

    .more-btn {
        background-color: var(--text-white);
        color: var(--text-black);
        border: none;
        text-decoration: none;
        font-size: 1em;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 5em;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
        font-weight: bold;
    }

    .more-btn:hover {
        background-color: var(--primary-color); 
        color: var(--text-white); 
    }

    
    /*========MOBILE==========*/
     @media only screen and (max-width: 600px){

        .container {
            text-align: center;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--primary-color);
            margin-top: 5em;
            margin-bottom: 5em;
        }

        .mini-container {
            width: 70vw; 
            height: 60vh;
            padding: 1em;
        }

        .img {
            width: 80%;
            height: 40vh;
            border-bottom: 1px solid #ccc;
        }

        .scroll-container {
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            margin: 10px -20px;
        }


        .arrow.left {
            margin-right: 15px;
            color: var(--text-white);
        }

        .arrow.right {
            margin-left: 15px;
            color: var(--text-white);
        }

        .wrapper {
            gap: 0; 
        }

        .text {
            font-size: 2em;
        }

        .coffee-title {
            font-size: 1.5em;
        }

        .description {
            font-size: 1em;
        }

        .more-btn {
            font-size: 1.2em;
        }
    }




 /*==========iPAD==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px){

        section{
            margin-top: -15em;
        }

        .mini-container {
            width: 40vw; 
        }

        .text {
            font-size: 2em;
        }

        .img {
            width: 80%;
            height: 20vh;
            border-bottom: 1px solid #ccc;
        }

        .coffee-title {
            font-size: 1.5em; 
        }


        .description {
            font-size: 1em; 
        }

        .more-btn{
            font-size: 1.2em;
        }

        .wrapper {
            display: flex;
            scroll-behavior: smooth;
            width: 100%;
            gap: 1em;
            overflow-x: hidden;
            cursor: grab;
        }
    }




    /* ========IPADPRO==========*/
     @media only screen and (min-width: 835px) and (max-width: 1030px){

        section{
            margin-top: -25em;
        }

        .container {
            text-align: center;
            margin: 0 auto;
            background-color: var(--primary-color);
            margin-top: 5em;
            /* margin-bottom: 5em; */
    }

        .img {
            width: 100%;
            height: 20vh;
            border-bottom: 1px solid #ccc;
        }

        .mini-container {
            width: 25vw; 
            height: auto;
        }

        .more-btn{
            font-size: 1.2em;
        }
    }
</style>
