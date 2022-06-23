import React from 'react'

export default class Hello extends React.Component{   //name must start with capital letter 
 render(){
  var names = ["Hello Jsx"];
  return (
    //{}means to write javascript
   <ol>
    {
        names.map((element,index) =>{
            return <li key={index}><h2>{element}</h2></li>
        })
    }
   </ol>
  )
 }
}
