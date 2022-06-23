import React, { Component } from 'react'

export default class Time extends Component {
  render() {
    return (
      <div>
        <h2>date time</h2>
        <h3>{new Date().toLocaleTimeString()}</h3>
      </div>
    )
  }
}
