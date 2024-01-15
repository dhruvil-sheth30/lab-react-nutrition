/* eslint-disable react/prop-types */
import { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div id='calories'>
        <h3>{this.props.count} {this.props.name} = {this.props.totalAmount} Calories</h3>
        <button onClick={this.props.handleReset}>Reset</button>
      </div>
    )
  }
}