import React, { Component } from 'react'

export default class Forms extends Component {
  constructor(){
    super();
    this.state={
        username:""
    }
  } 
  changeHandle=(event)=>{
   this.setState({
    username:event.target.value
   })
  }
  clickHandle=()=>{
    console.log(this.state.username)
  }
  render() {
    return (
      <div>
        <h3>Controlled Component</h3>
        <input type="text" value={this.state.username} onChange={this.changeHandle}/>
        <button onClick={this.clickHandle}>Get Input</button>
      </div>
    )
  }
}
