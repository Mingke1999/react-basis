import React, { Component } from 'react'

export default class LifeCycle extends Component {
   constructor(){
        super();
        console.log("constructor")
        this.state = {
            count:0
        }
   }
         
  static getDerivedStateFromProps(){
    console.log("before render:getDerivedStateFromProps")
    return null;
  }

  componentDidMount(){
    console.log("render finished")
  }
  shouldComponentUpdate(){
    console.log("is it allowed to render:shouldComponentUpdate")
    return true;    //is it allowed to render
  }
  getSnapshotBeforeUpdate(){
    console.log("before uopdate:getSnapshotBeforeUpdate ")
    return null;
  }
  componentDidUpdate(){
    console.log("updated: componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("component uninstall")
  }
  clickHandle=()=>{
    this.setState({
        count:this.state.count+1
    })
  }
  render() {
    console.log("start to render")
    return (
      <div>
        <h1>LIFECYCLE FUNCTIONS</h1>
        <button onClick={this.clickHandle}>ADD</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
