import React from 'react';
import './PhotographyPrograms.css';
import photo_program_1 from '../../assets/images/cinma.jpg';
import photo_icon_1 from '../../assets/images/cinmalogo.png';
import { Link } from 'react-router-dom';

const PhotographyPrograms = () => {
  return (
    <div className='photography-programs'>
        <div className='photography-program'>
        <Link to="/PhotographyWorkshopPage">
          <img src={photo_program_1} alt="Photography Workshop" />   
          <div className='photography-caption'>
              <img src={photo_icon_1} alt="Icon" />
              <p>Cinematography Workshop</p>
          </div>
        </Link>
        </div>
    </div>
  );
}

export default PhotographyPrograms;
