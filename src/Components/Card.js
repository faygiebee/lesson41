import './Card.css';

function Card(props){

    
    console.log("recipeToPrint"+ props.recipeToPrint)
    return(<div className = "recipe">

        <h3>props.recipeToPrint.RecipeName</h3>
        <h3>Ingredients</h3>
        <ul>
           <li>props.recipeToPrint.Ingredients</li> 
        </ul>
        <h3>Method</h3>
        <p>props.recipeToPrint.Method</p>

        <button className="delete-button">Remove</button>
        </div>);
}
export default Card;