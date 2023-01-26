const Card = ({ character }) => {
    const { name, race, id } = character;

    return (
        <div className="card-container" key={id}>

            <h2>{name}</h2>
            <p>{race}</p>
        </div>
    );
}

export default Card