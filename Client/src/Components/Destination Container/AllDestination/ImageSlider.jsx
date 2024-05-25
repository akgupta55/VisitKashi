
import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e) => {
    e.preventDefault(); // Prevent the default behavior (navigation)
    e.stopPropagation(); // Stop event propagation to prevent link navigation
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    e.preventDefault(); // Prevent the default behavior (navigation)
    e.stopPropagation(); // Stop event propagation to prevent link navigation
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="slider-inner">
        <button onClick={goToPrevious} className="left-arrow">
          ❮
        </button>
        <div className="slider-images">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="slider-image"
          />
        </div>
        <button onClick={goToNext} className="right-arrow">
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
