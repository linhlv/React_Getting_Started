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
    	counter : 9
  }
  
  handleClick = ()=>{
  	// this === component instance
    this.setState({
    	counter: this.state.counter+1
    })
  }
  
	render(){
  	return (
    	<button onClick={this.handleClick}>{this.state.counter}</button>
    );
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          <Button></Button>
        </p>
      </div>
    );
  }
}

export default App;
