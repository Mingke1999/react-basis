import React, { Component } from 'react'

export default class State extends Component {
/*method 1. state declare
state ={
    mingked:{
        sex:"male",
        age:23
    }
}
*/
constructor(){
    super();
    this.state ={
            sex:"male",
            age:23
    }
}
render() { //props inside render
    let mingke = this.state
    return (
      <div>
        <div>
            <p>{mingke.age}</p>
            <p>{mingke.sex}</p>
        </div>
      </div>
    )
  }
}
