import './searchBar.css';
import { useState } from 'react';

export default function SearchBar ({handleBtnClick,modeStyle}) {
    const [userName,setUserName] = useState('');
    return (
        <form onSubmit={(e)=>e.preventDefault()} id="searchContain" style={modeStyle.searchContain}>
            <div className="searchIconNInput">
                <label htmlFor="input"><img src="./image/search-alt-svgrepo-com.svg" alt="searchIcon" /></label>
                <input style={modeStyle.searchContain} id='input' type="search" placeholder='Search Github username...' onChange={(e)=>setUserName(e.target.value.trim())}/>
            </div>
            <div className="searchBtn">
                <button style={modeStyle.searchBtn} type="submit" onClick={()=>handleBtnClick(userName)}>Search</button>

            </div>
        </form>
    )
}