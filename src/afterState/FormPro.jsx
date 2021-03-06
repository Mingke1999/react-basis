import React, { Component } from 'react'
/**
 * By combination of DOM and state, make a dynamic form
 * when the text has been changed, set value to state
 * fetching state value and set it back to the input value
 */
export default class FormPro extends Component {
constructor(){
    super();
    this.state={
        uname:"",
        password:"",
        email:""
}}

changeHandle=(event)=>{
    //console.log(event)
    this.setState({
        [event.target.name]:event.target.value,
    })
}
clickHandle=()=>{
    console.log(this.state)
   
}
render() {
    return (
      <div>
        <h2>Controlled Froms Pro</h2>
        <input type="text" value={this.state.uname} name="uname" onChange={this.changeHandle}/>
        <input type="text" value={this.state.password} name="password" onChange={this.changeHandle}/>
        <input type="text" value={this.state.email} name="email" onChange={this.changeHandle}/>
        <button onClick={this.clickHandle}>Fetching Data</button>
      </div>
    )
  }
}
