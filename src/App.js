import Form from "./Components/Form";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import RecipeCard from "./Components/RecipeCard";
import RightSide from "./Components/RightSide";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchItem, updateSearchItem] = useState();
  // const [recipe, updateRecipe] = useState();
  const [recipes, UpdateRecipes] = useState([]);

  function AddNewRecipe(newRecipe) {
    UpdateRecipes(function (prevArr) {
      const NewArr = [...prevArr];
      NewArr.push(newRecipe);
      return NewArr;
    });
  }

  return (
    <>
      <div className="container">
        <Header></Header>
        <Form addrecipe={AddNewRecipe}></Form>
        <RightSide recipes ={recipes} search={updateSearchItem}></RightSide>
      </div>
    </>
  );
}

export default App;
