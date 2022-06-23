import React, { Component } from 'react'

export default class Condition extends Component {
  render() {
    const flag = true;
    return (
      <div>
        {flag ? "isflaged":"notflaged"}
      </div>
    )
  }
}
