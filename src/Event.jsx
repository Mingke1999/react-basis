import React, { Component } from 'react'
import "./event.css"
export default class Event extends Component {

  clickHandle = () =>{
    console.log("hello")
  }
  moveHandle=()=>{
    console.log("mouse is moving inside box")
  }
  render() {
    return (
      <div>
        <h2>event</h2>
        <button onClick={this.clickHandle}>clickHandle</button>
        {/**class->className */}
        <div className='box' onMouseMove={this.moveHandle}></div>
      </div>
    )
  }
}
