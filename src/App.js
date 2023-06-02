import Form from "./Components/Form";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchItem, updateSearchItem] = useState();
  const [recipe, updateRecipe] = useState({});
  const [recipes, UpdateRecipes] = useState([]);

  function AddNewRecipe(newRecipe) {
    UpdateRecipes(function (prevArr) {
      const NewArr = [...prevArr];
      console.log("NewArr " + NewArr.map(function(recipe){console.log(recipe)}));
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
