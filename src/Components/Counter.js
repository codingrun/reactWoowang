import React, {Component} from 'react'

class Counter extends Component {

  state = {
    number:0,
    marry:{
      man: '다솔',
      woman: '수연'
    }
  }

  handleIncrease = () => {
    this.setState (
      {
        number: this.state.number + 1,
        marry:{
          ...this.state.marry,
          man: '김영광'
        }
      },(test) => console.log(this.state, test)
    )
  }

  handleDecrease = () => {
    this.setState (
      {
        number : this.state.number - 1
      })
  }


  render() {
    return(
      <div>
        <h1>counter</h1>
        <div>{this.state.number}</div>
        <div>{this.props.name}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }

}
export default Counter;