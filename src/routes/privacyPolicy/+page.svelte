<main>
    <section>
        <div class="container">
            <!-- Privacy Policy Section -->
            <div class="privacy-div">
                <h2 class="main-text1">Privacy Policy</h2>
                <p class="description">
                    At Brewtique, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, mobile application, and café services. By using our services, you agree to the practices described in this policy.
                </p>

                <div class="privacy-item">
                    <h3 class="privacy-title">1. Information We Collect</h3>
                    <p class="privacy-content">
                        We may collect the following types of information:
                    </p>
                    <ul>
                        <li>Personal details such as your name, email address, and phone number when you sign up for an account or newsletter.</li>
                        <li>Payment information when you make purchases online or in-store.</li>
                        <li>Technical data, such as your IP address, browser type, and usage patterns, when you visit our website.</li>
                    </ul>
                </div>

                <div class="privacy-item">
                    <h3 class="privacy-title">2. How We Use Your Information</h3>
                    <p class="privacy-content">
                        Your information is used to:
                    </p>
                    <ul>
                        <li>Provide and improve our services, including processing orders and delivering products.</li>
                        <li>Communicate with you about promotions, updates, and customer support.</li>
                        <li>Analyze website usage to enhance your experience and improve our offerings.</li>
                    </ul>
                </div>

                <div class="privacy-item">
                    <h3 class="privacy-title">3. Data Sharing and Security</h3>
                    <p class="privacy-content">
                        We do not sell or rent your personal information to third parties. However, we may share your data with trusted service providers for order fulfillment, payment processing, and marketing. We implement robust security measures to protect your data from unauthorized access, but please note that no system is entirely foolproof.
                    </p>
                </div>

                <div class="privacy-item">
                    <h3 class="privacy-title">4. Cookies and Tracking</h3>
                    <p class="privacy-content">
                        Brewtique uses cookies and similar technologies to enhance your browsing experience. These tools help us understand user preferences and improve website functionality. You can manage cookie preferences through your browser settings, but disabling cookies may limit certain features of our site.
                    </p>
                </div>

                <div class="privacy-item">
                    <h3 class="privacy-title">5. Your Rights</h3>
                    <p class="privacy-content">
                        You have the right to:
                    </p>
                    <ul>
                        <li>Access, update, or delete your personal information.</li>
                        <li>Opt-out of marketing communications by following the unsubscribe instructions in our emails.</li>
                        <li>Request a copy of the data we hold about you.</li>
                    </ul>
                    <p class="privacy-content">
                        To exercise these rights, please contact us at privacy@brewtique.com.
                    </p>
                </div>

                <div class="privacy-item">
                    <h3 class="privacy-title">6. Changes to This Policy</h3>
                    <p class="privacy-content">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically. Continued use of our services signifies your acceptance of any updates.
                    </p>
                </div>

                <div class="privacy-item">
                    <h3 class="privacy-title">7. Contact Us</h3>
                    <p class="privacy-content">
                        If you have questions or concerns about this Privacy Policy or how your data is handled, please contact us at privacy@brewtique.com. We’re here to help!
                    </p>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    /* General Privacy Policy Styling */
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

    /* Privacy Policy Section */
    .privacy-div {
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

    .privacy-item {
        margin-bottom: 2rem;
    }

    .privacy-title {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--text-white);
    }

    .privacy-content {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-white);
    }

    ul {
        margin-top: 0.5rem;
        padding-left: 1.5rem;
        color: var(--text-white);
    }

    ul li {
        margin-bottom: 0.5rem;
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
