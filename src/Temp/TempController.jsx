import React, { Component } from 'react'

export default class TempController extends Component {
 
    changeHandle = (e) =>{
        this.props.onTempChange(e.target.value) //calling the function from calculator
    }

  render() {
    const scale = this.props.scale; //grab user input
    const temp = this.props.temp;
    return (
      <div>
        <p>Please input a temperature in {scale}</p>
        <input type="text"  value={temp} onChange={this.changeHandle}/>
      </div>
    )
  }
}
