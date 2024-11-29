import React from 'react';
import './Animation.css'; // Link the CSS file for styling
import sampleVideo from '../../assets/images/anima.mp4'; // Import the video file

const Animation = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="responsive-video" >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Animation;
