import React from 'react';
import './Modelling.css';
import model_program_1 from '../../assets/images/model1.jpg';
import model_program_2 from '../../assets/images/model2.jpg';

import model_icon_1 from '../../assets/images/q.png';
import model_icon_2 from '../../assets/images/mak.png';

import { Link } from 'react-router-dom';

const ModellingPrograms = () => {
  return (
    <div className='modelling-programs'>
        <div className='modelling-program'>
        <Link to="/ModellingGroomingPage">
          <img src={model_program_1} alt="Digital Marketing" />   
          <div className='modelling-caption'>
              <img src={model_icon_1} alt="Icon" />
              <p>Unleash Your Inner Star </p>
          </div>
        </Link>
        </div>
        <div className='modelling-program'>
        <Link to="/ModellingGroomingPage">
          <img src={model_program_2} alt="Full Stack Development" /> 
          <div className='modelling-caption'>
              <img src={model_icon_2} alt="Icon" />
              <p>Explore Professional Makeup </p>
          </div> 
        </Link> 
        </div>
        
    </div>
  );
}

export default ModellingPrograms;
