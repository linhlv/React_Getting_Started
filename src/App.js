import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Function Components
const Button = (props)=>{
	return (
  	<button>Go</button>
  );
};
*/

/* Class Components */
class Button extends Component{
  /*
  constructor(props){
		super(props);
    this.state = {
    	counter : 9
    }
  }
  */
  state = {
    	counter : 0
  }
  
  handleClick = ()=>{
  	// this === component instance
    // this.setState({
    // 	counter: this.state.counter+1
    // })

    this.setState((prevState)=>{
      return {
        counter: prevState.counter + 1
      }
    })
  }
  
	render(){
  	return (
    	<button onClick={this.handleClick}>{this.state.counter}</button>
    );
  };
}


const Result = (props)=>{
  return (
    <div>...</div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">        
          <Button></Button>
          <Result></Result>
      </div>
    );
  }
}

export default App;
