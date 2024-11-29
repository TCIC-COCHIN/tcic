import React from 'react';
import './VideoComponent.css'; // Make sure to link the CSS file

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video className="responsive-video" controls>
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
