
import './card.styles.css'

const Card = ({ character }) => {
    const { id, name, race, realm } = character;

    return (
        <div key={id} className="card-container">
            <h2>{name}</h2>
            <p>{race}</p>
            <p>{realm}</p>
        </div>
    );
}

export default Card