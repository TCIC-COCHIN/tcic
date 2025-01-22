import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./FamilyMentoring.css";
import mentoringPoster from "../../assets/images/anufam.jpg"; // Replace with your family mentoring poster image path
import detailsImage from "../../assets/images/pay1.jpg"; // Replace with your family mentoring details image path

const FamilyMentoring = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".mentoring-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".mentoring-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    if (!isModalOpen) {
      gsap.fromTo(
        ".mentoring-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  return (
    <div className="mentoring-page">
      <div className="mentoring-poster-container">
        <img
          src={mentoringPoster}
          alt="Family Mentoring Poster"
          className="mentoring-poster"
        />
      </div>
      <div className="mentoring-button-container">
        <button
          className="learn-button"
          onClick={() => alert("Learn More About Family Mentoring!")}
        >
          Contact Us
        </button>
        <button className="details-button" onClick={toggleModal}>
          Payment Details
        </button>
      </div>

      {isModalOpen && (
        <div className="mentoring-modal-overlay">
          <div className="mentoring-modal-content">
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
            <img
              src={detailsImage}
              alt="Mentoring Details"
              className="mentoring-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyMentoring;
