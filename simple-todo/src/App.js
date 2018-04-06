import React, { Component } from "react";
import Todo from "./Todo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", data: [] };
  }
  render() {
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.setState(prevState => {
              prevState.data.push(prevState.inputText);
              prevState.inputText = "";
              return prevState;
            });
          }}
        >
          <input
            type="text"
            name="todo"
            placeholder="What needs to be done."
            value={this.state.inputText}
            onChange={e => {
              this.setState({ inputText: e.target.value });
            }}
          />
          <input type="submit" name="add" value="Add Task" />
        </form>
        <div className="Todos">
          <ul>
            <Todo data={this.state.data} />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
