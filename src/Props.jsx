import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    //const title = this.props.title;
    //const desc = this.props.desc;
    const {title,desc,list} = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div>
            {
                list ?
                <ol>
                    {
                        list.map((element,index)=>{
                           return <li key={index}>{element}</li>
                        })
                    }
                </ol>
                :
                <div>
                    no list passing in
                </div>
            }
        </div>
      </div>
    )
  }
}
