import React, { Component } from 'react'
/**
 * The component could have children element
 * to display them use this.props.children
 */
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
