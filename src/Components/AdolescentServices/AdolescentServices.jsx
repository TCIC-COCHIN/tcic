import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./AdolescentServices.css";
import servicePoster from "../../assets/images/finaladol.jpg"; // Replace with your adolescent services poster image path
import infoImage from "../../assets/images/pay1.jpg"; // Replace with your information details image path

const AdolescentServices = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".service-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".service-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    if (!isModalOpen) {
      gsap.fromTo(
        ".service-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleContactClick = () => {
    navigate("/support"); // Navigate to Support page
  };

  return (
    <div className="adolescent-services-page">
      <div className="service-poster-container">
        <img
          src={servicePoster}
          alt="Adolescent Services"
          className="service-poster"
        />
      </div>
      <div className="service-button-container">
        <button className="support-button" onClick={handleContactClick}>
          Contact us
        </button>
        <button className="service-info-button" onClick={toggleModal}>
          Payment Details
        </button>
      </div>

      {isModalOpen && (
        <div className="service-modal-overlay">
          <div className="service-modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ×
            </button>
            <img
              src={infoImage}
              alt="Service Details"
              className="service-info-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdolescentServices;
