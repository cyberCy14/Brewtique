<script>
    const brewingMethods = [
        {
            title: "French Press",
            description: "The French Press method is known for creating a rich, full-bodied cup of coffee with a smooth texture. It's easy to make and requires minimal equipment.",
            steps: [
                "Boil water and let it cool for about 30 seconds to 1 minute.",
                "Grind coffee beans to a coarse consistency.",
                "Add the ground coffee to the French Press (1:15 ratio of coffee to water).",
                "Pour the hot water evenly over the coffee grounds and stir gently.",
                "Place the lid on the press and steep for about 4 minutes.",
                "Slowly press the plunger down and serve."
            ],
        },
        {
            title: "Pour-Over",
            description: "Pour-Over coffee is a manual brewing technique that allows for greater control over brewing time and temperature, resulting in a clean and crisp cup.",
            steps: [
                "Boil water and let it cool for about 30 seconds.",
                "Grind coffee beans to a medium-fine consistency.",
                "Place a coffee filter in the dripper and add ground coffee (1:15 ratio).",
                "Pour a small amount of hot water over the grounds to bloom for about 30 seconds.",
                "Pour the remaining water in slow, circular motions.",
                "Let the water drain through and serve."
            ],
        },
        {
            title: "Espresso",
            description: "Espresso is a concentrated form of coffee brewed by forcing hot water through finely-ground coffee. It's the base for many coffee drinks like lattes and cappuccinos.",
            steps: [
                "Grind coffee beans very finely (espresso grind).",
                "Preheat your espresso machine and portafilter.",
                "Add the coffee grounds to the portafilter and tamp evenly.",
                "Lock the portafilter into the espresso machine and start the shot.",
                "The espresso should take about 25-30 seconds to brew.",
                "Serve immediately."
            ],
        },
        {
            title: "AeroPress",
            description: "The AeroPress method offers a smooth, rich cup with a little more body than a pour-over, and it's perfect for experimenting with different brew times and ratios.",
            steps: [
                    "Boil water and let it cool for about 30 seconds.",
                    "Grind coffee beans to a medium-fine consistency (similar to table salt).",
                    "Place a paper filter in the AeroPress filter cap and rinse with hot water to remove any paper taste.",
                    "Add 14-18 grams of ground coffee into the AeroPress (1:15 ratio of coffee to water).",
                    "Pour hot water into the AeroPress up to the top (about 200ml), then stir for about 10 seconds.",
                    "Attach the filter cap and flip the AeroPress onto your cup.",
                    "Press gently for 20-30 seconds until all the water has been pushed through.",
                    "Serve and enjoy!"
                ]
        }

    ];
</script>

<main>
    <section class="brewing-tips-section">
        <div class="container">
            <h2 class="section-title">How to Brew the Perfect Cup of Coffee</h2>
            <p class="intro-text">
                Want to brew your perfect cup?

            <div class="brewing-methods">
                {#each brewingMethods as method}
                    <div class="brewing-card">
                        <h3>{method.title}</h3>
                        <p class="description">{method.description}</p>
                        <br>
                        <h4>Steps:</h4>
                        <ul class="steps-list">
                            {#each method.steps as step}
                                <li>{step}</li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</main>

<style>
    .brewing-tips-section {
        padding: 3rem 0;
        text-align: center;
        margin-top: 5em;
    }

    h4{
        color: var(--primary-color);
    }

    .container {
        width: 90%;
        margin: 0 auto;
    }

    .section-title {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .intro-text {
        font-size: 1.2rem;
        color: var(--text-black);
        margin-bottom: 2rem;
    }

    .brewing-methods {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
    }

    .brewing-card {
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 1, 0.2);
        width: 30%;
        text-align: left;
    }

    .brewing-card h3{
        font-size: 1.8rem;
        color: var(--primary-color);
    }


    .description {
        font-size: 1.1rem;
        color: var(--text-black);
        margin-top: 1rem;
    }

    .steps-list {
        margin-top: 1rem;
        list-style-type: decimal;
        padding-left: 1.5rem;
    }

    .steps-list li {
        font-size: 1rem;
        color: var(--text-black);
        margin: 0.5rem 0;
    }


           /* ========IPADPRO==========*/
           @media only screen and (min-width: 835px) and (max-width: 1030px) {

            main{
                margin-top: 10em;
            }

            .section-title {
                font-size: 2rem;
                color: var(--primary-color);
                margin-bottom: 1rem;
            }

            .intro-text {
                font-size: 1rem;
            }

            }


            /*==========iPAD==========*/
            @media only screen and (min-width: 700px) and (max-width: 835px){
            .section-title {
                font-size: 2rem;
            }
    
            }


            /* ======== MOBILE RESPONSIVE ======== */
            @media only screen and (max-width: 600px) {
                .section-title {
                    font-size: 2rem;
                    color: var(--primary-color);
                    margin-bottom: 1rem;
                }

                .intro-text {
                    font-size: 1rem;
                    color: var(--text-black);
                    margin-bottom: 2rem;
                }

                .brewing-card {
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 1, 0.2);
                    width: 70%;
                    text-align: left;
                }
        
            }

</style>
