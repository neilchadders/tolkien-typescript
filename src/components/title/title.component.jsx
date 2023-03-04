import "./title.style.css"
import background from "./background.jpg"



const Title = () => {

    return (
        <div className="full-title">
            <img className="back-img" src={background} />
            <h1 className="title"  > Tolkein Character <br></br>Finder</h1>



        </div>
    )
}
export default Title