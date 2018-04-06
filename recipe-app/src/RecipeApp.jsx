import React from "react";
import "./RecipeApp.css";
import Recipe from "./Recipe";
import NavBar from "./NavBar";
import recipes from "./data";

function RecipeApp() {
  return (
    <div id="wrapper">
      <NavBar />
      <div id="card-grid">
        {recipes.map(recipe => (
          <Recipe
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

export default RecipeApp;
