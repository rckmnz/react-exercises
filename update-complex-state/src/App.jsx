import React, { Component } from "react";
import "./App.css";

function selectRandomly (arr) {
  const chosenArr = arr[Math.floor(Math.random() * arr.length)];
  const chosenHobby = chosenArr.hobbies[Math.floor(Math.random() * chosenArr.hobbies.length)]
  return {chosenArr, chosenHobby};
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: "Tim",
          hobbies: ["sailing", "react"],
        }, {
          name: "Matt",
          hobbies: ["math", "d3"],
        }, {
          name: "Colt",
          hobbies: ["css", "hiking"],
        }, {
          name: "Elie",
          hobbies: ["music", "es2015"],
        },
      ],
    };
    setTimeout(() => {
      const selection = selectRandomly(this.state.instructors);
      const instructorsArr = this.state.instructors.map( ins => {
        if (ins === selection.chosenArr) {
         const modHobbies = ins.hobbies.filter(hobby => hobby !== selection.chosenHobby);
         ins.hobbies = modHobbies;
         return ins;
        } else {
          return ins;
        }
      });
      this.setState({
        instructors: instructorsArr
      })
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
