import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./GroomingYouth.css";
import youthPoster from "../../assets/images/finalgroomingyouth.jpg"; // Replace with your youth poster image path
import detailsImage from "../../assets/images/pay1.jpg"; // Replace with your application details image path

const GroomingYouth = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".youth-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".youth-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    if (!isModalOpen) {
      gsap.fromTo(
        ".youth-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleSupportClick = () => {
    navigate("/contact"); // Navigate to Support page
  };

  return (
    <div className="groomingyouth-page">
      <div className="youth-poster-container">
        <img
          src={youthPoster}
          alt="Youth Event Poster"
          className="youth-poster"
        />
      </div>
      <div className="youth-button-container">
        <button className="support-button" onClick={handleSupportClick}>
          For Registration Support?
        </button>
        <button className="youth-apply-button" onClick={toggleModal}>
          Payment Details
        </button>
      </div>

      {isModalOpen && (
        <div className="youth-modal-overlay">
          <div className="youth-modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ×
            </button>
            <img
              src={detailsImage}
              alt="Event Details"
              className="youth-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GroomingYouth;
