import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (props)=>{
  return (
    <div className="info">
      <img src={props.avatar_url}/>
      <div>
        <div>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props)=>{
  return (
    <div>
      {props.cards.map(card =><Card key={card.toString() + new Date().getMilliseconds().toString()} {...card} />)}      
    </div>
  )
}

class Form extends Component {
  handleSubmit = (event)=>{    
    event.preventDefault();
    console.log(this.userNameInput.value)
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          ref={(input) => this.userNameInput = input}
          placeholder="Github Username" required/>
        <button type="submit">Add card</button>
      </form>
    );
  };
}

class App extends Component {
  state = {
    cards: [
      {
        name: 'Paul O\'Shannesy',
        avatar_url : 'https://avatars.githubusercontent.com/u/8445?v=3',
        company: 'Facebook'
      },
      {
        name: 'Ben Alpert',
        avatar_url : 'https://avatars.githubusercontent.com/u/6820?v=3',
        company: 'Facebook'
      }
    ]    
  };

  render(){
    return(
      <div>
        <Form/>
        <CardList cards={this.state.cards}/>
      </div>
    );    
  };
}

export default App;
