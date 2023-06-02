import Form from "./Components/Form";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import {useState} from "react";
import './App.css';

function App() {

  const [searchItem,updateSearchItem]= useState()
  


  return (
    <>
    <div className='container'>
    <Header></Header>
    <Form></Form>
    <SearchBar search ={updateSearchItem}></SearchBar>
    </div>
    </>
  );
}

export default App;
