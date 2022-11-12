/** @format */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/download (3).jpg";
import img2 from "../assets/images (2).jpg";
import img3 from "../assets/images (221).jpg";

const Slider = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
