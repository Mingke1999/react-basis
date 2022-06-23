import React from 'react'

export default function Hello() {   //name must start with capital letter 
    var names = ["mingke","react","ajax","git"];
  return (
    //{}means to write javascript
   <ol>
    {
        names.map((element,index) =>{
            return <li key={index}><h3>{element}</h3></li>
        })
    }
   </ol>
  )
}
