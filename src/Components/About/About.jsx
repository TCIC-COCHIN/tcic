import React from 'react'
import './About.css'
import about_img from '../../assets/images/about.png'
import play_icon from '../../assets/images/play-icon.png'

const About = () => {
  return (
    <div className='about'>
<div className='about-left'>
    
    <img src={about_img} alt="" className='about-img' />
    <img src={play_icon} alt="" className='play-icon' />
</div>
<div className='about-right'>
  <h3>ABOUT TCIC</h3>  
  <h2>This is your Moment to Connect, Innovate and Grow</h2>
  <p>Our mission is to bridge the skill gap and prepare our learners for success in a competitive international job market. By providing hands-on, industry-relevant training, we equip our students with the expertise, confidence, and global perspective needed to thrive in their careers.</p>
<p>To be a globally recognized center of excellence, fostering a new generation of professionals equipped with industry-relevant skills and an international perspective. We envision a world where TCIC alumni drive innovation, inspire growth, and lead in their fields, empowered by the comprehensive, cutting-edge training they receive with us.</p>
<p>At TCIC, we combine industry-led training with practical experience, ensuring our graduates are well-prepared for their next career steps. Our expert instructors, interactive curriculum, and supportive learning environment make us a top choice for learners worldwide.
Start your journey with TCIC today, and take your career international!</p>
</div>
    </div>
  )
}

export default About