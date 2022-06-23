import React, { Component } from 'react'

export default class StateAsyn extends Component {
constructor(){
    super();
    this.state={
        count:0
    }
}
/*
increment=()=>{
    this.setState({
        count:this.state.count+1
    },()=>{
        console.log(this.state.count)
    })
        console.log(this.state.count)
}
*/
increment = async () =>{
    await this.setStateAsync({
        count:this.state.count+1
    })
    console.log(this.state.count)
}
setStateAsync(state){
    return new Promise((resolve)=>{
        //Asynchronous to synchronous
        this.setState(state,resolve)
    })
    
}
render() {
    return (
      <div>
        <h2>asyn state</h2>
        <button onClick={this.increment}>increase</button>
        <p>count={this.state.count}</p>
      </div>
    )
  }
}
