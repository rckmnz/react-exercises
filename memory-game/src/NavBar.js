import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <h1>Memory Game</h1>
        <button><i className="fas fa-sync-alt"></i></button>
      </nav>
    );
  }
}

export default NavBar;
