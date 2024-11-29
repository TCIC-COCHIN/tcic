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
        
        <p>At TCIC, we are committed to transforming your dreams into a successful reality.No matter your field of study, our expertly designed employability training program equips you with the skills, knowledge, and confidence to secure the perfect job that aligns with your passion and goals. With a placement , we ensure you don’t just dream of a better future—you achieve it. Join TCIC today and step confidently into a career that aligns perfectly with your passion and ambition!
        This is the right time and TCIC is the right place for you</p>
        
      
      </div>
    </div>
  );
};

export default About;
