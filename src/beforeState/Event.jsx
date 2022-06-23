import React, { Component } from 'react'
import "../css/event.css"
export default class Event extends Component {

  constructor(){
    super();
    this.state ={
        flag:false,
        name:["Mingke","Tomcat","Shark"]
    }
    //3. this.clickHandle = this.clickHandle.bind(this)
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
  listHandle=(ele,event)=>{
    console.log(ele)
    console.log(event)
  }
 eventFirst=(event)=>{
    console.log(event)
 }
  render() {
    return (
      <div>
        <h2>event</h2>
        <button onClick={this.clickHandle}>clickHandle</button>
        {/**class->className */}
        <div className='box' onMouseMove={this.moveHandle}></div>
        <div>
            <button onClick={this.flagHandle}>change flag</button>
            {
            //()=>{} get this priority, or this.flagHandle.bind(this)
                this.state.flag ? 'flagTrue':'flagFalse'
            }
        </div>
        <div>
            <ol>
                {
                    this.state.name.map((ele,index)=>{
                        return <li key={index} onClick={(event)=>this.listHandle(ele,event)}>{ele}</li>
                        //use this.listHandle means function call, so three names printed without click event
                        //add one more ()=> so wait to one more click
                    })
                }
            </ol>
        </div>
       <div>
        <button onClick={this.eventFirst}>eventFirst</button>
        {/*event was set default as the first parameter*/}
       </div>
      </div>
    )
  }
}
