import React, { Component } from 'react'
import "./event.css"
export default class Event extends Component {

  constructor(){
    super();
    this.state ={
        flag:false
    }
  }
  clickHandle = () =>{
    console.log("hello")
  }
  moveHandle=()=>{
    console.log("mouse is moving inside box")
  }
  flagHandle=()=>{
    this.setState({
            flag:!this.state.flag
        })
  }
  render() {
    return (
      <div>
        <h2>event</h2>
        <button onClick={this.clickHandle}>clickHandle</button>
        {/**class->className */}
        <div className='box' onMouseMove={this.moveHandle}></div>
        <div>
            <button onClick={this.flagHandle.bind(this)}>change flag</button>
            {
                this.state.flag ? 'flagTrue':'flagFalse'
            }
        </div>
      </div>
    )
  }
}
