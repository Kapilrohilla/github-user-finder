import './searchBar.css';
import { useState } from 'react';

export default function SearchBar ({handleBtnClick}) {
    const [userName,setUserName] = useState('');
    return (
        <form onSubmit={(e)=>e.preventDefault()} id="searchContain">
            <div className="searchIconNInput">
                <label htmlFor="input"><img src="./image/search-alt-svgrepo-com.svg" alt="searchIcon" /></label>
                <input id='input' type="search" placeholder='Search Github username...' onChange={(e)=>setUserName(e.target.value.trim())}/>
            </div>
            <div className="searchBtn">
                <button type="submit" onClick={()=>handleBtnClick(userName)}>Search</button>

            </div>
        </form>
    )
}