import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter';


class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      count2: 0
    }
  }
  handleClickMoins = () => {
      if (this.state.count > 0) {
        let counterMoins = this.state.count - 1
        this.setState({count: counterMoins})
    }
}
  handleClickPlus = () => {
      if (this.state.count < 100) {
        // if (this.state.count === this.state.count2) {
    let counterPlus = this.state.count + 1
    this.setState({count: counterPlus})
    // }}
      }
}
  handleClickMoinsBis = () => {
    if (this.state.count2 > 0) {
      if (this.state.count === this.state.count2) { 
      let counterMoinsBis = this.state.count2 - 1
      this.setState({count2: counterMoinsBis})
    }}
}
  handleClickPlusBis = () => {
    if (this.state.count2 < 100) {
      let counterPlusBis = this.state.count2 + 1
      this.setState({count2: counterPlusBis})
    }
}


  render() {
    return (
      <div>
        <h1 class="title">Counter</h1>
        <Counter
          count={this.state.count}
          substract={this.handleClickMoins}
          increment={this.handleClickPlus}
      />
        <Counter
          count={this.state.count2}
          substract={this.handleClickMoinsBis}
          increment={this.handleClickPlusBis}
      />
      </div>
    );
  }
}

export default App;
