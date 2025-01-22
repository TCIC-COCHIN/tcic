import React, { useState } from "react";
import "./PosterGallery.css";

import img1 from "../../assets/images/ban-skilledjr.jpg";
import img2 from "../../assets/images/skilledsenior.jpg";
import img3 from "../../assets/images/skilledjuniorsenior.jpg";
import img4 from "../../assets/images/bannerbetterkids.jpg";
import img5 from "../../assets/images/kidsassessment.jpg";

const PosterGallery = () => {
  const posters = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posters.length) % posters.length
    );
  };

  return (
    <div className="poster-gallery">
      <button className="arrow-btn left" onClick={handlePrevious}>
        &lt;
      </button>
      <div className="poster-containers">
        <img src={posters[currentIndex]} alt={`Poster ${currentIndex + 1}`} />
      </div>
      <button className="arrow-btn right" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default PosterGallery;
