import profilePic from './assets/khairulamirin2.png';

function Card() {
    return (
        <div className="card">
            <img src= {profilePic} alt="amirin" /> 
            <h2 className='card-title'>Amirin</h2>
            <p className='card-text'>Software Enginnering Student at Adnexio EDU.</p>
        </div>
    );
}

export default Card;