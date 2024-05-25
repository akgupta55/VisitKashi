import React from "react";
import "./Card.css";
import boatRide from '../../assets/boatRide.jpg'

const Card = () => {
  return (
        <div className="car-d">
          <div className="image">
            <img src={boatRide} />
            <br />
            <br />
          </div>
          <div className="title">
            <h2> Morning Boat Ride</h2>
          </div>
          <div className="des">
            <button>Read more...</button>
          </div>
        </div>
    
  );
};

export default Card;
