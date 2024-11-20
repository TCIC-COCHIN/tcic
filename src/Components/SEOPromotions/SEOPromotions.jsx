import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './SEOPromotions.css';

const SEOPromotions = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="seo-promotions-page">
      {/* Header Section */}
      <header className="seo-header">
        <h1>SEO Promotions</h1>
        <p>
          Drive organic traffic and improve your website's search engine ranking with our comprehensive SEO strategies. 
          From keyword optimization to technical SEO, we ensure your business stands out online.
        </p>
      </header>

      {/* Services Section */}
      <div className="seo-details">
        <div className="seo-card">
          <h2>Keyword Research</h2>
          <p>
            Identify the right keywords to target your audience effectively. We use advanced tools to find high-impact 
            keywords that boost your online visibility.
          </p>
        </div>

        <div className="seo-card">
          <h2>On-Page Optimization</h2>
          <p>
            Optimize your website's content, meta tags, and structure to align with search engine algorithms and improve 
            your ranking.
          </p>
        </div>

        <div className="seo-card">
          <h2>Technical SEO</h2>
          <p>
            Ensure your website is fast, secure, and mobile-friendly. Our technical SEO services address crawl errors, 
            site speed, and more to enhance your site's performance.
          </p>
        </div>

        <div className="seo-card">
          <h2>Link Building</h2>
          <p>
            Build high-quality backlinks to improve your site's authority. We create ethical, white-hat link-building 
            strategies for long-term success.
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

export default SEOPromotions;
