import React, { Component } from 'react'
/**
 * react could use confitional statement to return different results
 */
export default class Condition extends Component {
  render() {  //component rendering
    const flag = true;
    const msg ={
       // title:"a short message"
    }
    return (  //elements existing
      <div>
        { //to write js inside tag, to use {}
          flag ? "isflaged":"notflaged" //trinomial operators
        } 
        {
            msg.title ? //whether exit
            <p>{msg.title}</p>
            : <div>loading content</div>
        }
        
      </div>
    )
  }
}
