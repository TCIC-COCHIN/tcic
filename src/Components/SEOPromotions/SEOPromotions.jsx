import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './SEOPromotions.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const SEOPromotions = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Optional: set the duration for animations
  }, []);

  return (
    <div className="seo-promotions-page">
      {/* Header Section */}
      <header className="seo-header" data-aos="fade-down">
        <h1>SEO Promotions</h1>
        <p>
          Drive organic traffic and improve your website's search engine ranking with our comprehensive SEO strategies. 
          From keyword optimization to technical SEO, we ensure your business stands out online.
        </p>
      </header>

      {/* Services Section */}
      <div className="seo-details">
        <div className="seo-card" data-aos="fade-up">
          <h2>Keyword Research</h2>
          <p>
            Identify the right keywords to target your audience effectively. We use advanced tools to find high-impact 
            keywords that boost your online visibility.
          </p>
        </div>

        <div className="seo-card" data-aos="fade-up" data-aos-delay="200">
          <h2>On-Page Optimization</h2>
          <p>
            Optimize your website's content, meta tags, and structure to align with search engine algorithms and improve 
            your ranking.
          </p>
        </div>

        <div className="seo-card" data-aos="fade-up" data-aos-delay="400">
          <h2>Technical SEO</h2>
          <p>
            Ensure your website is fast, secure, and mobile-friendly. Our technical SEO services address crawl errors, 
            site speed, and more to enhance your site's performance.
          </p>
        </div>

        
      </div>

      {/* Contact Us Button */}
      <div className="contact-us-section" data-aos="zoom-in" data-aos-delay="800">
        <button className="contact-us-button" onClick={handleContactUsClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default SEOPromotions;
