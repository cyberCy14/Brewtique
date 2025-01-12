<main>
    <section>
        <div class="container">
            <!-- Terms and Conditions Section -->
            <div class="terms-div">
                <h2 class="main-text1">Terms and Conditions</h2>
                <p class="description">
                    Welcome to Brewtique! By accessing or using our services, you agree to be bound by the following terms and conditions. Please read them carefully, as they outline the rules and responsibilities for both Brewtique and our customers. If you have any questions or concerns about these terms, don’t hesitate to contact us for clarification.
                </p>

                <div class="terms-item">
                    <h3 class="terms-title">1. Acceptance of Terms</h3>
                    <p class="terms-content">
                        By accessing and using our website, mobile application, or visiting our café, you agree to comply with these terms. If you do not agree, please refrain from using our services.
                    </p>
                </div>

                <div class="terms-item">
                    <h3 class="terms-title">2. Use of Services</h3>
                    <p class="terms-content">
                        Our services, including access to our website and products offered at our café, are intended for personal, non-commercial use. Unauthorized use of our services is strictly prohibited.
                    </p>
                </div>

                <div class="terms-item">
                    <h3 class="terms-title">3. Intellectual Property</h3>
                    <p class="terms-content">
                        All content on our website, including text, images, logos, and designs, is the property of Brewtique and protected by copyright and intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.
                    </p>
                </div>

                <div class="terms-item">
                    <h3 class="terms-title">4. Product Availability</h3>
                    <p class="terms-content">
                        Our menu items and coffee products are subject to availability. We reserve the right to modify or discontinue any product at any time without prior notice.
                    </p>
                </div>

                <div class="terms-item">
                    <h3 class="terms-title">5. Privacy Policy</h3>
                    <p class="terms-content">
                        Your privacy is important to us. By using our services, you consent to the collection and use of your personal information as outlined in our Privacy Policy.
                    </p>
                </div>

                <div class="terms-item">
                    <h3 class="terms-title">6. Limitation of Liability</h3>
                    <p class="terms-content">
                        Brewtique is not liable for any damages or losses resulting from the use of our services or products, except as required by applicable law.
                    </p>
                </div>

                <div class="terms-item">
                    <h3 class="terms-title">7. Changes to Terms</h3>
                    <p class="terms-content">
                        We reserve the right to update or modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of the revised terms.
                    </p>
                </div>

                <div class="terms-item">
                    <h3 class="terms-title">8. Contact Us</h3>
                    <p class="terms-content">
                        If you have any questions or concerns about these terms, please contact us at support@brewtique.com. We’re happy to assist you!
                    </p>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    /* General Terms and Conditions Styling */
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

    /* Terms and Conditions Section */
    .terms-div {
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

    .terms-item {
        margin-bottom: 2rem;
    }

    .terms-title {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--text-white);
    }

    .terms-content {
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
