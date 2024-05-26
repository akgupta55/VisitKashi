// import explore from "../../assets/explore"
import "./Ways.css";

import { Link } from "react-router-dom";

const Ways = ({ ways }) => {
  return (
    <>
      <div className="ways-to-visit">
        <h1>See Kashi in a Variety of Ways</h1>
        <div className="wrapper">
          {ways.map((item) => {
            return (
              <div className="waysCard" key={item.id}>
                <img src={item.img}></img>
                <div className="info">
                  <h2>{item.heading}</h2>
                </div>
                <div>
                  <Link to={item.link}>
                    <button className="waysbtn">Explore</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ways;
