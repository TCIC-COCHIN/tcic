import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './ProfessionalITConsultants.css';

const ProfessionalITConsultants = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the contact form page
  };

  return (
    <div className="it-consultants-page">
      {/* Header Section */}
      <header className="it-consultants-header" data-aos="fade-down">
        <h1>Professional IT Consultants</h1>
        <p>
          Empower your business with expert IT consulting services. We provide
          tailored solutions to enhance your IT infrastructure, optimize
          processes, and drive innovation.
        </p>
      </header>

      {/* Services Section */}
      <div className="it-consultants-details">
        <div className="consulting-card" data-aos="fade-up">
          <h2>Strategic IT Planning</h2>
          <p>
            Develop a clear IT strategy aligned with your business goals,
            ensuring long-term growth and success.
          </p>
        </div>

        <div className="consulting-card" data-aos="fade-up" data-aos-delay="200">
          <h2>Cloud Solutions</h2>
          <p>
            Leverage the power of cloud computing with scalable, secure, and
            efficient cloud services tailored to your needs.
          </p>
        </div>

        <div className="consulting-card" data-aos="fade-up" data-aos-delay="400">
          <h2>System Integration</h2>
          <p>
            Optimize your operations with seamless integration of systems,
            applications, and data.
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

export default ProfessionalITConsultants;
