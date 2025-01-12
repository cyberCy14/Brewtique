<main>
    <section>
        <div class="container">
            <!-- FAQs Section -->
            <div class="faqs-div">
                <h2 class="main-text1">Frequently Asked Questions</h2>
                <p class="description">
                    At Brewtique, we want to make sure you have the best possible experience with every visit. Whether you're new to our café or a regular customer, we’re here to answer all your questions about our offerings, our coffee, and how we make every cup special. Below are some of the most common questions we receive from our coffee-loving community. If you don’t find the answer you’re looking for, feel free to reach out to us directly—we’re always happy to help!
                </p>

                <div class="faq-item">
                    <h3 class="faq-question">What makes Brewtique’s coffee different from other cafés?</h3>
                    <p class="faq-answer">
                        At Brewtique, we believe coffee should be an experience, not just a drink. Our coffee is sourced from the finest farms around the world, and we work closely with our suppliers to ensure that each bean is ethically sourced. We pride ourselves on our commitment to quality, and we bring a personal touch to every cup. Whether it's our hand-crafted pour-overs, signature espresso drinks, or seasonal specials, our goal is to create a unique and memorable coffee experience that reflects our passion for the craft.
                    </p>
                </div>

                <div class="faq-item">
                    <h3 class="faq-question">Do you offer vegan or dairy-free options?</h3>
                    <p class="faq-answer">
                        Yes! At Brewtique, we strive to cater to all dietary preferences. We offer a variety of dairy-free milk options including oat milk, almond milk, and coconut milk. Our baristas are happy to customize your drink to fit your specific needs, so feel free to ask for any substitutions. We also offer a variety of vegan snacks and treats to enjoy alongside your coffee.
                    </p>
                </div>

                <div class="faq-item">
                    <h3 class="faq-question">Can I buy Brewtique’s coffee beans to brew at home?</h3>
                    <p class="faq-answer">
                        Absolutely! We’re passionate about bringing great coffee into your home. Brewtique sells our carefully selected coffee beans, so you can enjoy the same high-quality brews at home. Whether you prefer a light roast or a dark roast, we’ve got options for every coffee lover. Our beans are available for purchase at the café, and you can also order them online through our website.
                    </p>
                </div>

                <div class="faq-item">
                    <h3 class="faq-question">Do you offer catering or coffee for events?</h3>
                    <p class="faq-answer">
                        Yes, we do! Brewtique is happy to provide coffee for your special events, whether it’s a corporate gathering, wedding, or private party. We offer a range of coffee catering services, including espresso stations, drip coffee, and custom brew options. Our team will work with you to ensure your event is a hit, with freshly brewed coffee that will leave a lasting impression. Reach out to us for more information on catering options.
                    </p>
                </div>

                <div class="faq-item">
                    <h3 class="faq-question">Can I work or study at Brewtique?</h3>
                    <p class="faq-answer">
                        Of course! Brewtique is designed to be a comfortable, welcoming space for anyone who wants to enjoy a great cup of coffee while getting some work done or studying. We offer free Wi-Fi, plenty of seating, and a relaxing atmosphere that helps you focus. Whether you're working on a project, studying for exams, or just catching up on emails, we’d love for you to make Brewtique your go-to workspace.
                    </p>
                </div>

                <div class="faq-item">
                    <h3 class="faq-question">What are your hours of operation?</h3>
                    <p class="faq-answer">
                        Brewtique is open seven days a week to satisfy your coffee cravings! Our hours of operation are:
                        <br /><strong>Monday – Friday:</strong> 7:00 AM – 7:00 PM
                        <br /><strong>Saturday – Sunday:</strong> 8:00 AM – 6:00 PM <br>
                        We’re always here when you need your coffee fix!
                    </p>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    /* General FAQs Styling */
    section {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background-color: var(--primary-color);
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3rem;
        margin-top: 10em;
        margin-bottom: 5em;
        max-width: 1200px;
    }

    /* FAQ Section */
    .faqs-div {
        flex: 1;
        min-width: 280px;
    }

    .main-text1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--text-white);
    }

    .description {
        font-size: 1rem;
        line-height: 1.6;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        color: var(--text-white);
    }

    .faq-item {
        margin-bottom: 2rem;
    }

    .faq-question {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--text-white);
    }

    .faq-answer {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-white);
    }

        /* ========IPADPRO==========*/
        @media only screen and (min-width: 835px) and (max-width: 1030px) {
            .container{
                padding: 5em;
            }

        }


        /*==========iPAD==========*/
        @media only screen and (min-width: 700px) and (max-width: 835px){
            .container{
                padding: 3em;
            }

        }


        /* ======== MOBILE RESPONSIVE ======== */
        @media only screen and (max-width: 600px) {
            
            .container{
                padding: 1em;
            }

        }
</style>
