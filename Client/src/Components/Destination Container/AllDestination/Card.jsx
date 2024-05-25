import "./Card.css"
import ImageSlider from "./ImageSlider";
import {Link} from "react-router-dom"
function Card({title,images,link}) {
    
    return (
      <>
        <div className="destinationCard">
          <Link to={link}>
            <div className="image">
              <ImageSlider images={images}></ImageSlider>
            </div>
            <div className="cardTitle">
              <div>{title}</div>
            </div>
          </Link>
        </div>
      </>
    ); 
}
export default Card;