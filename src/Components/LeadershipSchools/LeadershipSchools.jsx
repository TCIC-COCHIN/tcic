import React from 'react';
import { Link } from 'react-router-dom';
import './LeadershipSchools.css';
import poster from '../../assets/images/schools.png'; // Replace with your Leadership Schools poster image path

const LeadershipSchools = () => {
  return (
    <div className="leadership-schools-page">
      <div className="poster-container">
        <img
          src={poster}
          alt="Leadership Programs for Schools Poster"
          className="poster"
        />
      </div>
      <div className="button-container">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
        <a
          href={poster}
          download="Leadership_Schools_Poster.png"
          className="download-button"
        >
          Download Poster
        </a>
      </div>
    </div>
  );
};

export default LeadershipSchools;
