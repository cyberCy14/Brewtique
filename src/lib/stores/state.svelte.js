// export const User = $state({
//     accessToken: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
//     cartCount: 0
// });



import { getContext, setContext } from "svelte";



class User {
    accessToken = $state(null)
    name = $state(null);
    isAuthenticated = $state(null);
    cart = $state([]);
    totalPrice = $state(0);
    orders = $state([]);
    //details
    fullName = $state(null);
    email = $state(null);
    phone_number = $state(null);
    address = $state(null);

    constructor(name, isAuthenticated, accessToken){
        this.name = name;
        this.isAuthenticated = isAuthenticated
        this.accessToken = accessToken;
    }

    computeTotalPrice = () =>{

        let temp = 0;

        this.cart.forEach(element => {
            temp += (element.coffee.price * element.quantity);
            
        })

        this.totalPrice = temp
    }


}

export const user = new User();

const USER_CTX = 'USER_CTX';

export const setUserState = (name, isAuthenticated, accessToken) => {
    const userState = new User(name, isAuthenticated, accessToken );
    setContext(USER_CTX, userState);
    return userState;
}

export const getUserState = () =>{
    return getContext(USER_CTX);
}



// export const fetchUser = async () => {
//     try{
//         if (localStorage.getItem('token') !== null) {

//             setUserState(localStorage.getItem('username'), true)
//         } else {
//             return;
//         }    
//     } catch(error){
//         console.error(error);
//         setUserState(null, false, null)
//         alert("User not found!");
//     }

// }



