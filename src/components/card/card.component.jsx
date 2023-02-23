
import './card.styles.scss'

const Card = ({ character }) => {
    const { name, race, realm, link } = character;

    return (
        <div className="card-container">
            <h2>{name}</h2>
            <p>{race}</p>
            <p>{realm}</p>
            <a href={link}>Wiki</a>
        </div>
    );
}

export default Card