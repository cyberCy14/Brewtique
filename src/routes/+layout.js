import { PUBLIC_API_URL } from '$env/static/public';

export async function load({fetch}) {

    let allCoffees;
    
    
    // Get all coffees
    try {
        const response = await fetch(`${PUBLIC_API_URL}/api/coffees`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch coffee items.');
        }

        allCoffees = await response.json();

    } catch (error) {
        let errorMessage = 'Error fetching coffee items.';
        console.error('Error fetching coffee items:', error);
        console.log(`${PUBLIC_API_URL}/api/coffees`);
    }




    return {

        allCoffees,
    
        
    };

}




  


