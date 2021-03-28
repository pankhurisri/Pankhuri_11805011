import React from "react"
import './App.css'

class Info extends React.Component{
    render(){
        
        return(  <tr className="row">
             
                 <td> <h2>{this.props.item.id}</h2></td> 
                 <td> <p> {this.props.item.result}  </p></td>
            
          </tr>
        )
    }
}
export default Info