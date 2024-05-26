import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import "./Conveyance.css";

function Conveyance({ info }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === info.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? info.length - 1 : slide - 1);
  };

  return (
    <>
      <h1 className="headingConveyance">Conveyance</h1>

      <div className="conveyanceCard">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {info.map((item, idx) => {
          return (
            <div key={idx} className="ConveyanceDetails">
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />

              <div className={slide === idx ? "slide" : "slide slide-hidden"}>
                <h2 className="ConveyanceTitle">{item.heading}</h2>
                {item.description}

                <h5>{item.list}</h5>
                <h6>{item.listItems}</h6>
              </div>
            </div>
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>
    </>
  );
}

export default Conveyance;
