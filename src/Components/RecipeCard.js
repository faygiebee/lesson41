import'./RecipeCard.css';
import Card from './Card';


function RecipeCard(props){


    return (
        <>
        <div id="recipe-list"> 
        {
        props.recipesArr.map(function(recipe){
        <Card>recipe</Card>
        })
        }
        </div>

		<div id="no-recipes">You have no recipes.</div>
        </>
    )
}
export default RecipeCard;