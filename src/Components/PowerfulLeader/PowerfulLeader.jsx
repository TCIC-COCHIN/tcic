import React from 'react';
import { Link } from 'react-router-dom';
import './PowerfulLeader.css';
import poster from '../../assets/images/leader.png'; // Replace with your Powerful Leader poster image path

const PowerfulLeader = () => {
  return (
    <div className="powerful-leader-page">
      <div className="poster-container">
        <img src={poster} alt="Powerful Leader Workshop Poster" className="poster" />
      </div>
      <div className="button-container">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
        <a
          href={poster}
          download="Powerful_Leader_Poster.png"
          className="download-button"
        >
          Download Poster
        </a>
      </div>
    </div>
  );
};

export default PowerfulLeader;
