import { FINAL_ENDPOINT } from '../rest/FinalApi';
import  axios  from 'axios';
import React from "react";
export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  getData=async()=>{
    axios.get(FINAL_ENDPOINT)
    .then(res => {
      var data = res.data
      this.setState({data : data})
    })
  }
  componentDidMount(){
    this.getData()
  }
  render() {
    return (
      <div>
        {
        this.state.data.map(d => (<div>
      <GamesProps
      id= {d.id}
      name= {d.name}
      />
      </div>))
        } 
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
export function DisplayProps() {
  return(
      <div>
          <h1>Hello World</h1>
      <GamesProps
      name= 'hkjgkgkgkg'
      
      />
      </div>
  )
  }