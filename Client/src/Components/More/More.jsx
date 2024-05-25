import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./More.css";

const More = ({ destinations }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === destinations.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? destinations.length - 1 : slide - 1);
  };

  return (
    <div className="more">
      <h1>More Places to visit near Varanasi</h1>

      <div className=" cards-container ">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {destinations.map((destination, index) => (
          <div className="card-more" key={index}>
            <img
              src={destination.image}
              alt={destination.name}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="destination-name">{destination.name}</h2>
              <p className="destination-description">
                {destination.description}
              </p>
              <div className="card-info">
                <span className="cost">Cost: ${destination.cost}</span>
                <span className="distance">
                  Distance: {destination.distance} kms
                </span>
              </div>
            </div>
          </div>
        ))}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>
    </div>
  );
};

export default More;
