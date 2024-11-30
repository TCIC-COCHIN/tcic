import React from 'react';
import Slider from 'react-slick';
import './Hero.css';

import image1 from '../../assets/images/ban.jpg';
import image2 from '../../assets/images/banner1.jpg';
import image3 from '../../assets/images/ban3.jpg';
import image4 from '../../assets/images/ban4.jpeg';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hero container">
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={image2} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={image3} alt="Slide 3" className="slider-image" />
          </div>
          <div>
            <img src={image4} alt="Slide 4" className="slider-image" />
          </div>
        </Slider>
      </div>
      <div className="hero-text">
        <h1>This is your Moment to Connect, Innovate and Grow into Greatness</h1>
      </div>
    </div>
  );
};

export default Hero;
