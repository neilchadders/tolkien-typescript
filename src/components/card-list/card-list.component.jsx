import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = ({ characters }) => (
    <div className="card-list">
        {characters.map((character) => {
            return <Card character={character} key={character.id} />


        })}
    </div>
);


export default CardList