import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./SelfBranding.css";
import image1 from "../../assets/images/self1.jpg";
import image2 from "../../assets/images/self2.jpg";
import image3 from "../../assets/images/self3.jpg";
import payImage from "../../assets/images/pay.jpg"; // Replace with your payment details image path

const SelfBranding = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".image-row",
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
    <div className="self-branding-page">
      {/* Image Section */}
      <div className="image-row">
        <div className="poster-container">
          <img src={image1} alt="Self Branding 1" className="poster" />
        </div>
        <div className="poster-container">
          <img src={image2} alt="Self Branding 2" className="poster" />
        </div>
        <div className="poster-container">
          <img src={image3} alt="Self Branding 3" className="poster" />
        </div>
      </div>

      {/* Button Section */}
      <div className="button-container">
        <button className="contact-button" onClick={handleContactClick}>
          Contact Us
        </button>
        <button className="payment-button" onClick={togglePaymentModal}>
          Payment Details
        </button>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="modal-overlay" onClick={togglePaymentModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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

export default SelfBranding;
