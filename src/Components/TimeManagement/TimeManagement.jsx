import React from 'react';
import { Link } from 'react-router-dom';
import './TimeManagement.css';
import poster from '../../assets/images/time.png'; // Replace with your poster image path

const TimeManagement = () => {
  return (
    <div className="time-management-page">
      <div className="poster-container">
        <img src={poster} alt="Time Management Workshop Poster" className="poster" />
      </div>
      <div className="button-container">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
        <a
          href={poster}
          download="Time_Management_Poster.png"
          className="download-button"
        >
          Download Poster
        </a>
      </div>
    </div>
  );
};

export default TimeManagement;
