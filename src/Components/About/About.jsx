import React, { useEffect, useRef } from 'react';
import './About.css';
import about_img from '../../assets/images/vid.png';
import play_icon from '../../assets/images/play-icon.png';

const About = ({ setPlayState }) => {
  const aboutRightRef = useRef(null); // Create a reference for the text div

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRightRef.current) {
        const rect = aboutRightRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the element is visible in the viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          aboutRightRef.current.classList.add('animate'); // Add animation class
        } else {
          aboutRightRef.current.classList.remove('animate'); // Remove animation class (optional)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right" ref={aboutRightRef}>
        <h3>ABOUT TCIC</h3>
        <h2>This is your Moment to Connect, Innovate and Grow into Greatness</h2>
        <p>
        At TCIC, our mission is to empower professionals with industry-relevant skills and a global perspective, preparing them to excel in their careers and drive innovation worldwide. Our vision is to be a globally recognized center of excellence, fostering a new generation of leaders who inspire growth and lead with impact. Through cutting-edge training and practical experience, we equip our students to succeed in an ever-evolving world. Join us and turn your ambitions into achievements!
        </p>
        
      
      </div>
    </div>
  );
};

export default About;
