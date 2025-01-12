<script>
    let { children } = $props(); // To get current page URL in SvelteKit

</script>

<main>
    <!-- Sidebar and Content Container -->
    <div class="container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="menu">
                <h3>Menu</h3>
                <ul>
                    <li>
                        <a href="/app/profile">
                            My Profile
                        </a>
                    </li>
                    <li>
                        <a href="/app/profile/order_history">
                            Order History
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

        <div class="content">
            {@render children?.()}
        </div>
    </div>
</main>

<style>
    /* Root Colors */
    :root {
        --primary-color: #6F4E37;
        --text-white: #FEFAF6;
        --text-black: #493628;
        --hover-bg: #E0C9A8;
        --border-color: #D3B29D;
    }

    /* Main Container */
    main {
        font-family: Arial, sans-serif;
        margin: 10rem auto;
        max-width: 1200px;
        background-color: var(--text-white);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
    }

    .container {
        display: flex;
        gap: 1.5rem;
        padding: 1.5rem;
    }

    /* Sidebar Styling */
    .sidebar {
        width: 250px;
        background-color: var(--primary-color);
        color: var(--text-white);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .menu h3 {
        margin-bottom: 1rem;
        font-size: 1.1rem;
        color: var(--text-white);
        border-bottom: 2px solid var(--border-color);
        padding-bottom: 0.5rem;
    }

    .menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .menu li {
        margin-bottom: 1rem;
    }

    .menu a {
        display: block;
        text-decoration: none;
        color: var(--text-white);
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: background-color 0.3s, color 0.3s;
    }

    .menu a:hover {
        background-color: var(--hover-bg);
        color: var(--text-black);
    }

    .menu a.active {
        background-color: var(--hover-bg);
        font-weight: bold;
        color: var(--text-black);
    }

    /* Content Section */
    .content {
        flex: 1;
        background-color: var(--text-white);
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        color: var(--text-black);
    }

        /* ========IPADPRO==========*/
        @media only screen and (min-width: 835px) and (max-width: 1030px) {
         

        }


        /*==========iPAD==========*/
        @media only screen and (min-width: 700px) and (max-width: 835px){
        
        }


        /* ======== MOBILE RESPONSIVE ======== */
        @media only screen and (max-width: 600px) {

            .content {
                flex: 1;
                background-color: var(--text-white);
                padding: 1rem;
                margin-top: 5em;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                color: var(--text-black);
            }

            .container{
                margin-top: 5em;
            }
            

            .sidebar {
                position: absolute;
                width: 75vw;
                height: 7em;
                display: flex;
                flex-direction: column;
                padding: 1.5rem;
                margin-top: -10em;
            }  
  
        }
</style>
