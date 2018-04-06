import React, { Component } from "react";
import "./RecipeApp.css";
import Recipe from "./Recipe";
import NavBar from "./NavBar";
import recipes from "./data";

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes, nextRecipeId: 4 };
  }
  render() {
    return (
      <div id="wrapper">
        <NavBar />
        <div id="card-grid">
          {this.state.recipes.map(recipe => (
            <Recipe
              id={recipe.id}
              title={recipe.title}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              img={recipe.img}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default RecipeApp;
