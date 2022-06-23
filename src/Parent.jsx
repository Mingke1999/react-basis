import React, { Component } from 'react'
import Child from './Child'
//props: parent->child
export default class Parent extends Component {
    constructor(){
        super();
        this.state={
            msg:""
        }
    }
   
    myFunc = (msg) =>{
        this.setState({
            msg
        })
    }

  render() {
    const title = "data passed from parent"
    return (
      <div>
        <h2>PARENT</h2>
        <p>{this.state.msg}</p>
        <Child title={title} passing={this.myFunc}/>
      </div>
    )
  }
}
