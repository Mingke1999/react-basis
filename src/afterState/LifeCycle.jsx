import React, { Component } from 'react'

export default class LifeCycle extends Component {
   constructor(){
    //constructor(porps)
        super();
        console.log("constructor")
        this.state = {
            count:0
        }
   }
         
  static getDerivedStateFromProps(){
    //getDerivedStateFromProps(props,state)
    console.log("before render:getDerivedStateFromProps")
    return null;
  }

  componentDidMount(){
    console.log("render finished")
  }
  shouldComponentUpdate(){
    //shouldComponentUpdate(nextProps,nextState)
    //this.props == nextProps
    //this.state == nextState
    //.eg the search content current and before
    console.log("is it allowed to render:shouldComponentUpdate")
    return true;    //is it allowed to render
  }
  getSnapshotBeforeUpdate(){
    // getSnapshotBeforeUpdate(prevProps,PrevState)
    console.log("before uopdate:getSnapshotBeforeUpdate ")
    return null; //snapshot-> componentDidUpdate()
  }
  componentDidUpdate(){
    //componentDidUpdate(prevProps,PrevState,snapshot)
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
