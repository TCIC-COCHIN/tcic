import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './CreativePosterDesigning.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const CreativePosterDesigning = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Optional: set the duration for animations
  }, []);

  return (
    <div className="creative-poster-designing-page">
      {/* Header Section */}
      <header className="poster-header" data-aos="fade-down">
        <h1>Creative Poster Designing</h1>
        <p>
          At TCIC, we offer innovative and eye-catching poster designs that effectively communicate your brand's message. Whether you're promoting an event, business, or product, our posters will make a lasting impact.
        </p>
      </header>

      {/* Services Section */}
      <div className="poster-details">
        <div className="poster-card" data-aos="fade-up">
          <h2>Event Posters</h2>
          <p>
            Design posters that capture the essence of your event. From music concerts to corporate events, we create posters that attract attention and convey the right message.
          </p>
        </div>

        <div className="poster-card" data-aos="fade-up" data-aos-delay="200">
          <h2>Product Posters</h2>
          <p>
            Showcase your products in an engaging way. Our product posters highlight key features and benefits to help drive sales and interest.
          </p>
        </div>

        <div className="poster-card" data-aos="fade-up" data-aos-delay="400">
          <h2>Branding Posters</h2>
          <p>
            Strengthen your brand identity with custom-designed posters that reflect your brand's values, colors, and messaging to leave a lasting impression on your audience.
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

export default CreativePosterDesigning;
