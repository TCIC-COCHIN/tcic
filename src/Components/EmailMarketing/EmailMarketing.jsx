import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './EmailMarketing.css';

const EmailMarketing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="email-marketing-page">
      {/* Header Section */}
      <header className="email-marketing-header" data-aos="fade-down">
        <h1>Email Marketing</h1>
        <p>
          Connect with your audience directly through personalized and impactful email marketing campaigns.
          We craft engaging content that drives customer retention and business growth.
        </p>
      </header>

      {/* Services Section */}
      <div className="email-marketing-details">
        <div className="email-card" data-aos="fade-up">
          <h2>Newsletter Campaigns</h2>
          <p>
            Keep your audience informed and engaged with beautifully designed newsletters tailored to your brand's voice.
          </p>
        </div>

        <div className="email-card" data-aos="fade-up" data-aos-delay="200">
          <h2>Promotional Emails</h2>
          <p>
            Increase sales and boost awareness with high-converting promotional emails that captivate your audience.
          </p>
        </div>

        <div className="email-card" data-aos="fade-up" data-aos-delay="400">
          <h2>Automated Email Flows</h2>
          <p>
            Save time and maximize efficiency with automated email workflows designed to nurture leads and enhance conversions.
          </p>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="contact-us-section" data-aos="zoom-in">
        <button className="contact-us-button" onClick={handleContactUsClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default EmailMarketing;
