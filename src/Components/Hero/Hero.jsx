import React, { useState } from 'react';
import Slider from 'react-slick';
import './Hero.css';

import image1 from '../../assets/images/wp.jpg';
import image2 from '../../assets/images/banner1.jpg';
import image3 from '../../assets/images/kids4.jpeg';
import image4 from '../../assets/images/kids.jpg';
import image5 from '../../assets/images/fashion.jpg';
import image6 from '../../assets/images/fashion4.jpg';
import updateImg1 from '../../assets/images/main1.png';
import updateImg2 from '../../assets/images/wp.jpg';
import updateImg3 from '../../assets/images/ban3.jpg';
import updateImg4 from '../../assets/images/fashion2.jpg';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

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
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <div className="hero-container">
      {/* Slider */}
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={image1} alt="Slide 1" className="slider-image" />
            <div className="image-tag">Skill Development Programmes</div>
          </div>
          <div className="slider-item">
            <img src={image2} alt="Slide 2" className="slider-image" />
            <div className="image-tag">Hands on Training/Internship/Familiarization</div>
          </div>
          <div className="slider-item">
            <img src={image3} alt="Slide 3" className="slider-image" />
            <div className="image-tag">Kids After School Care</div>
          </div>
          <div className="slider-item">
            <img src={image4} alt="Slide 4" className="slider-image" />
            <div className="image-tag">Kids After School Care</div>
          </div>
          <div className="slider-item">
            <img src={image5} alt="Slide 5" className="slider-image" />
            <div className="image-tag">International Grooming and Modelling</div>
          </div>
          <div className="slider-item">
            <img src={image6} alt="Slide 6" className="slider-image" />
            <div className="image-tag">International Grooming and Modelling</div>
          </div>
        </Slider>
      </div>

      {/* Hero Text */}
      <div className="hero-text">
        <h1>This is your Moment to Connect, Innovate and Grow into Greatness</h1>
        <button className="update-btn" onClick={() => setShowModal(true)}>View Updates</button>
      </div>

      {/* Updates Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Latest Updates</h2>
            <ul className="updates-list">
              <li>
                <img src={updateImg1} alt="Update 1" className="update-image" />
                Kids After School Care!
              </li>
              <li>
                <img src={updateImg2} alt="Update 2" className="update-image" />
                Hands-on Training/Internship/Familiarization!
              </li>
              <li>
                <img src={updateImg3} alt="Update 3" className="update-image" />
                Self Branding and International Career Grooming for Young Graduates!
              </li>
              <li>
                <img src={updateImg4} alt="Update 4" className="update-image" />
                International Grooming and Modelling!
              </li>
            </ul>
            <button className="close-btn" onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
