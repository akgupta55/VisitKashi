import React from 'react'
import "./DestinationCard.css"
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";




function DestinationCard({src,title,rate,people,type,location,price}) {
    return (
      <div className="TopdestinationCard">
        <div className="destinationImage">
          <img src={src} alt="" className="topimage" />
        </div>
        <div className="destinationTitle">
          <div> {title}</div>
        </div>
        <div className="rate">
          <p>{rate}</p>
          <p>
            <FaStar className="star" />
          </p>

          <p>{people}</p>
        </div>
        <div className="destinationType">
          <div>{type}</div>
        </div>
        <div className='destinationLocation'>
          <p className='locationIcon'>
            <FaLocationDot />
          </p>

          <div className='destinationLocationName'>{location}</div>
        </div>

        <div>
          <div className='destinationPrice'>{price}</div>
        </div>
      </div>
    );
}

export default DestinationCard