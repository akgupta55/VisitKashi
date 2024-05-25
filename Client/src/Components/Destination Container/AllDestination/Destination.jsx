import "./Destination.css"
import Card from "./Card.jsx"
function Destination({places}) {
    return (
      <><div className="destination">
        {places.map((item) => {
          return <Card key={item.id} title={item.title} images={item.src}
            link={item.link}
          ></Card>;
          
        })}
      
        </div>
      </>
    );
}
export default Destination