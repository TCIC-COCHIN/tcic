import React from 'react';
import { Link } from 'react-router-dom';
import './StressHandling.css';
import poster from '../../assets/images/stress.png'; // Replace with your Stress Handling poster image path

const StressHandling = () => {
  return (
    <div className="stress-handling-page">
      <div className="poster-container">
        <img src={poster} alt="Stress Handling Workshop Poster" className="poster" />
      </div>
      <div className="button-container">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
        <a
          href={poster}
          download="Stress_Handling_Poster.png"
          className="download-button"
        >
          Download Poster
        </a>
      </div>
    </div>
  );
};

export default StressHandling;
