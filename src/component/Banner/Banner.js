import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  banner1  from '../../images/banner/banner1.jpg';
import  banner2  from '../../images/banner/banner2.jpg';
import  banner3  from '../../images/banner/banner3.jpg';


const Banner = () => {  

 const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };  

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Looking For the Best Wedding Photographer? Hurry Up Book Now!</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>Complete wedding album package with USB</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Secure online gallery for viewing, sharing and downloading.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;