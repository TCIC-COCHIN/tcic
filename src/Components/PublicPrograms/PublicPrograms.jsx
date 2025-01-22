import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./PublicPrograms.css";
import programPoster from "../../assets/images/finalpublicpro.jpg"; // Replace with your program poster image path
import programDetailsImage from "../../assets/images/pay1.jpg"; // Replace with your program details image path

const PublicPrograms = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".program-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".program-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    if (!isModalOpen) {
      gsap.fromTo(
        ".program-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleMoreInfoClick = () => {
    navigate("/contact"); // Navigate to More Info page
  };

  return (
    <div className="public-programs-page">
      <div className="program-poster-container">
        <img
          src={programPoster}
          alt="Program Poster"
          className="program-poster"
        />
      </div>
      <div className="program-button-container">
        <button className="info-button" onClick={handleMoreInfoClick}>
          Register Now
        </button>
        <button className="details-button" onClick={toggleModal}>
          Payment Details
        </button>
      </div>

      {isModalOpen && (
        <div className="program-modal-overlay">
          <div className="program-modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ×
            </button>
            <img
              src={programDetailsImage}
              alt="Program Details"
              className="program-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicPrograms;
