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
        
        <p>At TCIC, we are dedicated to transforming dreams into reality through expertly designed employability training programs that equip you with the skills, knowledge, and confidence to secure your dream job. We offer Skill Development Programmes, Techno and Management Functions, Hands-on Training/Internships, Kids After School Care, and International Grooming and Modelling to ensure holistic growth and global readiness. Additionally, our innovative approach introduces unique ideas and specialized programs tailored to meet evolving industry demands.
        </p>

        <p>TCIC Young Learners Academy specializes in appointing qualified teachers with certifications such as TESOL, CELTA, and TYLEC for international schools. The academy also offers after-school learning and care programs for children.

</p>
<p>With a strong placement focus, TCIC bridges the gap between learning and real-world success. Join us today and take the first step toward a brighter, more confident future!</p>
        
      
      </div>
    </div>
  );
};

export default About;
