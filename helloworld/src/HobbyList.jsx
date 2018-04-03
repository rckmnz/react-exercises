import React, { Component } from "react";

class HobbyList extends Component {
  render() {
    const hobbies = ["Sleeping", "Eating", "Cuddling"];
    const style = { fontSize: "1.5em" };
    return (
      <ul>
        {hobbies.map((h, i) => <li key={i} style={style}>{h}</li>)}
      </ul>
    );
  }
}

export default HobbyList;
