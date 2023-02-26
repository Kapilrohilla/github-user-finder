import './card.css';

export default function Card (){
    let name = 'kapil rohilla';
    let joinedAt = "2022-01-04T14:34:03Z";
    let userName = 'kapilrohilla';
    let url = 'https://avatars.githubusercontent.com/u/110235703?v=4';
    let noOfRepso = 9;
    let noOfFollower = 1000;
    let location = 'gutgaon';
    let company = 'github';
    let link = 'notFound';
    let twitter = '@twitter';
    return (
        <>
        <div className='cardContainer'>
            <div className="userImage">
                <img src={url} alt="userImage" />
            </div>
            <div className="userData">
                <div className="row1">
                    <h1>{name}</h1>
                    <p className="joinedAt">{joinedAt}</p>
                </div>
                <div className="userId">
                    <p className="userName">@{userName}</p>
                </div>
                <div id="userBio">
                    <p>Bio data......</p>
                </div>
                <div id="userStats">
                    <ul>
                        <li>
                            <h3>Repos</h3>
                            <p>{noOfRepso}</p>
                        </li>
                        <li>
                            <h3>Followers</h3>
                            <p>{noOfFollower}</p>
                        </li>
                        <li>
                            <h3>Following</h3>
                            <p>10</p>
                        </li>
                    </ul>
                </div>
                <div id="impDetail">
                    <ul>
                        <li>
                            <span><img src="./image/location-med-2-svgrepo-com.svg" alt="location" /></span>
                            <span><p>{location}</p></span></li>
                        <li>
                            <span><img src="./image/twitter-svgrepo-com.svg" alt="twitter" /></span>
                            <span><p>{twitter}</p></span></li>
                        <li>
                            <span><img src="./image/link-svgrepo-com.svg" alt="" /></span>
                            <span><p>{link}</p></span></li>
                        <li>
                            <span><img src="./image/company-svgrepo-com.svg" alt="" /></span>
                            <span><p>{company}</p></span></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}