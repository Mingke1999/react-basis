import React, { Component } from 'react'

export default class Condition extends Component {
  render() {
    const flag = true;
    const msg ={
       // title:"a short message"
    }
    return (
      <div>
        {flag ? "isflaged":"notflaged"}
        {
            msg.title ? //whether exit
            <p>{msg.title}</p>
            : <div>loading content</div>
        }
        
      </div>
    )
  }
}
