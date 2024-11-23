import React from 'react';
import './Footer.css'; // Import the CSS file
import logo from '../../assets/images/logotrans.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Sreelakshmi Logo" className="logo" />
          <h4 className="company-name">
            THIS IS YOUR MOMENT TO CONNECT, INNOVATE AND GROW INTO GREATNESS!
            <br />
            CST Brothers Provincial Campus,
            Sea port Airport Road,
            <br />
            Opp. Bharata Mata College,
            Near Chittilappilly Square,
            <br />
            Thrikkakara, Kochi-682021
          </h4>
          <p>Ph. no: 88485 46357</p>
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
            <a href="https://wa.me/918848546357" className="social-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <h3>QUICK LINKS</h3>
          <ul className="navbar">
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
              {location.pathname === '/' ? (
                <ScrollLink to="campus" smooth={true} offset={-260} duration={500}>
                  Gallery
                </ScrollLink>
              ) : (
                <Link to="/">Gallery</Link>
              )}
            </li>
            <li>
              <Link to="/careers">Careers</Link>
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

        <div className="footer-right">
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

      <div className="footer-bottom">
        <p>&copy; 2024 | Designed and Maintained by TCIC IT Wing</p>
      </div>
    </footer>
  );
};

export default Footer;
