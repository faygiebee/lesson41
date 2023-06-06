import Form from "./Components/Form";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import RecipeCard from "./Components/RecipeCard";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchItem, updateSearchItem] = useState();
 // const [recipe, updateRecipe] = useState();
  const [recipes, UpdateRecipes] = useState([]);

  function AddNewRecipe(newRecipe) {
    UpdateRecipes(function (prevArr) {
      const NewArr = [...prevArr];
    console.log("NewArr0 " + NewArr.forEach(function(recipe){
      console.log(recipe.Key + recipe.ID + recipe.RecipeName + recipe.Ingredients +recipe.RecipeMethod);
    }));
      return [...NewArr, newRecipe];
    });
  }

  return (
    <>
      <div className="container">
        <Header></Header>
        <Form addrecipe={AddNewRecipe}></Form>
        <SearchBar search={updateSearchItem}></SearchBar>
      </div>
    </>
  );
}

export default App;
