import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./SkilledSenior.css";
import poster from "../../assets/images/img5.jpg"; // Replace with your SkilledSenior poster image path
import payImage from "../../assets/images/pay1.jpg"; // Replace with your payment image path

const SkilledSenior = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".poster",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".button-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const togglePaymentModal = () => {
    setPaymentModalOpen(!isPaymentModalOpen);

    if (!isPaymentModalOpen) {
      gsap.fromTo(
        ".modal-content",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="skilled-senior-page">
      <div className="poster-container">
        <img
          src={poster}
          alt="SkilledSenior Program Poster"
          className="poster"
        />
      </div>
      <div className="button-container">
        <button className="register-button" onClick={handleContactClick}>
          Join Now
        </button>
        <button className="payment-button" onClick={togglePaymentModal}>
          Payment Details
        </button>
      </div>

      {isPaymentModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={togglePaymentModal}>
              ×
            </button>
            <img
              src={payImage}
              alt="Payment Details"
              className="payment-details-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkilledSenior;
