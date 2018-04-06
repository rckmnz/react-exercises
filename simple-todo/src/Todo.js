import React from "react";
import "./App.css";

function Todo(props) {
  const todoList = props.data.map((todo,idx) => <li key={idx}>{todo}</li>);
  return todoList ;
}

export default Todo;
