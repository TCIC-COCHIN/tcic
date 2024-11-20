import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/log.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className="navbar">
        {/* Home */}
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
              Home
            </ScrollLink>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>

        {/* The Institute */}
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="about" smooth={true} offset={-260} duration={500}>
              The Institute
            </ScrollLink>
          ) : (
            <Link to="/">The Institute</Link>
          )}
        </li>

        {/* Programmes */}
        <li className="dropdown">
          Programmes
          <ul className="dropdown-menu">
            <li><Link to="/fullstack-development">Full Stack Development</Link></li>
            <li><Link to="/digitalMarketing">Premium Digital Marketing (All in One)</Link></li>
            <li><Link to="/internationalHr">International HR</Link></li>
            <li><Link to="/skillDevelopment">Skill Development Programme</Link></li>
          </ul>
        </li>

        {/* Gallery */}
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="campus" smooth={true} offset={-260} duration={500}>
              Gallery
            </ScrollLink>
          ) : (
            <Link to="/">Gallery</Link>
          )}
        </li>

        {/* Services */}
        <li className="dropdown">
          Services
          <ul className="dropdown-menu">
            <li><Link to="/websiteService">Website Designing, Developing & Handling</Link></li>
            <li><Link to="/posterDesigning">Creative Poster Designing</Link></li>
            <li><Link to="/posterDesigning">Innovative Logo Designing</Link></li>
            <li><Link to="/socialMediaPromotion">Social Media Promotion</Link></li>
            <li><Link to="/seoPromotion">SEO Promotions</Link></li>
            <li><Link to="/contentMarketing"> Informative Content Creation & Marketing</Link></li>
            <li><Link to="/emailMarketing">Email Marketing</Link></li>
            <li><Link to="/itConsulting">Professional IT Consultants</Link></li>
            <li><Link to="/digitalMarketingService">Digital Marketing</Link></li>
           
            
          </ul>
        </li>

        {/* Careers */}
        <li>
          <Link to="/careers">Careers</Link>
        </li>

        {/* Contact Us */}
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
    </nav>
  );
};

export default Navbar;
