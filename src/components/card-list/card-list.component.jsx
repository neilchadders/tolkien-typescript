import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = ({ characters }) => (
    <div className="card-list">
        {characters.map((character) => {
            return <Card character={character} />


        })}
    </div>
);


export default CardList