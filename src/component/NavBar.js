import './navBar.css';
const NavBar = (mode,modeIcon,handleMode) => {
    function handleBtnClick(){
        if(mode==="light"){
            // setMode('dark');
        }else{
            // setMode('light');
        }
    }
    console.log(handleMode);
    return (
        <>
          <div id="navBar">
            <div className="logo">
                <h1>devFinder</h1>
            </div>
            <div className="mode">
                <button onClick={handleBtnClick}>light</button>
                <img src="./image/sun-outlined-svgrepo-com.svg" alt="lightImg" />
            </div>
          </div>
        </>
    )
}


export default NavBar;