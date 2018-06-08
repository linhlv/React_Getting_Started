import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const Stars = (props)=>{
  let stars = [];

  return (
    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      {_.range(props.numberOfStars).map(i=>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
}

const Button = (props) =>{
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <button className="btn" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  );
}

const Answer = (props)=>{
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      {props.selectedNumbers.map((number, i)=>
        <span key={i} onClick={()=> props.unselectNumber(number) }>{number}</span>
      )}
    </div>
  );
}

const Numbers = (props)=>{
  const numberClassName = (number)=>{
    if(props.selectedNumbers.indexOf(number)>=0){
      return 'selected';
    }
  }
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number,i)=>
          <span 
            key={i} 
            className={numberClassName(number)}
            onClick={()=> props.selectNumber(number)}>
            {number}</span>
        )}
      </div>
    </div>
  )
}

Numbers.list = _.range(1, 10);

class Game extends Component{
  state = {
    selectedNumbers: [],
    radomNumberOfStars: 1 + Math.floor(Math.random() * 9)
  };

  selectNumber = (clickedNumber)=>{
    if(this.state.selectedNumbers.indexOf(clickedNumber)>=0){ return; }
    this.setState(prevState=>({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };

  unselectNumber = (clickedNumber)=>{
    this.setState(prevState=>({
      selectedNumbers: prevState.selectedNumbers.filter(number=>number!==clickedNumber)
    }));
  }

  render(){
    const {selectedNumbers, radomNumberOfStars} = this.state;

    return (
      <div className="container-fluid">     
        <h3>Play Nice</h3>
        <hr/>
        <div className="row">
          <Stars numberOfStars={radomNumberOfStars}/>
          <Button selectedNumbers={selectedNumbers}/>
          <Answer selectedNumbers={selectedNumbers}
                  unselectNumber={this.unselectNumber}/>
        </div>
        <br/>
        <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber}/>
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
