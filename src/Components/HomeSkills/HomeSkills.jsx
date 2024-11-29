import React from 'react'
import './HomeSkills.css'
import program_1 from '../../assets/images/time-man.jpg'
import program_2 from '../../assets/images/stress2.jpg'
import program_3 from '../../assets/images/powerful-leader.jpg'
import program_4 from '../../assets/images/school-leader.jpg'
import program_5 from '../../assets/images/college-leader.jpg'
import program_6 from '../../assets/images/positive-parenting.jpg'
import program_icon_1 from '../../assets/images/time-icon.png'
import program_icon_2 from '../../assets/images/yog2.png'
import program_icon_3 from '../../assets/images/lead.png'
import program_icon_4 from '../../assets/images/s22.png'
import program_icon_5 from '../../assets/images/clg.png'
import program_icon_6 from '../../assets/images/fam5.png'
import { Link } from 'react-router-dom';

const HomeSkills = () => {
  return (
    <div className= 'programs' >
        <div className='program'>
        <Link to="/time-management">
          <img src={program_1} alt="" />   
        <div className='caption'>
            <img src={program_icon_1} alt="" />
            <p>Time Management </p>
        </div>
        </Link>
        </div>
        <div className='program'>
        <Link to="/stress-handling">
          <img src={program_2} alt="" /> 
          <div className='caption'>
            <img src={program_icon_2} alt="" />
            <p>Stress Handling </p>
        </div> 
        </Link> 
        </div>
        <div className='program'>
        <Link to="/powerful-leader">
          <img src={program_3} alt="" />  
          <div className='caption'>
            <img src={program_icon_3} alt="" />
            <p> Powerful Leader </p>
        </div> 
        </Link>
        </div>
        <div className='program'>
        <Link to="/leadership-schools">
          <img src={program_4} alt="" />   
        <div className='caption'>
            <img src={program_icon_4} alt="" />
            <p>Leadership Programs for Schools </p>
        </div>
        </Link>
        </div>
        <div className='program'>
        <Link to="/leadership-colleges">
          <img src={program_5} alt="" />   
        <div className='caption'>
            <img src={program_icon_5} alt="" />
            <p>Leadership Programs for Colleges </p>
        </div>
        </Link>
        </div>
        <div className='program'>
        <Link to="/positive-parenting">
          <img src={program_6} alt="" />   
        <div className='caption'>
            <img src={program_icon_6} alt="" />
            <p>Positive Parenting Program </p>
        </div>
        </Link>
        </div>

    </div>
  )
}

export default HomeSkills