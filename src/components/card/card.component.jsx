
import './card.styles.css'

const Card = ({ character }) => {
    const { name, race, realm, id } = character;

    return (
        <div className="card-container" key={id}>

            <h2>{name}</h2>
            <p>{race}</p>
            <p>{realm}</p>
        </div>
    );
}

export default Card