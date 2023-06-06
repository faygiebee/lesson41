import "./RecipeCard.css";
import Card from "./Card.js";

function RecipeCard(props) {
  const Arr = props.recipes;
  console.log("props.recipes" + Arr);

  return (
    <>
      <div id="recipe-list">
        {Arr.map(function (recipe) {
          console.log("recipeCard " + recipe);
          <Card recipeToPrint={recipe}> </Card>;
        })}
      </div>

      {Arr.length == 0 && <div id="no-recipes">You have no recipes.</div>}
    </>
  );
}
export default RecipeCard;
