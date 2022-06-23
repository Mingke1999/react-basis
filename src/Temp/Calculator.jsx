import React, { Component } from 'react'
import BollingCheck from './BollingCheck'
import TempController from './TempController'
/**
 * convert fahreheit to celsius
 * @param {fahrenheit }
 */
function CelsiusConvert(fahrenheit){
    return ((fahrenheit-32)*5)/9
}
/**
 * convert celsius to fahreheit
 * @param {celsius}
 * @returns 
 */
function FahreheitConvert(celsius){
    return ((celsius*9)/5)+32
}

function converter(temp,convert){
    const input = parseFloat(temp);  //change text to number
    if(Number.isNaN(input)){ //make sure there is something since temp was initialised by ""
        return "";
    }
    const output = convert(input)   //convert could be FahreheitConvert or CelsiusConvert
    //rounding up
    const rounded = Math.round(output*1000)/1000;   //consice tp 0.0
    return rounded.toString()   //convert back to text
}


export default class Calculator extends Component {
constructor(){
    super();
    this.state={
        temp:"",
        scale:"c"
    }
}

handleCelsiusChange = (temp) =>{
    this.setState({
        scale:"c",
        temp
    })
}
handleFahrenheitChange = (temp) => {
    this.setState({
        scale:"f",
        temp
    })
}
render() {
    const temp = this.state.temp
    const scale = this.state.scale
    //checking F or C and convert them
    const celsius = scale ==='f' ?  converter(temp,CelsiusConvert) : temp
    const fahrenheit = scale === 'c' ? converter(temp,FahreheitConvert) : temp
    return (
      <div>
        <TempController 
        scale="celsiue" //text tip-> F or C
        temp={celsius}
        onTempChange = {this.handleCelsiusChange}
        />

        <TempController 
        scale="fahrenheit" //text tip-> F or C
        temp={fahrenheit}
        onTempChange = {this.handleFahrenheitChange}
        />
        <BollingCheck celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}
