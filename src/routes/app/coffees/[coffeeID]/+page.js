import { PUBLIC_API_URL } from '$env/static/public';

export async function load({ params, fetch }) {

    const URL = `https://brewtique-laravel-production.up.railway.app/api/coffee/${params.coffeeID}`;

    // console.log(URL);
    
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch coffee items.');
        }

        const coffee = await response.json();
        // coffeeItems = shuffleArray(allCoffees).slice(0, 10);

        return {

            coffee
            
        };
    }catch (error) {

        console.error('Error fetching coffee items:', error);
    }
}