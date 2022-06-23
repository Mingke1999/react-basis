import React, { Component } from 'react'

export default class Child extends Component {

    state = {
        message:"function call from child"
    }

clickHandle=()=>{
        this.props.passing(this.state.message)
    }

render() {
    return (
      <div>
        <h3>child</h3>
        <p>{this.props.title}</p>
        <button onClick={this.clickHandle}>Trigger</button>
      </div>
    )
  }
}
