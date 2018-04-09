import React, { Component } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import cardData from "./cardMetaData";
import "./App.css";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cardData: shuffle(cardData) };
    this.revealCard = this.revealCard.bind(this);
  }

  revealCard(card) {
    this.setState(prevState => {
      prevState.cardData.map(prevCard => {
        if (card.id === prevCard.id) {
          prevCard.cardState = 1;
          return prevCard;
        } else {
          return prevCard;
        }
      });
    });
  }

  render() {
    const cards = this.state.cardData.map(card => {
      return (
        <Card
          key={card.id}
          id={card.id}
          color={card.backgroundColor}
          state={card.cardState}
          onClick={this.revealCard}
        />
      );
    });

    return (
      <div className="App">
        <NavBar />
        <main>{cards}</main>
      </div>
    );
  }
}

export default App;
