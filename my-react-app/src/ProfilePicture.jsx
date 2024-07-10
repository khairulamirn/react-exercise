

function ProfilePicture() {

    const imgUrl = './src/assets/logo-khairul.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img onClick={(e) => handleClick(e)} src={imgUrl} alt="khairulamirin" />
    );
}

export default ProfilePicture