<main>
    <section>
        <div class="container">
            <!-- Contact Us Section -->
            <div class="contact-div">
                <h2 class="main-text1">Contact Us</h2>
                <p class="description">
                    At Brewtique, we believe that coffee is more than just a beverage—it’s a way to bring people together. Whether you have a question, feedback, or simply want to share your favorite brew, we’d love to hear from you! Our team is dedicated to providing you with exceptional service and creating a community where your thoughts and ideas matter. Feel free to reach out to us—we’re always happy to connect with fellow coffee lovers!
                </p>
                <p class="description">
                    You can contact us via the form below, or connect with us through our social media channels. If you prefer, you're always welcome to visit us at the café and experience the Brewtique atmosphere firsthand. Your feedback helps us grow and improve, and we genuinely appreciate the time you take to share your thoughts with us. Whether you’re a first-time visitor or a loyal customer, we’re excited to hear from you.
                </p>
            </div>

            <!-- Contact Details Section -->
            <div class="details-div">
                <h3 class="details-header">Visit Us</h3>
                <p class="description">
                    Brewtique is located in the heart of the city, offering a cozy ambiance where you can enjoy a cup of coffee and escape from the world. Our doors are open seven days a week, so whether you’re looking for a quiet space to work or a lively place to meet friends, we’re here to welcome you.
                </p>
                <p class="description">
                    <strong>Address:</strong> 123 Coffee Lane, Dumaguete City, Negros Oriental <br />
                    <strong>Phone:</strong> (123) 456-7890 <br />
                    <strong>Email:</strong> contact@brewtique.com
                </p>
            </div>
        </div>
    </section>
</main>

<style>
    /* General Contact Us Styling */
    section {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3rem;
        max-width: 1200px;
        margin-top: 10em;
        margin-bottom: 5em;
    }

    /* Contact Us Section */
    .contact-div {
        flex: 1;
        min-width: 280px;
    }

    .main-text1 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--text-white);
        margin-bottom: 1rem;
    }

    .description {
        font-size: 1rem;
        line-height: 1.6;
        margin-top: 1rem;
        color: var(--text-white);
    }


    /* Contact Details Section */
    .details-div {
        flex: 1;
        min-width: 280px;
        color: var(--text-white);
    }

    .details-header {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .description strong {
        font-weight: bold;
    }


           /* ========IPADPRO==========*/
           @media only screen and (min-width: 835px) and (max-width: 1030px) {

            .container {
                flex-direction: column; 
                align-items: center;
                margin-top: -20em;
                padding: 5em;
            }

            }


            /*==========iPAD==========*/
            @media only screen and (min-width: 700px) and (max-width: 835px){

                .container {
                    flex-direction: column; 
                    align-items: center;
                    margin-top: -1em;
                    padding: 3em;
                }
            }


            /* ======== MOBILE RESPONSIVE ======== */
            @media only screen and (max-width: 600px) {
                .container {
                    flex-direction: column; 
                    align-items: center;
                    margin-top: 10em;
                    padding: 2em;
                }

                section {
                    height: auto;
                }

            }

</style>
