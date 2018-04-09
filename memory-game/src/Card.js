import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const card = e.target;
    console.log(card);
    this.props.onClick(card);
   console.log(card.style = {backgroundColor: this.props.color})
  }
  render() {
    return (
      <div className="card" id={this.props.id} onClick={this.handleClick} color={this.props.color} state={this.props.state}/>
    );
  }
}

export default Card;
