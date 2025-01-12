import { authenticateUser } from './hooks/auth.js';



export const handle = async ({event, resolve}) =>{
    
    // event.locals.user = authenticateUser();

    event.locals = 'whaterver'

    const response = await resolve(event)

    // console.log(response);
    
    return response;
}