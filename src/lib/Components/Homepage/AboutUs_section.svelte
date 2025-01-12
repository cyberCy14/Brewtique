<script>
</script>

<main>
    <section>
        <div class="container">
            <!-- First Div: About Brewtique -->
            <div class="first-div">
                <h2 class="main-text1">BREWTIQUE</h2>
                <div class="links-container">
                    <!-- Coffee Shop Links -->
                    <div class="link-group">
                        <p class="text">OUR COFFEE SHOP</p>
                        <div class="links">
                            <a href="/#location">Location</a>
                            <a href= {'/ourStory'}>Our Story</a>
                        </div>  
                    </div>
                    <!-- More Links -->
                    <div class="link-group">    
                        <p class="text">MORE</p>
                        <div class="links">
                            <a href={"/contactUs"}>Contact Us</a>
                            <a href={"/faqs"}>FAQs</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Div: Stay Updated -->
            <div class="second-div">
                <h2 class="main-text2">Stay Updated!</h2>
                <p class="text">Join the Brewtique community!</p>
                <p class="description">
                    Sign up for our exclusive newsletter to enjoy special offers, the latest Brewtique news, event updates, 
                    and early access to our most exciting coffee releases. Plus, get complimentary shipping on your first 
                    order when you subscribe today!
                </p>
            </div>
        </div>
    </section>
</main>

<style>
    /* Section Styling */
    section {
        width: 100%;
        min-height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3rem;
        max-width: 1200px;
        padding: 2rem;
    }

    .first-div, .second-div {
        flex: 1;
        min-width: 280px;
    }

    /* First Div Styling */
    .main-text1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--text-white);
        margin-bottom: 1rem;
    }

    .links-container {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .link-group {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: var(--text-white);

    }

    .text {
        font-size: 1rem;
        font-weight: 500;
        color: var(--text-white);
        margin-bottom: 0.5rem;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    a {
        text-decoration: none;
        color: var(--text-white);
        font-size: 1rem;
        transition: opacity 0.3s;
    }

    a:hover {
        opacity: 0.8;
    }

    .main-text2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--text-white);
        margin-bottom: 1rem;
    }

    .description {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-white);
        margin-top: 1rem;
    }


           /* ========IPADPRO==========*/
           @media only screen and (min-width: 835px) and (max-width: 1030px) {
                section {
                    min-height: 5vh;
                }
            }


            /*==========iPAD==========*/
            @media only screen and (min-width: 700px) and (max-width: 835px){
                section {
                    min-height: 5vh;
                }
            }


            /* ======== MOBILE RESPONSIVE ======== */
            @media only screen and (max-width: 600px) {

            }

 </style>