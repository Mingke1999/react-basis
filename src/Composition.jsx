import React, { Component } from 'react'

export default class Composition extends Component {
  render() {
    return (
      <div>
        <h3>Composition</h3>
        <div>
            {
                this.props.children
            }
        </div>
      </div>
    )
  }
}
