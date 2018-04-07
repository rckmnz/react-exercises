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
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shuffle(cardData) };
  }
  render() {
    const Cardstate = {
      HIDING: 0,
      SHOWING: 1,
      MATCHING: 2
    };
    return (
      <div className="App">
        <NavBar />
        <Card />
      </div>
    );
  }
}

export default App;
