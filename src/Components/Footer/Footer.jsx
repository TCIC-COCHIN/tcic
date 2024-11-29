import React, { useEffect } from 'react';
import './Footer.css'; // Import the CSS file
import logo from '../../assets/images/logotrans.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100,    // Offset to trigger animations
      once: false      // Animation happens only once
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left" data-aos="fade-right">
          <img src={logo} alt="Sreelakshmi Logo" className="logo" />
          <h4 className="company-name">
            This is your Moment to Connect, Innovate and Grow into Greatness!
            <br />
            CST Brothers Provincial Campus,
            Sea port Airport Road,
            <br />
            Opp. Bharata Mata College,
            Near Chittilappilly Square,
            <br />
            Thrikkakara, Kochi-682021
          </h4>
          <p>Ph. no: 9633760759</p>
          <p>Email: tcicinfocochin@gmail.com</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61568197194224&mibextid=ZbWKwL" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/tcickochi/profilecard/?igsh=NGtuNHA2eHlmeXA4" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com/@tcickochi?si=JdwTDGY_-hlELpZj" className="social-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.linkedin.com/company/105781546/" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://wa.me/919633760759" className="social-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle" data-aos="fade-up">
          <h3>QUICK LINKS</h3>
          <ul className="footer-middle">
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                  Home
                </ScrollLink>
              ) : (
                <Link to="/">Home</Link>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="about" smooth={true} offset={-260} duration={500}>
                  The Institute
                </ScrollLink>
              ) : (
                <Link to="/">The Institute</Link>
              )}
            </li>
            <li>
              {location.pathname === '/galleryView' ? (
                <ScrollLink to="campus" smooth={true} offset={-260} duration={500}>
                  Gallery
                </ScrollLink>
              ) : (
                <Link to="/galleryView">Gallery</Link>
              )}
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/event">Events</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="contact" smooth={true} offset={-260} duration={500}>
                  Contact Us
                </ScrollLink>
              ) : (
                <Link to="/">Contact Us</Link>
              )}
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right" data-aos="fade-left">
          <h3>OUR SERVICES</h3>
          <ul>
            <li><Link to="/websiteService">Website Designing, Developing & Handling</Link></li>
            <li><Link to="/posterDesigning">Creative Poster Designing</Link></li>
            <li><Link to="/logoDesigning">Innovative Logo Designing</Link></li>
            <li><Link to="/socialMediaPromotion">Social Media Promotion</Link></li>
            <li><Link to="/seoPromotion">SEO Promotions</Link></li>
            <li><Link to="/contentMarketing">Informative Content Creation & Marketing</Link></li>
            <li><Link to="/emailMarketing">Email Marketing</Link></li>
            <li><Link to="/itConsulting">Professional IT Consultants</Link></li>
            <li><Link to="/digitalMarketingService">Digital Marketing</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom" data-aos="zoom-in">
        <p>&copy; 2024 | Designed and Maintained by TCIC IT Wing</p>
      </div>
    </footer>
  );
};

export default Footer;
