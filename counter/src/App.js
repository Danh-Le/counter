import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }
  handleClickMoins = () => {
    let counterMoins = this.state.count - 1
    this.setState({count: counterMoins})
  }
  handleClickPlus = () => {
    let counterPlus = this.state.count + 1
    this.setState({count: counterPlus})
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClickMoins}> - </button>
        <button onClick={this.handleClickPlus}> + </button>
      </div>
    );
  }
}

export default App;
