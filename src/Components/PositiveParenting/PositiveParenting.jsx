import React from 'react';
import { Link } from 'react-router-dom';
import './PositiveParenting.css';
import poster from '../../assets/images/parents.png'; // Replace with your Positive Parenting poster image path

const PositiveParenting = () => {
  return (
    <div className="positive-parenting-page">
      <div className="poster-container">
        <img
          src={poster}
          alt="Positive Parenting Program Poster"
          className="poster"
        />
      </div>
      <div className="button-container">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
        <a
          href={poster}
          download="Positive_Parenting_Poster.png"
          className="download-button"
        >
          Download Poster
        </a>
      </div>
    </div>
  );
};

export default PositiveParenting;
