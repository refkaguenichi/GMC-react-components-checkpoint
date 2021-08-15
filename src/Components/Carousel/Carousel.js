import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

const CarouselC = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/assets/Age-at-onset.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="assets/ages_retraite.png"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/occupation.png"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselC;
