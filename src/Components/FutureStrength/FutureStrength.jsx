import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./FutureStrength.css";
import poster from "../../assets/images/future.jpg"; // Replace with your poster image path
import detailsImage from "../../assets/images/pay1.jpg"; // Replace with your details image path

const FutureStrength = () => {
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleDetailsModal = () => {
    setDetailsModalOpen(!isDetailsModalOpen);

    if (!isDetailsModalOpen) {
      gsap.fromTo(
        ".modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleLearnMoreClick = () => {
    navigate("/contact"); // Navigate to Learn More page
  };

  return (
    <div className="future-strength-page">
      <div className="poster-container">
        <img
          src={poster}
          alt="Future Strength Workshop Poster"
          className="poster"
        />
      </div>
      <div className="button-container">
        <button className="learn-button" onClick={handleLearnMoreClick}>
          Register Now
        </button>
        
      </div>

      {isDetailsModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleDetailsModal}>
              ×
            </button>
            <img
              src={detailsImage}
              alt="Details"
              className="details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FutureStrength;
