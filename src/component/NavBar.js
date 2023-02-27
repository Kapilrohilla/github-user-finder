import './navBar.css';
import { useState } from 'react';
const NavBar = ({mode,handleMode,modeStyle}) => {
    // let sunOrMoon;
    const [sunOrMoon,setSunOrMoon] = useState('sun.svg');
    function handleBtnClick(){
        if(mode==="light"){
            // sunOrMoon = 'moon.svg';
            handleMode('dark');
            setSunOrMoon('moon.svg')

        }else{
            // sunOrMoon = 'sun.svg';
            handleMode('light');
            setSunOrMoon('sun.svg');
        }
    }
    return (
        <>
          <div id="navBar" style={modeStyle}>
            <div className="logo">
                <h1>devFinder</h1>
            </div>
            <div className="mode">
                <button id="modeBtn" onClick={handleBtnClick}>{mode}</button>
                <label htmlFor="modeBtn">
                    <img src={`./image/${sunOrMoon}`} alt="" />
                </label>
            </div>
          </div>
        </>
    )
}


export default NavBar;