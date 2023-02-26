import './App.css';
// import { useState } from 'react';
import NavBar from './component/NavBar'
import SearchBar from './component/SearchBar';
import Card from './component/Card';
function App() {
    const forFetchData = async (userName) => {
      let response = await fetch(`https://api.github.com/users/${userName}`);
      let r = await response.json();  
      console.log(r);
      return r;
    }
    // console.log(handleBtnClick);
  return (
   <>
      <div className="container">
        <NavBar />
        <SearchBar handleBtnClick={forFetchData} />
        <Card />
      </div>
   </>);
}

export default App;