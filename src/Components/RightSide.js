import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";


function RightSide(props){
    return(<>
    
    <SearchBar search={props.search} ></SearchBar>
    <RecipeCard recipes ={props.recipes}></RecipeCard>
    
    </>)
}
export default RightSide;