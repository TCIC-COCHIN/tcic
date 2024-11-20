import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './SocialMediaPromotion.css';

const SocialMediaPromotion = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="social-media-promotion-page">
      {/* Header Section */}
      <header className="promotion-header">
        <h1>Social Media Promotion</h1>
        <p>
          Boost your online presence with our expert social media promotion services. We help brands grow their reach and engage with their target audience across various platforms.
        </p>
      </header>

      {/* Services Section */}
      <div className="promotion-details">
        <div className="promotion-card">
          <h2>Social Media Strategy</h2>
          <p>
            Develop a targeted social media strategy tailored to your business goals. We analyze your audience and create a roadmap to maximize your engagement.
          </p>
        </div>

        <div className="promotion-card">
          <h2>Content Creation</h2>
          <p>
            Our team creates eye-catching and engaging content that resonates with your audience, ensuring your brand's voice is heard across various platforms.
          </p>
        </div>

        <div className="promotion-card">
          <h2>Ad Campaign Management</h2>
          <p>
            Run successful ad campaigns across platforms like Facebook, Instagram, and LinkedIn. We optimize your ads to reach the right audience and generate leads.
          </p>
        </div>

        <div className="promotion-card">
          <h2>Analytics & Reporting</h2>
          <p>
            We provide detailed reports to track your social media performance. Our analytics help you understand what's working and what needs improvement.
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

export default SocialMediaPromotion;