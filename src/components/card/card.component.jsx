
import './card.styles.css'

const Card = ({ character }) => {
    const { name, race, realm, link } = character;

    return (
        <div className="card-container">

            <img className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDx5lc0ntHOXeFWBFH1iDTHmBaMnZXgQeizw&usqp=CAU" />
            <h3 className="name">{name}</h3>
            <p className="race">{race}</p>
            <p className='realm'>{realm}</p>
            <a className="link" href={link}>Wiki</a>
        </div>
    );
}

export default Card