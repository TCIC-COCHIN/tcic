import React from 'react';
import { Link } from 'react-router-dom';
import './LeadershipColleges.css';
import poster from '../../assets/images/colleges.png'; // Replace with your Leadership Colleges poster image path

const LeadershipColleges = () => {
  return (
    <div className="leadership-colleges-page">
      <div className="poster-container">
        <img
          src={poster}
          alt="Leadership Programs for Colleges Poster"
          className="poster"
        />
      </div>
      <div className="button-container">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
        <a
          href={poster}
          download="Leadership_Colleges_Poster.png"
          className="download-button"
        >
          Download Poster
        </a>
      </div>
    </div>
  );
};

export default LeadershipColleges;
