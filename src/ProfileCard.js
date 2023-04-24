import "./ProfileCard.css"
function ProfileCard(props){
    function handleClick(){
        alert(props.name)
    }
    return(
        <div className="profile-card">
            <div className="centered">
            <img className="img" src={props.image} alt=""/>
            <h2 className="designation">{props.designation}</h2>
            <h1 className="name">{props.name}</h1>
            <p className="job-description">{props.jobDescription}</p>
            <button className="see-more" onClick={handleClick}>see more ...</button>
            </div>
        </div>
    )
}
export default ProfileCard;

