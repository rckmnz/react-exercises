import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div id="logo">
        <h1>Recipe App</h1>
      </div>
      <ul id="navs">
        <li><a href="#">New Recipe</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
