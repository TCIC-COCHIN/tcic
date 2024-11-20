import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DigitalMarketingService.css';

const DigitalMarketingService = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="digital-marketing-service-page">
      {/* Header Section */}
      <header className="marketing-header">
        <h1>Digital Marketing Services</h1>
        <p>
          Take your brand to the next level with our data-driven digital
          marketing strategies. We help you reach your audience, boost
          engagement, and drive conversions.
        </p>
      </header>

      {/* Services Section */}
      <div className="marketing-details">
        <div className="marketing-card">
          <h2>SEO Optimization</h2>
          <p>
            Enhance your online visibility and attract more organic traffic with
            our proven SEO techniques.
          </p>
        </div>

        <div className="marketing-card">
          <h2>Social Media Marketing</h2>
          <p>
            Engage with your audience on platforms they love through targeted
            social media campaigns.
          </p>
        </div>

        <div className="marketing-card">
          <h2>Content Marketing</h2>
          <p>
            Deliver high-quality, engaging content that resonates with your
            audience and drives brand loyalty.
          </p>
        </div>

        <div className="marketing-card">
          <h2>Email Marketing</h2>
          <p>
            Reach your customers directly with personalized, impactful email
            campaigns.
          </p>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="contact-us-section">
        <button className="contact-us-button" onClick={handleContactUsClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketingService;
