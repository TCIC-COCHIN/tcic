import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './ProfessionalITConsultants.css';

const ProfessionalITConsultants = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="it-consultants-page">
      {/* Header Section */}
      <header className="it-consultants-header">
        <h1>Professional IT Consultants</h1>
        <p>
          Empower your business with expert IT consulting services. We provide
          tailored solutions to enhance your IT infrastructure, optimize
          processes, and drive innovation.
        </p>
      </header>

      {/* Services Section */}
      <div className="it-consultants-details">
        <div className="consulting-card">
          <h2>Strategic IT Planning</h2>
          <p>
            Develop a clear IT strategy aligned with your business goals,
            ensuring long-term growth and success.
          </p>
        </div>

        <div className="consulting-card">
          <h2>Cloud Solutions</h2>
          <p>
            Leverage the power of cloud computing with scalable, secure, and
            efficient cloud services tailored to your needs.
          </p>
        </div>

        <div className="consulting-card">
          <h2>Cybersecurity</h2>
          <p>
            Protect your digital assets with comprehensive cybersecurity
            solutions designed to prevent and mitigate threats.
          </p>
        </div>

        <div className="consulting-card">
          <h2>System Integration</h2>
          <p>
            Optimize your operations with seamless integration of systems,
            applications, and data.
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

export default ProfessionalITConsultants;
