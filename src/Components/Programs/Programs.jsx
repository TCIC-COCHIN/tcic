import React from 'react'
import './Programs.css'
import program_1 from '../../assets/images/digi1.jpg'
import program_2 from '../../assets/images/sw.jpg'
import program_3 from '../../assets/images/skill.jpg'
import program_icon_1 from '../../assets/images/program-icon-1.png'
import program_icon_2 from '../../assets/images/program-icon-2.png'
import program_icon_3 from '../../assets/images/program-icon-3.png'
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <div className= 'programs' >
        <div className='program'>
        <Link to="/digitalMarketing">
          <img src={program_1} alt="" />   
        <div className='caption'>
            <img src={program_icon_1} alt="" />
            <p>Premium Digital Marketing </p>
        </div>
        </Link>
        </div>
        <div className='program'>
        <Link to="/fullstack-development">
          <img src={program_2} alt="" /> 
          <div className='caption'>
            <img src={program_icon_2} alt="" />
            <p>Full Stack Development </p>
        </div> 
        </Link> 
        </div>
        <div className='program'>
        <Link to="/internationalHr">
          <img src={program_3} alt="" />  
          <div className='caption'>
            <img src={program_icon_3} alt="" />
            <p>International HR </p>
        </div> 
        </Link>
        </div>

    </div>
  )
}

export default Programs