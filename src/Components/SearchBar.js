import './SearchBar.css';
import RecipeCard from './RecipeCard';
function SearchBar(props){


  function ChangeHandler (e){
  props.search(e.target.value);
  console.log(e.target.value);
  }

    return(
        <div class="right-column">
	    	<div id="search-section">
          <h3>Recipes List</h3>
          <label forHtml="search-box">Search:</label>
          <input onChange={ChangeHandler}type="text" id="search-box"/>
          
        </div>
        
      </div>
    
    )
}

export default SearchBar;