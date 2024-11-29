import React from 'react';
import './Careers.css';


import noJobsImage from '../../assets/images/JOB-CLOSED.png'; // Replace with the path to your default image

const Careers = () => {
    return (
        <div className="no-jobs-container">
            <img src={noJobsImage} alt="No job openings" className="no-jobs-image" />
            <h2 className="no-jobs-title">No Job Openings Available</h2>
            <p className="no-jobs-text">We currently have no job openings. Please check back later.</p>
        </div>
    );
};

export default Careers;
