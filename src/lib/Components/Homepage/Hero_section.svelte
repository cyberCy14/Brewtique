<script>
    import beans from "$lib/assets/backgrounds/beans3.png";

</script>

<section>
    <img src="{beans}" alt="Beans" class="background-img">
    <div class="container">
        <div class="text-area">
            <p><span class="L-text">Brewtique: </span><br/> <span class="M-text">Your Dose of Delight</span> </p>
            <p class="S-text">Discover handcrafted coffee, specialty drinks, 
                and cozy vibes. Indulge in our carefully curated 
                selection of single-origin and blended coffees,
                roasted tso perfection. From bold and robust to 
                smooth and delicate, we have something to suit 
                every taste.</p>
            <a class="shop-now" href="/app/coffees">Shop Now</a>
        </div>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100vh;
        position: relative; 
        display: flex; 
        align-items: center;
    }

    .background-img {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        margin-top: -2em;
        background-size: cover; 
        z-index: -1; 
    }

    .container {
        width: 50%;
        height: 100%;
        display: flex;
        padding: 1rem; 
        position: relative; 
        z-index: 1; 
    }

    .text-area {
        flex: 1;
        display: flex;
        margin-left: 100px;
        gap: 2em;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: var(--primary-color);
        z-index: 2; 
    }


    .L-text {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }

    .M-text {
        font-size: 2rem;
        margin-bottom: 1rem;   
    }

    .S-text {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .shop-now {
        background-color: var(--primary-color); 
        color: var(--text-white); 
        border: none;
        text-decoration: none;
        font-size: 1em;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
        font-weight: bold;
    }

    .shop-now:hover {
        background-color: var(--text-white);
        color: var(--text-black);
    }



          /* ========IPADPRO==========*/
    @media only screen and (min-width: 835px) and (max-width: 1030px) {
        section {
            width: 100%;
            height: 50vh;
            position: relative; 
            display: flex; 
            margin-top: 10em;
            margin-bottom:35em;
            align-items: center;
        }

        .background-img {
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: auto;
            margin-top: -8em;
            background-size: cover; 
            z-index: -1; 
        }

        .container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .text-area {
            margin-top: -15em;
            width: 100%;
        }

    }


     /*==========iPAD==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px){

        section {
            width: 100%;
            height: 50vh;
            position: relative; 
            display: flex; 
            margin-top: 15em;
            align-items: center;
        }

        .container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .background-img {
            position: absolute;
            top: 0;
            right: 0;
            width: 60%;
            height: auto;
            margin-top: -10em;
            margin-right: -5em;
            background-size: cover; 
            z-index: -1; 
        }


        .text-area {
            margin-top: -15em;
            width: 100%;
        }

        .L-text{
            font-size: 3rem;
        }

        .M-text{
            font-size: 2rem;
        }

        .S-text{
            font-size: 1rem;
        }
    }


    /* ======== MOBILE RESPONSIVE ======== */
    @media only screen and (max-width: 600px) {

        section{
            width: 100%;
            height: 100vh;
            background-size: cover; 
            background-position: center; 
            position: relative; 
            display: flex; 
            align-items: center;
        }

        .background-img{
            display: none;
        }


        .container {
            width: 100%;
            justify-content: center;
            align-items: center;
            margin-top: 5em;
            margin-left: -5em;
        }

        .text-area{
            gap: 1em;
        }

        .L-text {
            font-size: 2rem;
        }

        .M-text {
            font-size: 2rem;
        }

        .S-text {
            font-size: 1rem;
            line-height: 1.4;
            font-weight: 200;
            margin-bottom: 1.5rem;
        }

        .shop-now {
            padding: 10px 20px;
            font-size: 1rem;
            box-shadow: none;
        }
    }
</style>
