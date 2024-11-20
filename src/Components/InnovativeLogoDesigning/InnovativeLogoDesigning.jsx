import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './InnovativeLogoDesigning.css';

const InnovativeLogoDesigning = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="innovative-logo-designing-page">
      {/* Header Section */}
      <header className="logo-header">
        <h1>Innovative Logo Designing</h1>
        <p>
          At TCIC, we specialize in crafting unique and memorable logos that represent your brand's identity. Our expert designers create logos that resonate with your target audience and make your brand stand out.
        </p>
      </header>

      {/* Services Section */}
      <div className="logo-details">
        <div className="logo-card">
          <h2>Custom Logo Design</h2>
          <p>
            Our custom logo designs are tailored to reflect your brand’s values, personality, and vision. Whether you are a startup or an established business, we design logos that make an impact.
          </p>
        </div>

        <div className="logo-card">
          <h2>Minimalistic Logos</h2>
          <p>
            We create clean, simple, and elegant logos that focus on minimalism while ensuring they are memorable and versatile.
          </p>
        </div>

        <div className="logo-card">
          <h2>Typography-based Logos</h2>
          <p>
            Typography-driven logos highlight the uniqueness of your brand name with creative fonts and styles, ensuring a strong and impactful presence.
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

export default InnovativeLogoDesigning;
