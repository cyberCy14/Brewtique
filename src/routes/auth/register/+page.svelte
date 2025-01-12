<script>
    import bg2 from "$lib/assets/backgrounds/bg2.jpg";

    import { user } from "$lib/stores/state.svelte.js";
    import { goto } from "$app/navigation";
    import { fetchUser } from "../../../hooks/auth.js";

    import { PUBLIC_API_URL } from "$env/static/public";

    const apiUrl = `${PUBLIC_API_URL}/api/auth/register`;

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const datas = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            phone_number: formData.get('phone_number'),
            address: formData.get('address'),
            password_confirmation: formData.get('confirm-password')
        };

        if (datas.password !== datas.password_confirmation) {
            alert("Passwords do not match!");
            return; 
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(datas),
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok) {
                // console.log('Registration successful:', data);
                alert('Registration successful');
                fetchUser();
                goto('/');
                // window.location.href = '/auth/login';
            } else {
                alert(`Registration failed: ${data.message || 'An error occurred.'}`);
                
            }
        } catch (error) {
            console.error('Error during registration:', error);
            console.log(URL);
            alert("An error occurred during registration. Please try again.");
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
        <img src="{bg2}" alt="Background" class="bg-image"/>
    </div>

    <div class="form-container fade-in-right">
        <div class="register-form">
            <h2>Sign Up</h2>
            <form onsubmit={handleSubmit} method="POST">
                <div class="input-group">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter full name" required>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email" required>
                </div>
                <div class="input-group">
                    <label for="phone_number">Phone Number</label>
                    <input type="phone_number" name="phone_number" id="phone_number" placeholder="Enter phone number" required>
                </div>
                <div class="input-group">
                    <label for="address"> Home Address</label>
                    <input type="address" name="address" id="address" placeholder="Enter address" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" required>
                </div>
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" required>
                </div>
                <button type="submit" class="btn">Sign Up</button>
            </form>

            <p class="footer-text">Already have an account? <a href="/auth/login">Login</a></p>
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
    height: auto;
}

.bg-container {
    flex: 2; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto; 
    overflow: hidden;
}

.bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    margin-top: 10em;
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    height: 100vh;
    /* margin-top: 2em; */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

label{
    font-weight: bold;
    font-size: 1em;
}

.register-form {
    max-width: 400px;
    width: 100%;
    margin-top: 20em;
}

.register-form h2 {
    margin-bottom: 1rem;
    color: var(--text-black);
    font-size: 2rem;
    text-align: center;
}

.input-group {
    margin-bottom: 1rem;
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

.divider {
    text-align: center;
    margin: 0.5rem 0;
    color: #888;
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

/* Fade-in animations */
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
       flex: 3;
   }
}



/*========MOBILE==========*/
@media only screen and (max-width: 600px){
   /* .form-container {
       flex: 3;
   }

   .register-form{
        width: 80%;
   } */

   .bg-container{
        display: none;
     }
}
</style>
