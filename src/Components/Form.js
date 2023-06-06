import "./Form.css";
import { useState, useRef } from "react";


function Form(props) {
  const recipeName = useRef();

  const ingredients = useRef();

  const recipeMethod = useRef();

  let Key = useRef(0);

  const [NewRecipe, UpdateNewRecipe] = useState({});

  function RecipeName(e) {
    recipeName.current = e.target.value;
  }

  function RecipeIng(e) {
    ingredients.current = e.target.value;
  }

  function RecipeMethod(e) {
    recipeMethod.current = e.target.value;
  }
  
  function clickHandler(e) {
    e.preventDefault();
   Key.current++;
    //console.log("key" + typeof(Key.current));
    UpdateNewRecipe( "Key: "+ Key.current + " ID: "+ recipeName.current + " RecipeName: "+ recipeName.current+ " Ingredients: "+ ingredients.current + " Method: "+ recipeMethod.current);
    
    props.addrecipe(NewRecipe);
    console.log("New Recipe "+NewRecipe);
  }

 
  return (
    <div class="left-column">
      <h3>Add Recipe</h3>
      <form >
        <label htmlFor="recipe-name">Name:</label>
        <input
          onChange={RecipeName}
          type="text"
          id="recipe-name"
          required
        ></input>
        <br />
        <label htmlFor="recipe-ingredients">Ingredients:</label>
        <textarea
          onChange={RecipeIng}
          id="recipe-ingredients"
          rows="5"
          required
        ></textarea>
        <br />
        <label htmlFor="recipe-method">Method:</label>
        <textarea
          onChange={RecipeMethod}
          id="recipe-method"
          rows="5"
          required
        ></textarea>
        <br />
        <button onClick={clickHandler} type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default Form;
