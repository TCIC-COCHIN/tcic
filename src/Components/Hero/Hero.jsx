import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Hero.css';
import { useNavigate } from 'react-router-dom';

import image1 from '../../assets/images/wp.jpg';
import image2 from '../../assets/images/banner1.jpg';
import image3 from '../../assets/images/kids4.jpeg';
import image4 from '../../assets/images/kids.jpg';
import image5 from '../../assets/images/fashion.jpg';
import image6 from '../../assets/images/fashion4.jpg';
import image7 from '../../assets/images/dance.jpg';
import Greencall from '../../assets/images/Greencall.png';
import whtsapp from '../../assets/images/whtsp.png';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';

const Hero = () => {
  const [showModal, setShowModal] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const modalImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      offset: 50, // Offset before triggering animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Rotate modal images every 20 seconds
  useEffect(() => {
    if (showModal) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
      }, 10000); // 20 seconds

      return () => clearInterval(interval); // Cleanup interval
    }
  }, [showModal, modalImages]);

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
          <div className="slider-item">
            <img src={image7} alt="Slide 6" className="slider-image" />
            <div className="image-tag">Kids Educational Programs</div>
          </div>
        </Slider>
      </div>

      <div className="hero-text">
        <h1>This is your Moment to Connect, Innovate and Grow into Greatness</h1>
        <button className="update-btn" onClick={() => setShowModal(true)}>View Updates</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={modalImages[currentImageIndex]}
              alt="Slideshow"
              className="modal-image"
            />

            <a
              href="https://wa.me/919633760759"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-icon"
              data-aos="jump"
            >
              <img src={whtsapp} alt="WhatsApp" />
            </a>
            <a href="tel:919633760759" className="call-icon" data-aos="jump">
              <img src={Greencall} alt="Call" />
            </a>

            <div className="modal-footer">
              <button className="close-btn" onClick={handleModalClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
