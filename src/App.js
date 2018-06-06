import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Button extends Component{
  handleClick = ()=>{
    this.props.onClickFunction(this.props.incrementValue);
  };

	render(){
  	return (
    	<button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  };
}


const Result = (props)=>{
  return (
    <div>{props.counter}</div>
  )
}

class App extends Component {
  state = {
      counter : 0
  }

  incrementCounter = (incrementValue)=>{
    this.setState((prevState)=>{
      return {
        counter: prevState.counter + incrementValue
      }
    });
  };

  render() {
    return (
      <div className="App">        
          <Button onClickFunction={this.incrementCounter} incrementValue={1}></Button>
          <Button onClickFunction={this.incrementCounter} incrementValue={5}></Button>
          <Button onClickFunction={this.incrementCounter} incrementValue={10}></Button>
          <Button onClickFunction={this.incrementCounter} incrementValue={100}></Button>
          <Result counter={this.state.counter}></Result>
      </div>
    );
  }
}

export default App;
