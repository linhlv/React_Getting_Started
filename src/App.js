import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Button extends Component{
	render(){
  	return (
    	<button onClick={this.props.onClickFunction}>+1</button>
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

  incrementCounter = ()=>{
    this.setState((prevState)=>{
      return {
        counter: prevState.counter + 1
      }
    });
  };

  render() {
    return (
      <div className="App">        
          <Button onClickFunction={this.incrementCounter}></Button>
          <Result counter={this.state.counter}></Result>
      </div>
    );
  }
}

export default App;
