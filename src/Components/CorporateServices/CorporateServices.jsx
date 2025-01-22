import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./CorporateServices.css";
import corporateImage from "../../assets/images/finalcorp.jpg"; // Replace with your corporate services image path
import serviceDetailsImage from "../../assets/images/pay1.jpg"; // Replace with your service details image path

const CorporateServices = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".corporate-image",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".services-button-container",
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
    navigate("/contact"); // Navigate to Contact page
  };

  return (
    <div className="corporate-services-page">
      <div className="corporate-image-container">
        <img
          src={corporateImage}
          alt="Corporate Services"
          className="corporate-image"
        />
      </div>
      <div className="services-button-container">
        <button className="support-button" onClick={handleContactClick}>
          Register Now
        </button>
        <button className="service-details-button" onClick={toggleModal}>
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
              src={serviceDetailsImage}
              alt="Service Details"
              className="service-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CorporateServices;
