import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const Stars = (props)=>{
  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  let stars = [];

  return (
    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      {_.range(numberOfStars).map(i=>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
}

const Button = (props) =>{
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <button>=</button>
    </div>
  );
}

const Answer = (props)=>{
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <span>5</span>
      <span>6</span>
    </div>
  );
}

const Numbers = (props)=>{
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number,i)=>
          <span key={i}>{number}</span>
        )}
        <span>1</span>
        <span className="selected">2</span>
        <span className="used">3</span>
      </div>
    </div>
  )
}

Numbers.list = _.range(1, 10);

class Game extends Component{
  render(){
    return (
      <div className="container-fluid">     
        <h3>Play Nice</h3>
        <hr/>
        <div className="row">
          <Stars/>
          <Button/>
          <Answer/>
        </div>
        <br/>
        <Numbers/>
      </div>
    );
  }
}

class App extends Component {
  render(){
    return(
      <div>
        <Game/>       
      </div>
    );    
  };
}

export default App;
