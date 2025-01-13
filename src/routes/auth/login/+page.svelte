<script>
    import { preventDefault } from "svelte/legacy";
    
    import bg from "$lib/assets/backgrounds/bg.jpg";
    import { goto } from "$app/navigation"; 


    import { user } from "$lib/stores/state.svelte.js";
    import { fetchUser } from "../../../hooks/auth.js";

    import { PUBLIC_API_URL } from "$env/static/public";


    const apiUrl = `${PUBLIC_API_URL}/api/auth/login`;

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const datas = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        if(!datas.email || !datas.password){
            console.log('Please provide both email and password.');
            return;
        }

        try {
            // console.log("Credentials: ", JSON.stringify(datas));

            const response = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(datas),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                mode: 'cors', 
            });

            const data = await response.json();

            if (response.ok) {
                // console.log('Login successful:', data);
                localStorage.setItem('token', data.access_token); 
                localStorage.setItem('username', data.user.name);
                fetchUser();
                goto('/')
                // location.reload()
                

            } else {
                console.error('Login failed:', data);
                alert('Login failed: ' + data.message); 
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login.');
        }
    }

    $effect(async () => {
        // await user.fetchUser(); 
        if (user.isAuthenticated) {
            goto('/'); 
        }
    });

</script>

<main>
    <div class="bg-container fade-in-left">
        <img src="{bg}" alt="Beans Background" class="bg-image"/>
    </div>

    <div class="form-container fade-in-right">
        <div class="login-form">
            <h2>Login</h2>
            <form onsubmit={preventDefault(handleSubmit)} method="POST">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" required>
                </div>
                <button type="submit" class="btn">Login</button>
            </form>
            <p class="footer-text">Don't have an account? <a href="/auth/register">Sign up</a></p>
        </div>
    </div>
</main>


<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

main {
    display: flex;
    justify-content: space-between;
    align-items: stretch; 
    height: 100vh;
}

.bg-container {
    flex: 2; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    overflow: hidden;
}

label{
    font-weight: bold;
    font-size: 1em;
}
.bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 8px;
    height: 100vh;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.login-form {
    max-width: 400px;
    width: 100%;
    margin-top: 3em;

}

.login-form h2 {
    margin-bottom: 1rem;
    color: var(--text-black);
    font-size: 2em;
    text-align: center;
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-black);
}

.input-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid  #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.btn {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: var(--text-white);
    color: var(--text-black);
}

.footer-text {
    text-align: center;
    margin-top: 1rem;
    font-size: 1em;
}

.footer-text a {
    color: #007bff;
    text-decoration: none;
    font-size: 1em;

}

.footer-text a:hover {
    text-decoration: underline;
}


@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fade-in-left {
    animation: fadeInLeft 1s ease-in-out;
}

.fade-in-right {
    animation: fadeInRight 1s ease-in-out;
}




   /* ========IPADPRO==========*/
@media only screen and (min-width: 835px) and (max-width: 1030px){
   
    .form-container {
        flex: 2;
    }
}



 /*==========iPAD==========*/
@media only screen and (min-width: 700px) and (max-width: 835px){
    .form-container {
        flex: 2;
    }
}



/*========MOBILE==========*/
@media only screen and (max-width: 600px){
    /* .form-container {
        flex: 3;
    } */

     .bg-container{
        display: none;
     }
}
</style>
