import React from 'react';
import './Hero.css';
import bannerVideo from '../../assets/images/banner.mp4';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="video-background">
        <video autoPlay loop muted className="background-video">
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-text">
        <h1>This is your Moment to Connect, Innovate and Grow into Greatness</h1>
       
      </div>
    </div>
  );
};

export default Hero;
