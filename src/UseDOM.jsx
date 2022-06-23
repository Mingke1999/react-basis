import React, { Component } from 'react'

export default class UseDOM extends Component {
constructor(){
    super();
    this.username = React.createRef();
    this.password = React.createRef();
   }
   clickHandle=()=>{
    console.log(this.username.current.value)
    console.log(this.password.current.value)
    //this.username->current{}
  }

render() {
        return (
          <div>
            <h3>UNControlled Component</h3>
            <input type="text" ref={this.username}/>
            <input type="password" ref={this.password}/>
            <button onClick={this.clickHandle}>Get Input</button>
          </div>
        )
      }
}
