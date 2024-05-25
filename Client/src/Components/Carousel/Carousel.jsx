import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1);
    };
    const prevSlide = () => {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

  useEffect(() => {
    const interval = setTimeout(nextSlide, 6000); // Change slide every 3 seconds

    return () => {
      clearTimeout(interval); // Clear timeout on component unmount
    };
  }, [slide]); // Re-run the effect whenever the slide state changes

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className = {slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
export default Carousel;