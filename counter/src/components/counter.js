import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div className="">
      <h2>{this.state.count}</h2>
      <button onClick={this.handleClickMoins}> - </button>
      <button onClick={this.handleClickPlus}> + </button>
    </div>
    )
  }
}

export default Counter