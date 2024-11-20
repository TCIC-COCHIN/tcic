import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './EmailMarketing.css';

const EmailMarketing = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="email-marketing-page">
      {/* Header Section */}
      <header className="email-marketing-header">
        <h1>Email Marketing</h1>
        <p>
          Connect with your audience directly through personalized and impactful email marketing campaigns. 
          We craft engaging content that drives customer retention and business growth.
        </p>
      </header>

      {/* Services Section */}
      <div className="email-marketing-details">
        <div className="email-card">
          <h2>Newsletter Campaigns</h2>
          <p>
            Keep your audience informed and engaged with beautifully designed newsletters tailored to your brand's voice.
          </p>
        </div>

        <div className="email-card">
          <h2>Promotional Emails</h2>
          <p>
            Increase sales and boost awareness with high-converting promotional emails that captivate your audience.
          </p>
        </div>

        <div className="email-card">
          <h2>Automated Email Flows</h2>
          <p>
            Save time and maximize efficiency with automated email workflows designed to nurture leads and enhance conversions.
          </p>
        </div>

        <div className="email-card">
          <h2>Performance Analytics</h2>
          <p>
            Track the performance of your email campaigns with detailed analytics, helping you optimize for better results.
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

export default EmailMarketing;
