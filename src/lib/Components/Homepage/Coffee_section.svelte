<script>
    import black from "$lib/assets/Coffees/black.png";
    import capuccino from "$lib/assets/Coffees/capuccino.png";
    import americano from "$lib/assets/Coffees/americano.png";
    import espresso from "$lib/assets/Coffees/espresso.png";
    import mocha from "$lib/assets/Coffees/mocha.png";
    import macchiato from "$lib/assets/Coffees/macchiato.png";
    import lait from "$lib/assets/Coffees/lait.png";
    import flat from "$lib/assets/Coffees/flat.png";
    import affogato from "$lib/assets/Coffees/affogato.png";
    import cortado from "$lib/assets/Coffees/cortado.png";


</script>

<section>
    <div class="container">
        <div class="contents">
            <h2 class="text">Offered Coffees</h2>
            <div class="coffee-collection">
                <!-- Black latte -->
                <div class="coffee">
                    <img src="{black}" class="black"  alt="black coffee"/>
                    <p>Black Coffee</p>
                </div>

                <!-- Capuccino -->
                <div class="coffee">
                    <img src="{capuccino}" class="capuccino"  alt="capuccino"/>
                    <p>Capuccino</p>
                </div>

                <!-- Americano -->
                <div class="coffee">
                    <img src="{americano}" class="americano" alt="americano" />
                    <p>Americano</p>
                </div>

                <!-- Espresso -->
                <div class="coffee">
                    <img src="{espresso}" class="espresso" alt="espresso" />
                    <p>Espresso</p>
                </div>

                <!-- Mocha -->
                <div class="coffee">
                    <img src="{mocha}" class="mocha" alt="mocha" />
                    <p>Mocha</p>
                </div>

                <!-- Macchiato -->
                <div class="coffee">
                    <img src="{macchiato}" class="macchiato" alt="macchiato" />
                    <p>Macchiato</p>
                </div>

                <!-- Café au Lait -->
                <div class="coffee">
                    <img src="{lait}" class="lait"  alt="cafe au lait"/>
                    <p>Café au Lait</p>
                </div>

                <!-- Flat White -->
                <div class="coffee">
                    <img src="{flat}" class="flat" alt="flat white" />
                    <p>Flat White</p>
                </div>

                <!-- Affogato -->
                <div class="coffee">
                    <img src="{affogato}" class="affogato" alt="affogato" />
                    <p>Affogato</p>
                </div>

                <!-- Cortado -->
                <div class="coffee">
                    <img src="{cortado}" class="cortado" alt="cortado" />
                    <p>Cortado</p>
                </div>
            </div>
        </div>
    </div>
</section>



<style>
   section {
    width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0; 
}

.container {
    width: 100%;
    max-width: 1200px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
}

.text {
    color: var(--primary-color);
    font-size: 2em;
    text-align: center;
    margin-bottom: 1em;
}

.coffee-collection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
}

.coffee {
    text-align: center;
}

.black, .capuccino, .americano, .espresso, .mocha, .macchiato, .lait, .flat, .affogato, .cortado {
    width: 10em;
}

p {
    color: var(--text-black);
    font-size: 1em;
    margin-top: 0.5em; 
}

/* ======== IPADPRO ========== */
@media only screen and (min-width: 835px) and (max-width: 1030px) {

    section {
        width: 100%;
        height: 100vh; 
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 0; 
        margin-top: -25em;
    }


    .text {
        font-size: 2.4em;
    }

    .coffee-collection {
        gap: 1.5em; 
    }

    .black, .capuccino, .americano, .espresso, .mocha, .macchiato, .lait, .flat, .affogato, .cortado {
        width: 10em; 
    }
}

/*========== iPAD ========== */
@media only screen and (min-width: 700px) and (max-width: 835px) {

    section {
        width: 100%;
        height: 100vh; 
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 0; 
        margin-top: -15em;
    }


    .text {
        font-size: 2em;
    }

    .coffee-collection {
        gap: 1em;
    }

    .black, .capuccino, .americano, .espresso, .mocha, .macchiato, .lait, .flat, .affogato, .cortado {
        width: 8em; 
    }
}

/*======== MOBILE ========== */
@media only screen and (max-width: 600px) {
    .text {
        font-size: 1.8em;
        margin-top: 1em;
    }

    .coffee-collection {
        display: grid; 
        grid-template-columns: repeat(2, 1fr); 
        gap: 1em; 
    }

    .black, .capuccino, .americano, .espresso, .mocha, .macchiato, .lait, .flat, .affogato, .cortado {
        width: 60%; 
    }

    p {
        margin: 0; 
    }
}

    
</style>