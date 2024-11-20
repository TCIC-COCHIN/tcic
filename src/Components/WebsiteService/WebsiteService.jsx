import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './WebsiteService.css';

const WebsiteService = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="website-service-page">
      {/* Header Section */}
      <header className="service-header">
        <h1>Our Website Services</h1>
        <p>
          At TCIC, we specialize in creating and managing professional websites that help your business stand out.
          From custom web development to seamless management, we provide everything you need to succeed online.
        </p>
      </header>

      {/* Services Section */}
      <div className="service-details">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Build robust and scalable websites tailored to your business needs. Our web development service ensures
            your site is modern, responsive, and user-friendly.
          </p>
        </div>

        <div className="service-card">
          <h2>Web Design</h2>
          <p>
            Design stunning websites that captivate your audience. Our expert designers focus on creating engaging,
            aesthetic, and functional designs that reflect your brand identity.
          </p>
        </div>

        <div className="service-card">
          <h2>Website Management</h2>
          <p>
            We offer end-to-end website management solutions, including regular updates, maintenance, and security,
            so you can focus on growing your business.
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

export default WebsiteService;
