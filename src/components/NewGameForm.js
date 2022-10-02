import React, { useState } from 'react';


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const NewGameForm = (props) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState(undefined);

    
    const handleDescriptionInput = (e) => {
        
        const int = parseInt(e.target.value, 10)
        
        setDescription(int >= 0 ? int : '');
    }

    
    const onSubmit = (e) => {
        e.preventDefault();
       
        if (name && description) {
            
            props.addNewGame({name, description});
            
            setName('');
            setDescription('');
        } else {
            console.log('invalid input');
        }
        
    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    return (
        <div>
            <h5> Add a new game</h5>
            
            <form onSubmit={onSubmit}>
                
                <input
                    type='text'
                    placeholder='Game Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br/>
                <input
                    type='text'
                    placeholder='Description of game'
                    onChange={handleDescriptionInput}
                    value={description}
                />
                <button className='addGame' type='submit'>Add Game</button>
            </form>
        </div>
    )
};