import React from "react"
import Info from './Info'
import './App.css'
import data from './backend/data'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      datas:data
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      id:event.target.value
    })
  }

  render(){
    const _data= this.state.datas.map(item=><Info key={item.id} item={item} />)
    return(
      <center>
        <form method="GET" ></form>
 <br/>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit">Fetch</button>
        </form>
        <tr>
       <td>Id</td>
       <td>Result</td>
       </tr>
     <table className=".tble">
       
       
       {_data}
     </table>
     </center>
    )
  }
}
export default App