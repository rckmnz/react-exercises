import React from 'react'
import "./App.css";

function Box(props) {
  
  return <div className="box" style={{backgroundColor: props.color}} />;
}

export default Box;
