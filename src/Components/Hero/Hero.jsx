import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/images/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>This is your Moment to Connect, Innovate and Grow</h1>
        <p>Start your journey with TCIC today, and take your career international!
        At TCIC, we combine industry-led training with practical experience, ensuring our graduates are well-prepared for their next career steps. Our expert instructors, interactive curriculum, and supportive learning environment make us a top choice for learners worldwide.
        </p>
        {/* <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button> */}
        </div>

    </div>
  )
}

export default Hero