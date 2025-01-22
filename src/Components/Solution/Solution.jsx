import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./Solution.css";
import solutionPoster from "../../assets/images/anusol.jpg"; // Replace with your solution poster image path
import detailsImage from "../../assets/images/pay1.jpg"; // Replace with your solution details image path

const Solution = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".solution-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".solution-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    if (!isModalOpen) {
      gsap.fromTo(
        ".solution-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleSupportClick = () => {
    navigate("/contact"); // Navigate to Support page
  };

  return (
    <div className="solution-page">
      <div className="solution-poster-container">
        <img
          src={solutionPoster}
          alt="Solution Poster"
          className="solution-poster"
        />
      </div>
      <div className="solution-button-container">
        <button className="support-button" onClick={handleSupportClick}>
          Register Now
        </button>
        <button className="solution-apply-button" onClick={toggleModal}>
          Payment Details
        </button>
      </div>

      {isModalOpen && (
        <div className="solution-modal-overlay">
          <div className="solution-modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ×
            </button>
            <img
              src={detailsImage}
              alt="Solution Details"
              className="solution-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Solution;