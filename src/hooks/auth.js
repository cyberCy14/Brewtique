import { user } from "$lib/stores/state.svelte.js";
import { goto } from "$app/navigation";


export const fetchUser = async () => {
    // console.log(`URL: ${import.meta.env.VITE_API_URL}`)

    try{
        if (localStorage.getItem('token') !== null) {

            // let userData = await fetchUserData(user.accessToken);


            user.isAuthenticated = true;
            user.name = localStorage.getItem('username')
            user.accessToken = localStorage.getItem('token');
            user.cart = await fetchUserCart(user.accessToken);
            user.orders = await fetchUserOders(user.accessToken);
            //user Data

            if (user.orders[0] === undefined){
                user.orders[0] = {              
                    order_number : 0,
                    total_price : 0
                }    
            }

        } else {
            user.isAuthenticated = false;
            user.name = null;
            user.accessToken = null;
            user.cart = [];
            user.orders = []
            //user Data
            user.fullName = null;
            user.email = null;
            user.phone_number = null;
            user.address = null;
            return;
        }

            
    } catch(error){
        console.error(error);
        alert("No user logged in");
    }
}

export const fetchUserData = async (accessToken) => {

    const apiUrl = `${import.meta.env.VITE_API_URL}/api/user`;

    try {

        // const accessToken = getUserState();
        
        // let accessToken = localStorage.getItem('token');

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },

        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Response status:', response.status);
            console.error('Response text:', errorData);
            console.log(user)
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Handle the data
        const data = await response.json();
        user.fullName = data.fullName;
        user.email = data.email;
        user.phone_number = data.phone_number;
        user.address = data.address;

    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    }
}

export const logout = (user) => {
    localStorage.clear();
    // setUserState(null, null, null)
    user.name = '';
    user.isAuthenticated = false;
    user.accessToken = null;
    user.cart = [];

    console.log(user.name);
    
    goto('/auth/login');
}

export const fetchUserCart  = async (accessToken) =>{


    try {
        
        // console.log(`Access: ${accessToken}`);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',    
                'Authorization': `Bearer ${accessToken}`,      
            },
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch cart items.');
        }
    
        const cart = await response.json();
        // user.cart = cart;
        // console.log(user.cart);
        
        // coffees = cart.map(item => item.coffee);
        // console.log(coffees);

        return cart;
        
    
    } catch (error) {
        console.error('Error fetching coffee items:', error);
        // cart = [];
    }
}


export const fetchUserOders = async (accessToken)=>{
    
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch order history.');
        }

        const orders = await response.json();

        return orders;

    } catch (error) {
        let errorMessage = 'Error fetching coffee items.';
        console.error('Error fetching coffee items:', error);
    }


}