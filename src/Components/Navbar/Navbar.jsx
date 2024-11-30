import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logotrans.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const [sidebarSubmenu, setSidebarSubmenu] = useState(null); // State to track open submenu
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleSidebarSubmenu = (menu) => {
    setSidebarSubmenu(sidebarSubmenu === menu ? null : menu);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      
      {/* Hamburger Menu Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      {/* Navbar Items for Desktop */}
      <ul className={`navbar-items ${menuOpen ? 'hidden' : ''}`}>
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

        {/* Programmes Dropdown */}
        <li className={`dropdown ${sidebarSubmenu === 'programmes' ? 'active' : ''}`}>
  <span onClick={() => toggleSidebarSubmenu('programmes')}>Programs</span>
  {sidebarSubmenu === 'programmes' && (
    <ul className="dropdown-menu">
      <li>
        <Link to="/fullstack-development" onClick={() => setMenuOpen(false)}>
          Full Stack Development
        </Link>
      </li>
      <li>
        <Link to="/digitalMarketing" onClick={() => setMenuOpen(false)}>
          Premium Digital Marketing
        </Link>
      </li>
      <li>
        <Link to="/internationalHr" onClick={() => setMenuOpen(false)}>
          International HR
        </Link>
      </li>
      <li>
        <Link to="/skillDevelopment" onClick={() => setMenuOpen(false)}>
          Skill Development Program
        </Link>
      </li>
      <li><Link to="/event" onClick={() => setMenuOpen(false)}>Events</Link></li>
      <li><Link to="/news" onClick={() => setMenuOpen(false)}>News</Link></li>

    </ul>
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

        {/* Services Dropdown */}
        <li className={`dropdown ${sidebarSubmenu === 'services' ? 'active' : ''}`}>
  <span onClick={() => toggleSidebarSubmenu('services')}>Services</span>
  {sidebarSubmenu === 'services' && (
    <ul className="dropdown-menu">
      <li>
        <Link to="/websiteService" onClick={() => setMenuOpen(false)}>
          Website Designing, Developing & Handling
        </Link>
      </li>
      <li>
        <Link to="/posterDesigning" onClick={() => setMenuOpen(false)}>
          Creative Poster Designing
        </Link>
      </li>
      <li>
        <Link to="/logoDesigning" onClick={() => setMenuOpen(false)}>
          Innovative Logo Designing
        </Link>
      </li>
      <li>
        <Link to="/socialMediaPromotion" onClick={() => setMenuOpen(false)}>
          Social Media Promotion
        </Link>
      </li>
      <li>
        <Link to="/seoPromotion" onClick={() => setMenuOpen(false)}>
          SEO Promotions
        </Link>
      </li>
      <li><Link to="/contentMarketing" onClick={() => setMenuOpen(false)}> Informative Content Creation & Marketing</Link></li>
            <li><Link to="/emailMarketing" onClick={() => setMenuOpen(false)}>Email Marketing</Link></li>
            <li><Link to="/itConsulting" onClick={() => setMenuOpen(false)}>Professional IT Consultants</Link></li>
            <li><Link to="/digitalMarketingService" onClick={() => setMenuOpen(false)}>Digital Marketing</Link></li>

    </ul>
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

      {/* Sidebar Menu for Mobile */}
      <div className={`sidebar ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            {location.pathname === '/' ? (
              <ScrollLink to="about" smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>
                The Institute
              </ScrollLink>
            ) : (
              <Link to="/">The Institute</Link>
            )}
          </li>

          {/* Programmes Dropdown */}
          <li className={`dropdown ${sidebarSubmenu === 'programmes' ? 'active' : ''}`}>
            <span onClick={() => toggleSidebarSubmenu('programmes')}>Programs  ↓ </span>
            {sidebarSubmenu === 'programmes' && (
              <ul className="dropdown-menu">
                <li><Link to="/fullstack-development" onClick={() => setMenuOpen(false)}>Full Stack Development</Link></li>
                <li><Link to="/digitalMarketing" onClick={() => setMenuOpen(false)}>Premium Digital Marketing </Link></li>
                <li><Link to="/internationalHr" onClick={() => setMenuOpen(false)}>International HR</Link></li>
                <li><Link to="/skillDevelopment" onClick={() => setMenuOpen(false)}>Skill Development Programme</Link></li>
                <li><Link to="/event"onClick={() => setMenuOpen(false)}>Events</Link></li>
                <li><Link to="/news" onClick={() => setMenuOpen(false)}>News</Link></li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li className={`dropdown ${sidebarSubmenu === 'services' ? 'active' : ''}`}>
            <span onClick={() => toggleSidebarSubmenu('services')}>Services  ↓ </span>
            {sidebarSubmenu === 'services' && (
              <ul className="dropdown-menu">
                <li><Link to="/websiteService" onClick={() => setMenuOpen(false)}>Website Services</Link></li>
                <li><Link to="/posterDesigning" onClick={() => setMenuOpen(false)}>Creative Poster Designing</Link></li>
                <li><Link to="/logoDesigning" onClick={() => setMenuOpen(false)}>Innovative Logo Designing</Link></li>
                <li><Link to="/socialMediaPromotion" onClick={() => setMenuOpen(false)}>Social Media Promotion</Link></li>
                <li><Link to="/seoPromotion" onClick={() => setMenuOpen(false)}>SEO Promotions</Link></li>
                <li><Link to="/contentMarketing" onClick={() => setMenuOpen(false)}>Content Creation & Marketing</Link></li>
            <li><Link to="/emailMarketing" onClick={() => setMenuOpen(false)}>Email Marketing</Link></li>
            <li><Link to="/itConsulting" onClick={() => setMenuOpen(false)}>Professional IT Consultants</Link></li>
            <li><Link to="/digitalMarketingService" onClick={() => setMenuOpen(false)}>Digital Marketing</Link></li>

              </ul>
            )}
          </li>
          <li><Link to="/event"onClick={() => setMenuOpen(false)}>Events</Link></li>
                <li><Link to="/news" onClick={() => setMenuOpen(false)}>News</Link></li>
              <li>  <Link to="/galleryview" onClick={() => setMenuOpen(false)}>Gallery</Link></li>

          <li>
            <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>

          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
