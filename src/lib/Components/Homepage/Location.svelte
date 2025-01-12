<script>
    import location1 from "$lib/assets/backgrounds/location1.webp";
    import location2 from "$lib/assets/backgrounds/location2.webp";
    import location3 from "$lib/assets/backgrounds/location3.webp";

    let slideIndex = 0;
    const slides = [location1, location2, location3];

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
    }

    const interval = setInterval(showNextSlide, 5000);

    import { onDestroy } from "svelte";
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<main id="location">
        <div class="container">
            <h2 class="text">Our Locations</h2>
            <p class="description">
                Discover our locations where you can experience the perfect blend of taste and ambiance.
            </p>
            <div class="slideshow-container">
                {#each slides as slide, index}
                    <div class="mySlides fade" style:display={index === slideIndex ? 'block' : 'none'}>
                        <img src={slide} alt={`Location view ${index + 1}`} class="slide-image" />
                    </div>
                {/each}
                <div class="dots-container">
                    {#each slides as _, index}
                        <span 
                            class="dot" 
                            style:background-color={index === slideIndex ? 'var(--primary-color)' : 'rgba(0, 0, 0, 0.3)'}
                            on:click={() => (slideIndex = index)}>
                        </span>
                    {/each}
                </div>
            </div>
        </div>
</main>

<style>


    .container {
        max-width: 1200px;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 5em;
    }

    .text {
        font-size: 2rem;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 1rem;
        margin-top: 4em;
    }

    .description {
        font-size: 1.1rem;
        color: var(--text-black);
        margin-bottom: 2rem;
        max-width: 800px;
        line-height: 1.6;
    }

    .slideshow-container {
        position: relative;
        width: 100%;
        max-width: 1000px;
        overflow: hidden;
    }

    .mySlides {
        display: none;
    }

    .slide-image {
        width: 50%;
        height: 50%;
    }

    .fade {
        animation: fade 1.5s;
    }

    @keyframes fade {
        from { opacity: 0.4; }
        to { opacity: 1; }
    }

    .dots-container {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.5rem;
    }

    .dot {
        width: 12px;
        height: 12px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .dot:hover {
        background-color: var(--primary-color);
    }


           /* ========IPADPRO==========*/
           @media only screen and (min-width: 835px) and (max-width: 1030px) {

            }


            /*==========iPAD==========*/
            @media only screen and (min-width: 700px) and (max-width: 835px){

            }


            /* ======== MOBILE RESPONSIVE ======== */
            @media only screen and (max-width: 600px) {

                main{
                    margin-top: -5em;
                }

                .container {
                    max-width: 1200px;
                    padding: 2em;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-bottom: 5em;
                }

                .slide-image {
                    width: 80%;
                    height: auto;
                }
            }


</style>