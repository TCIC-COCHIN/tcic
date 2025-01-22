import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./Jobin.css";
import jobPoster from "../../assets/images/jobin.jpg"; // Replace with your job poster image path
import applyImage from "../../assets/images/pay1.jpg"; ; // Replace with your application details image path

const Jobin = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".job-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".job-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    if (!isModalOpen) {
      gsap.fromTo(
        ".job-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleSupportClick = () => {
    navigate("/contact"); // Navigate to Support page
  };

  return (
    <div className="jobin-page">
      <div className="job-poster-container">
        <img
          src={jobPoster}
          alt="Job Posting"
          className="job-poster"
        />
      </div>
      <div className="job-button-container">
        <button className="support-button" onClick={handleSupportClick}>
          For Registration Support?
        </button>
        <button className="job-apply-button" onClick={toggleModal}>
          Payment Details
        </button>
      </div>

      {isModalOpen && (
        <div className="job-modal-overlay">
          <div className="job-modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ×
            </button>
            <img
              src={applyImage}
              alt="Application Details"
              className="job-apply-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobin;
