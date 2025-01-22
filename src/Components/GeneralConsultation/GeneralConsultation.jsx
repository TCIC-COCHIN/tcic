import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./GeneralConsultation.css";
import consultationPoster from "../../assets/images/finalconsult.jpg"; // Replace with your consultation poster image path
import detailsImage from "../../assets/images/pay1.jpg"; // Replace with your consultation details image path

const GeneralConsultation = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".consultation-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".consultation-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    if (!isModalOpen) {
      gsap.fromTo(
        ".consultation-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleSupportClick = () => {
    navigate("/contact"); // Navigate to Support page
  };

  return (
    <div className="consultation-page">
      <div className="consultation-poster-container">
        <img
          src={consultationPoster}
          alt="Consultation Poster"
          className="consultation-poster"
        />
      </div>
      <div className="consultation-button-container">
        <button className="support-button" onClick={handleSupportClick}>
          For Registration Support
        </button>
        <button className="consultation-apply-button" onClick={toggleModal}>
          Payment Details
        </button>
      </div>

      {isModalOpen && (
        <div className="consultation-modal-overlay">
          <div className="consultation-modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ×
            </button>
            <img
              src={detailsImage}
              alt="Consultation Details"
              className="consultation-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralConsultation;
