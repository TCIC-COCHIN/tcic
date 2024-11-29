import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './ContentMarketing.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const ContentMarketing = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Optional: set the duration for animations
  }, []);

  return (
    <div className="content-marketing-page">
      {/* Header Section */}
      <header className="content-marketing-header" data-aos="fade-down">
        <h1>Content Marketing</h1>
        <p>
          Boost your brand's online presence with strategic content marketing. From blog posts to social media campaigns, we create 
          compelling content that resonates with your audience and drives engagement.
        </p>
      </header>

      {/* Services Section */}
      <div className="content-marketing-details">
        <div className="content-card" data-aos="fade-up">
          <h2>Blog Writing</h2>
          <p>
            Engage your audience with informative and well-researched blog posts. Our team delivers high-quality content tailored 
            to your niche and audience.
          </p>
        </div>

        <div className="content-card" data-aos="fade-up" data-aos-delay="200">
          <h2>Social Media Content</h2>
          <p>
            Build a strong social media presence with visually appealing and creative content. We help you connect with your audience 
            and boost brand awareness.
          </p>
        </div>

        <div className="content-card" data-aos="fade-up" data-aos-delay="400">
          <h2>SEO-Optimized Content</h2>
          <p>
            Improve your website's visibility with keyword-rich and SEO-optimized content. Our content strategies drive organic 
            traffic and enhance your search rankings.
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

export default ContentMarketing;
