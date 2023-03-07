
import './card.styles.css'


const Card = ({ character }) => {
    const { name, race, realm, link, pic } = character;

    return (
        <div className="card-container">

            <img className="pic" src={pic} />
            <h3 className="name">{name}</h3>
            <p className="race">{race}</p>
            <p className='realm'>{realm}</p>
            <a className="link" href={link} target={"_blank"}>Wiki</a>
        </div>
    );
}

export default Card