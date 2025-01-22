import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./SellYourTalent.css";
import poster from "../../assets/images/HIGH.png"; // Replace with your poster image path
import payImage from "../../assets/images/pay1.jpg"; // Replace with your payment image path

const SellYourTalent = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".talent-poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".talent-button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const togglePaymentModal = () => {
    setPaymentModalOpen(!isPaymentModalOpen);

    if (!isPaymentModalOpen) {
      gsap.fromTo(
        ".talent-modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleContactClick = () => {
    navigate("/contact"); // Navigate to Contact page
  };

  return (
    <div className="sell-your-talent-page">
      <div className="talent-poster-container">
        <img
          src={poster}
          alt="Sell Your Talent Workshop Poster"
          className="talent-poster"
        />
      </div>
      <div className="talent-button-container">
        <button className="explore-button" onClick={handleContactClick}>
          For Registration Support
        </button>
        <button className="talent-payment-button" onClick={togglePaymentModal}>
          Payment Details
        </button>
      </div>

      {isPaymentModalOpen && (
        <div className="talent-modal-overlay">
          <div className="talent-modal-content">
            <button className="close-modal" onClick={togglePaymentModal}>
              ×
            </button>
            <img
              src={payImage}
              alt="Payment Details"
              className="talent-payment-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SellYourTalent;
