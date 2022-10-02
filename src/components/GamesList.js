import React from "react";
import { FinalApi } from '../rest/FinalApi';
import { NewGame } from "./NewGame";
import { DeleteGame } from "./DeleteGame"


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



export class GamesList extends React.Component {
    
    state = {
        
        games: [] 
    };

    componentDidMount () {
        this.fetchGames();
    }
    fetchGames = async () => {
        
    const games = await FinalApi.get();
    
        
        this.setState({ games });
    };

    updateGame = async (updatedGame) => {
        await FinalApi.put(updatedGame);
        
        this.fetchGames();
    };


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

    render () {
        const list =[]
        for(let i=0;i<this.state.games.length;i++){
            list.push(this.state.games[i].name)
            list.push(this.state.games[i].id)
        } return  ( 
            
            <div className="fix">
                <div className="fix">
                    <NewGame />

                    
                </div>

                <div className="fix">
                    <DeleteGame />
                    
                        
                    
                </div>
            
                <div className="fix1">
                    <h2>List of Games</h2>
                    <br></br>
                    {
                    this.state.games.map(d => ( 
                    <div>
                        <GamesProps
                            id= {d.id}
                            name= {d.name}
                        />
                    </div>))
                    }
                        
                    
                </div>   
            </div>
            
            
        )
    }
    }





    function GamesProps(props){
        return(
            <div>
              <h7>{props.id}) </h7>
              <h8>{props.name}</h8><br></br>
                
            </div>
        )
      }