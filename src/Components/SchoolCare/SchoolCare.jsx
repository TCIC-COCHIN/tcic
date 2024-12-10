import React from 'react';
import './SchoolCare.css';
import school_1 from '../../assets/images/schoolcare.jpg';
import school_icon_1 from '../../assets/images/schoolcareicon.png';
import { Link } from 'react-router-dom';

const SchoolCare = () => {
  return (
    <div className='school-care-programs'>
      <div className='school-care-program'>
        <Link to="/studentCarePage">
          <img src={school_1} alt="" />
          <div className='school-care-caption'>
            <img src={school_icon_1} alt="" />
            <p>After School Care Services</p>
            <p>For Student Wellbeing</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SchoolCare;
