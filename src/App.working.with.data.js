import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
      {props.cards.map(card =><Card key={card.id} {...card} />)}      
    </div>
  )
}

class Form extends Component {
  state = { userName: ''};
  handleSubmit = (event)=>{    
    event.preventDefault();    
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp=>{
        this.props.onSubmit(resp.data);
        this.setState({userName: ''})
      });
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          value={this.state.userName}
          onChange={(event) => this.setState({ userName:event.target.value })}
          placeholder="Github Username" required/>
        <button type="submit">Add card</button>
      </form>
    );
  };
}

class App extends Component {
  addNewCard = (cardInfo)=>{
    this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo)
    }));
  }

  state = {
    cards: []    
  };

  render(){
    return(
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );    
  };
}

export default App;
