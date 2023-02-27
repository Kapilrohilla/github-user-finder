import './card.css';

export default function Card ({modeStyle,userData}){
    if(userData.hasOwnProperty('message')){
        return (
            <h2>user not exist</h2>
        )
    }
    let accountCreatedAt;
    if(userData !== 'noInitialData'){
        let date = new Date();
        let firsthyphen = userData.created_at.indexOf('-');
        let year = userData.created_at.slice(0,firsthyphen);
        let secondhyphen = userData.created_at.indexOf('-',userData.created_at.indexOf('-')+1);
        let month = userData.created_at.slice(firsthyphen+1,secondhyphen);
        date.setMonth(month - 1);
        month = date.toLocaleString('en-US',{month: 'long'}) ;
        
        let day = userData.created_at.slice(secondhyphen+1,userData.created_at.indexOf('T'));
        accountCreatedAt = `${day} ${month} ${year}`;
    }
    return (
        <>
        <div className='cardContainer' style={modeStyle.card}>
            <div className="userImage">
                <img src={(userData.avatar_url)?userData.avatar_url:'./image/user.svg'} alt="userImage" />
            </div>
            <div className="userData">
                <div className="row1">
                    <h1>{(userData.name)?userData.name:'name..'}</h1>
                    <p className="joinedAt">{(accountCreatedAt)?accountCreatedAt:'Github joining date..'}</p>
                </div>
                <div className="userId">
                    <p className="userName">@{(userData.login)?userData.login:'username'}</p>
                </div>
                <div id="userBio">
                    <p>{(userData.bio===null)?'bio not available ...':userData.bio}</p>
                </div>
            <div id="userStats" style={modeStyle.card.userStats}>
                    <ul>
                        <li>
                            <h3>Repos</h3>
                            <p>{(!userData.public_repos)?'0':userData.public_repos}</p>
                        </li>
                        <li>
                            <h3>Followers</h3>
                            <p>{(userData.followers)?userData.followers:'0'}</p>
                        </li>
                        <li>
                            <h3>Following</h3>
                            <p>{(userData.following)?userData.following:'0'}</p>
                        </li>
                    </ul>
                </div>
                <div id="impDetail">
                    <ul>
                        <li>
                            <span><img src="./image/location-med-2-svgrepo-com.svg" alt="location" /></span>
                            <span><p>{(userData.location)?userData.location:'not available'}</p></span></li>
                        <li>
                            <span><img src="./image/twitter-svgrepo-com.svg" alt="twitter" /></span>
                            <span><p>{(!userData.twitter_username)?'not available':userData.twitter_username}</p></span></li>
                        <li id="blogLink">
                            <span><img src="./image/link-svgrepo-com.svg" alt="" /></span>
                            <span><p><a href={userData.blog}>{(!userData.blog)?'not available':userData.blog}</a></p></span></li>
                        <li>
                            <span><img src="./image/company-svgrepo-com.svg" alt="" /></span>
                            <span><p>{(userData.company)?userData.company:'none'}</p></span></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}