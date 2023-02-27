import './App.css';
import { useState } from 'react';
import NavBar from './component/NavBar'
import SearchBar from './component/SearchBar';
import Card from './component/Card';
function App() {
  const [mode,setMode] = useState('light');
  const forFetchData = async (userName) => {
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let r = await response.json();  
    console.log(r);
    return r;
  }
  let modeLightStyle = {
    backgroundColor: '#fff',
    color : 'black',
    'searchContain' : {
      'backgroundColor' : '#e5e7eb',
      'color' : '#888888'
    },
    searchBtn : {
      'backgroundColor': '#fff',
      color: '#0079fe'
    },
    'card' : {
      backgroundColor: '#e5e7eb',
      color: '#888888',
      'userStats': {
        backgroundColor : '#fff',
        color: 'black'
      }
    }
  }
  const modeDarkStyle = {
    backgroundColor: '#141c2f',
    color: 'white',
    'searchContain' : {
      'backgroundColor' : '#1f2a4a',
      color: '#989dab'
    },
    searchBtn : {
      backgroundColor : 'transparent',
      color: 'currentColor'
    },
    card : {
      backgroundColor : '#1f2a48',
      color: '#fff',
      userStats : {
        backgroundColor : '#141c2f',
        color : 'white',
      }
    }
  }
  let defaultStyle = (mode==='light')?modeDarkStyle:modeLightStyle
  return (
   <>
      <div className="container" style={defaultStyle}>
        <NavBar  mode={mode} handleMode={setMode} modeStyle={defaultStyle}/>
        <SearchBar handleBtnClick={forFetchData} modeStyle={defaultStyle}/>
        <Card modeStyle={defaultStyle}/>
      </div>
   </>);
}

export default App;