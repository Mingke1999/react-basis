import React, { Component } from 'react'

export default class BollingCheck extends Component {
  render() {
    //receiving temp and check
    const celsius = this.props.celsius
    return (
      <div>
        {
          celsius >= 100 ? <h3>"bolling"</h3> : <h3>"not ready"</h3>
        }
      </div>
    )
  }
}
