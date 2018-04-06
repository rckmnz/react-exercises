import React from "react";
import propTypes from "prop-types";
import "./Recipe.css";

function Recipe(props) {
  const { title, img } = props;
  const ingredients = props.ingredients.map(ing => <li key={props.id}>{ing}</li>);
  const instructions = props.instructions.map(ins => <li key={props.id}>{ins}</li>);

  return (
    <div className="recipe-card">
      <div className="recipe-card-img">
        <img src={img} alt={title} />
      </div>
      <div className="recipe-card-content">
        <h3 className="recipe-title">{title}</h3>
        <h4>Ingredients: </h4>
        <ul>{ingredients}</ul>
        <h4>Instructions: </h4>
        <ol>{instructions}</ol>
      </div>
    </div>
  );
}

Recipe.defaultProps = {
  title: "Spaghetti",
  ingredients: ["flour", "water"],
  instructions: "Mix ingredients",
  img: "spaghetti.jpg",
};

Recipe.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string,
  img: propTypes.string,
  ingredients: propTypes.arrayOf(propTypes.string),
  instructions: propTypes.arrayOf(propTypes.string),
};

export default Recipe;
