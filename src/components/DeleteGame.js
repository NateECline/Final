import React, { useState } from 'react';
import { FinalApi } from '../rest/FinalApi';
import { FINAL_ENDPOINT1 } from '../rest/FinalApi';
import { FINAL_ENDPOINT2 } from '../rest/FinalApi';
import { FINAL_ENDPOINT3 } from '../rest/FinalApi';
import { FINAL_ENDPOINT4 } from '../rest/FinalApi';
import { FINAL_ENDPOINT5 } from '../rest/FinalApi';
import { FINAL_ENDPOINT6 } from '../rest/FinalApi';
import { FINAL_ENDPOINT7 } from '../rest/FinalApi';
import { FINAL_ENDPOINT8 } from '../rest/FinalApi';
import { FINAL_ENDPOINT9 } from '../rest/FinalApi';
import { FINAL_ENDPOINT10 } from '../rest/FinalApi';



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



export const NewGame = () => {
     
    const [name, deleteName] = useState('');    

    const onSubmit = (e) => {
        e.preventDefault();

        FinalApi.post(name);

        deleteName('');
             
    }
     ( 
        <div className='deleteGame'>
            <h2> Delete A Game</h2>
            <br></br>
            
            <form onSubmit={onSubmit}>
                
                <input className='deleteGame1'
                    type='text'
                    placeholder='Name of your new Game'
                    onChange={(e) => deleteName(e.target.value)}
                    value={name}
                    name={name}
                />
                
                
            </form>
    
            <form>
    
    
            </form>
        </div>
    )
    
};


 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



export const DeleteGame = () => {
     
    const [name, deleteName] = useState('');    

    const onClick = (e) => {
        e.preventDefault();
        
        
        

        if(link === FINAL_ENDPOINT1){
           FinalApi.delete1(name)
        }
        else if(link === FINAL_ENDPOINT2){
            FinalApi.delete2(name)
        }
        else if(link === FINAL_ENDPOINT3){
            FinalApi.delete3(name)
        }
        else if(link === FINAL_ENDPOINT4){
            FinalApi.delete4(name)
        }
        else if(link === FINAL_ENDPOINT5){
            FinalApi.delete5(name)
        }
        else if(link === FINAL_ENDPOINT6){
            FinalApi.delete6(name)
        }
        else if(link === FINAL_ENDPOINT7){
            FinalApi.delete7(name)
        }
        else if(link === FINAL_ENDPOINT8){
            FinalApi.delete8(name)
        }
        else if(link === FINAL_ENDPOINT9){
            FinalApi.delete9(name)
        }
        else if(link === FINAL_ENDPOINT10){
            FinalApi.delete10(name)
        }
        
       
    }



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 
    const link = 'https://6324e4ae9075b9cbee43bdd3.mockapi.io/Games/' + name



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



return ( 

    
    
    <div className='deleteGame'>
        <h2 className="headercolor"> Delete A Game</h2>
        <br></br>
        
        <form className="fix" onSubmit={onClick}>
            
            <input className="random2"
                type='text'
                placeholder='ID of Game'
                onChange={(e) => deleteName(e.target.value)}
                value={name}
                name={name}
                
            />
            <button className="deletebutton" type='submit'>Delete A Game</button>
            
        </form>

        <form>


        </form>
    </div>
)
}