<script>
</script>

<main>
    <section id="our-story">
        <div class="container">
            <div class="story-content">
                <h2 class="title">Our Story</h2>
                <p class="description">
                    Brewtique was born from a simple yet profound love for exceptional coffee and the desire to foster meaningful connections. Its creator, Cyrell Jane Radoc, envisioned a place where people could take a break from the fast-paced world and slow down, allowing them to enjoy the moment. As someone who deeply values the ritual of coffee brewing, Cyrell wanted to create a space where customers could experience coffee not just as a beverage, but as an art form. In a time where life moves quickly and digital screens often dominate our attention, Brewtique was designed to be a sanctuary—a place where the focus is on savoring every sip, appreciating the craftsmanship that goes into brewing, and creating bonds over shared moments. Here, at Brewtique, coffee is more than just a drink—it’s a chance to reconnect with yourself and the world around you.
                </p>
                <p class="description">
                    Our journey began in a small, cozy corner of the city, with a dream that was simple but powerful: to combine the rich traditions of coffee culture with the intimate, boutique-like experience that Cyrell had always longed for. Cyrell’s vision was clear from the start: a space where modern coffee culture could thrive, yet still maintain a sense of warmth and approachability. Brewtique is a fusion of the best of both worlds—a contemporary setting where every customer feels like they belong. From the carefully chosen beans to the skilled baristas, every cup served at Brewtique is a reflection of our commitment to quality. We pride ourselves on working with farmers who uphold ethical practices, ensuring that the beans we source are not only top-tier in flavor but also support sustainable farming methods. Whether you’re enjoying a morning espresso or a hand-crafted pour-over, every sip tells the story of hard work, passion, and a commitment to excellence that transcends borders.
                </p>
                <p class="description">
                    Today, Brewtique has blossomed into a beloved haven for coffee enthusiasts—a place where the scent of freshly brewed coffee is a constant inspiration, where the flavors of each cup tell a unique story, and where every visit feels like returning home. Our journey has been one of growth, learning, and deepening connections with our community. What started as a single café has now become a local favorite, known not only for its exceptional coffee but for the sense of belonging it fosters among its visitors. Brewtique is a place where memories are made—whether it's your first cup of the day, a special conversation with friends, or a quiet moment spent alone. As we continue to grow and expand our reach, we are more committed than ever to preserving the soul of what makes Brewtique so special: its authentic love for coffee, its welcoming environment, and the relationships it nurtures. We are so grateful to our loyal customers for being a part of our story, and we look forward to continuing this incredible journey with you, one brew at a time.
                </p>
                
            </div>
        </div>
    </section>
</main>

<style>
    /* Section Styling */
    #our-story {
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        color: var(--text-white);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        margin-top: 10em;
        margin-bottom: 5em;
    }

    .story-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    /* Typography Styling */
    .title {
        font-size: 2rem;
        font-weight: bold;
        color: var(--text-white);
        margin-bottom: 1rem;
    }

    .description {
        font-size: 1rem;
        line-height: 1.8;
        color: var(--text-white);
    }



           /* ========IPADPRO==========*/
           @media only screen and (min-width: 835px) and (max-width: 1030px) {
                    .container {
                        max-width: 1000px;
                        margin: 2em;
                        justify-items: center;
                        text-align: center;
                        margin-top: -10em;
                    }

                    main{
                        height: 100vh;
                        background-color: var(--primary-color);
                    }
            }


            /*==========iPAD==========*/
            @media only screen and (min-width: 700px) and (max-width: 835px){
                .container {
                        max-width: 1000px;
                        margin: 2em;
                        justify-items: center;
                        text-align: center;
                        margin-top: 10em;
                        margin-bottom: 5em;
                    }
            }


            /* ======== MOBILE RESPONSIVE ======== */
            @media only screen and (max-width: 600px) {
                .container {
                        max-width: 500px;
                        margin: 2em;
                        justify-items: center;
                        text-align: center;
                        margin-top: 10em;
                        margin-bottom: 5em;
                    }
            }


</style>
