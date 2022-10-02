import React, { useState } from 'react';
import { FinalApi } from '../rest/FinalApi';


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const NewGame = () => {
     
    const [name, setName] = useState('');    

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log(name)
        FinalApi.post(name);
        
        setName('');
        
    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    return (
        <div className='addGame'>
            <h2 className="headercolor"> Add a new Game</h2>
            <br></br>
            
            
            <form className="fix" onSubmit={onSubmit}>
                
                <input className="random"
                    type='text'
                    placeholder='Name of your new Game'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name={name}
                />
                <button className="addbutton" type='submit'>Add A Game</button>
                
            </form>

            <form>


            </form>
        </div>
    )
};



