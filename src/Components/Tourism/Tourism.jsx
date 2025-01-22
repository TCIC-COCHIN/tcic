import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Tourism.css";
import tourismPoster from "../../assets/images/toursims.jpg"; // Replace with your tourism poster image path
import detailsImage from "../../assets/images/pay1.jpg"; // Replace with your tourism details image path

const Tourism = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".tourism-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".tourism-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    if (!isModalOpen) {
      gsap.fromTo(
        ".tourism-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  return (
    <div className="tourism-page">
      <div className="tourism-poster-container">
        <img
          src={tourismPoster}
          alt="Tourism Poster"
          className="tourism-poster"
        />
      </div>
      <div className="tourism-button-container">
        <button className="explore-button" onClick={() => alert("Explore More!")}>
          Explore Destinations
        </button>
        <button className="details-button" onClick={toggleModal}>
          Payment Details
        </button>
      </div>

      {isModalOpen && (
        <div className="tourism-modal-overlay">
          <div className="tourism-modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ×
            </button>
            <img
              src={detailsImage}
              alt="Details"
              className="tourism-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tourism;
