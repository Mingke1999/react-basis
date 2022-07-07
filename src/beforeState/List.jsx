import React, { Component } from 'react'
/**
 * List basically means json
 */
export default class List extends Component {
  render() {
    const banners={
        "success":true,
        "msg":"",
        "banner":
        [
            {
                id:"1",
                "title":"A two-in-one COVID shot",
                "content":"Your immune system then makes antibodies against various parts of the spike protein. Should those antibodies encounter spike proteins again in the form of the real virus, they will recognise and grab hold of it.",
            },
            {
                id:"2",
                "title":"Eddie warns of AFL ‘disaster’ in waiting",
                "content":"Former Magpies president Eddie McGuire has criticised the AFL as the competition continues to consider the application of a 19th team.",
            },
            {
                id:"3",
                "title":"BlueScope announces Port Kembla land sale, dispersal plans",
                "content":"Mr Vassella said the company had employed an architect and urban design firm to develop a master plan involving community consultation with First Nations people, residential and industrial neighbours, employees, the council and the NSW Government."
            }
        ]
    }
    return (
        <div>
          <h3>List render</h3>
          <ul>
            {
                banners.banner.map((element,index)=>{
                    //if try to println, use()
                    return(
                        <li key={element.id}>
                            <h4>{element.title}</h4>
                            <p>{element.content}</p>
                        </li>
                    )
                })
            }
          </ul>
        </div>
      )
    }
   
  }
