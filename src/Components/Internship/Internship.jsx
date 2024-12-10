import React from 'react';
import './Internship.css';
import program_1 from '../../assets/images/intern.jpg';
import program_icon_1 from '../../assets/images/program-icon-1.png';
import { Link } from 'react-router-dom';

const Internship = () => {
  return (
    <div className='internship-programs'>
      <div className='internship-program'>
        <Link to="/futureStrength">
          <img src={program_1} alt="" />
          <div className='internship-caption'>
            <img src={program_icon_1} alt="" />
            <p>Hands on Training/Internship/</p>
            <p>Familiarization</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Internship;
