import React, { Component } from "react";
import "./RecipeInput.css";

class RecipeInput extends Component {
  static defaultProps = {
    onClose() {}
  };
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      instructions: [],
      ingredients: [],
      img: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {
      title, instructions, ingredients, img,
    } = this.state;
    const { onClose } = this.props;

    const ingInputs = ingredients.map((ins, idx) => {
      <div className="recipe-form-ins recipe-form-line" key={`ingredient-${idx}`}>
        <label
        htmlFor='recipe-ingredients-input'
        style={{marginTop: '5px'}}
        >
          <input
            type="text"
            name={`ingredient-${idx}`}
            value={ing}
            size={100}
            placeholder="Ingredient"
            onChange={() => {}}
          />
        </label>
      </div>;
    });
    const insInputs = instructions.map((ing, idx) => {
      <div className="recipe-form-ins recipe-form-line" key={`istructions-${idx}`}>
        <label
        htmlFor='recipe-instructions-input'
        style={{marginTop: '5px'}}
        >
          <input
            type="text"
            name={`instructions-${idx}`}
            value={ins}
            size={100}
            placeholder="Instructions"
            onChange={() => {}}
          />
        </label>
      </div>;
    });
    return (
      <div className="recipe-form-container">
        <form className="recipe-form" onSubmit={this.handleSubmit}>
          <button type="button" className="close-button" onClick={onClose}>
            X
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-title-input">Title</label>
            <input
              id="recipe-title-input"
              key="title"
              name="title"
              type="text"
              value={title}
              size={42}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeInput;
