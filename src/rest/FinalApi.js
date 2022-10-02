//Where logic to make network call for the Houses_ENDPOINT. It's own component so that other components can use it when need to make an API call. (in other method, had it tied to the App.js component) - Reusable


//The two methods used to get request and update request (update = add/delete new rooms)

export const FINAL_ENDPOINT = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games';
export const FINAL_ENDPOINT1 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/1';
export const FINAL_ENDPOINT2 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/2';
export const FINAL_ENDPOINT3 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/3';
export const FINAL_ENDPOINT4 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/4';
export const FINAL_ENDPOINT5 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/5';
export const FINAL_ENDPOINT6 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/6';
export const FINAL_ENDPOINT7 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/7';
export const FINAL_ENDPOINT8 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/8';
export const FINAL_ENDPOINT9 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/9';
export const FINAL_ENDPOINT10 = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/10';


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//normal class to house a functions/methods for fetch.
class finalApi {
    get = async () => {
        //using a try/catch in case something goes wrong
        try {
        //makes the call for data
        const resp = await fetch(FINAL_ENDPOINT);
        //have data returned into json
        const data = await resp.json();
            if (data.length > 10) {
                data.reverse().length = 10;
            }
        return data;
        //(3) is the exception, what went wrong
        } catch(e) {
            console.log('Ooops, fetch is not working', e);
        } 
    }
    //method for PUT (Update), takes a parameter, House, to update it
    put = async (Games) => {
        try {
            //want the id from the house to identify it from the other houses in the array, with 2nd object from the request data
            const resp = await fetch(`${FINAL_ENDPOINT}/${Games._id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Games)
            });
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    post = async (GamesName) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT}`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: GamesName})
            });
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    }

    delete1 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT1}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
           
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete2 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT2}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 2')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete3 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT3}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 3')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete4 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT4}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 4')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete5 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT5}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 5')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete6 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT6}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 6')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete7 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT7}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 7')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete8 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT8}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 8')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete9 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT9}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 9')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    delete10 = async (Games) => {
        try {
            
            const resp = await fetch(`${FINAL_ENDPOINT10}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: Games})
            });
            console.log('Delete 10')
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        
}

export const FinalApi = new finalApi();