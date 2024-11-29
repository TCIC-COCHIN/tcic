import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './InnovativeLogoDesigning.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const InnovativeLogoDesigning = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Optional: set the duration for animations
  }, []);

  return (
    <div className="innovative-logo-designing-page">
      {/* Header Section */}
      <header className="logo-header" data-aos="fade-down">
        <h1>Innovative Logo Designing</h1>
        <p>
          At TCIC, we specialize in crafting unique and memorable logos that represent your brand's identity. Our expert designers create logos that resonate with your target audience and make your brand stand out.
        </p>
      </header>

      {/* Services Section */}
      <div className="logo-details">
        <div className="logo-card" data-aos="fade-up">
          <h2>Custom Logo Design</h2>
          <p>
            Our custom logo designs are tailored to reflect your brand’s values, personality, and vision. Whether you are a startup or an established business, we design logos that make an impact.
          </p>
        </div>

        <div className="logo-card" data-aos="fade-up" data-aos-delay="200">
          <h2>Minimalistic Logos</h2>
          <p>
            We create clean, simple, and elegant logos that focus on minimalism while ensuring they are memorable and versatile.
          </p>
        </div>

        <div className="logo-card" data-aos="fade-up" data-aos-delay="400">
          <h2>Typography-based Logos</h2>
          <p>
            Typography-driven logos highlight the uniqueness of your brand name with creative fonts and styles, ensuring a strong and impactful presence.
          </p>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="contact-us-section" data-aos="zoom-in" data-aos-delay="600">
        <button className="contact-us-button" onClick={handleContactUsClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default InnovativeLogoDesigning;
