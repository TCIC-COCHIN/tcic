import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './SchoolCarePage.css';
import fun_activities from '../../assets/images/main2.png';
import robotics_icon from '../../assets/images/scc2.png';
import creative_learning_icon from '../../assets/images/scc3.png';
import afterschool_icon from '../../assets/images/scc4.png';
import { Link } from 'react-router-dom';

const SchoolCarePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with custom options
  }, []);

  return (
    <div className='schoolcare-page'>
      <section className='intro' data-aos="fade-down">
        <h1>Unlock Your Child’s Future!</h1>
        <p>Boost Your Child’s Skills in Technology</p>
        <p>Join Us for After-School Fun & Learning!</p>
      </section>

      <section className='offerings'>
        <div className='offering' data-aos="fade-up">
          <img src={robotics_icon} alt="Robotics" />
          <h3>British English Accent Training</h3>
          <p>Engage in hands-on activities that inspire creativity and innovation.</p>
        </div>
        <div className='offering' data-aos="fade-up" data-aos-delay="200">
          <img src={creative_learning_icon} alt="Creative Learning" />
          <h3>Fun Robotics & AI Activities</h3>
          <p>Let your child dive into the world of robotics and artificial intelligence!</p>
        </div>
        <div className='offering' data-aos="fade-up" data-aos-delay="400">
          <img src={afterschool_icon} alt="After School Fun" />
          <h3>Interactive & Engaging Projects</h3>
          <p>Interactive activities that bring learning to life in a fun and engaging way.</p>
        </div>
      </section>

      <section className='courses' data-aos="zoom-in">
        <h2>What We Offer</h2>
        <div className='course-list'>
          <ul>
           <li data-aos="fade-right" data-aos-delay="700">British Accent Training</li>
            <li data-aos="fade-right" data-aos-delay="100">Website Development</li>
            <li data-aos="fade-right" data-aos-delay="200">Graphic Designing</li>
            <li data-aos="fade-right" data-aos-delay="300">Digital Marketing</li>
            <li data-aos="fade-right" data-aos-delay="400">AI</li>
            <li data-aos="fade-right" data-aos-delay="500">Robotics</li>
            <li data-aos="fade-right" data-aos-delay="600">Mobile App Development</li>
            <li data-aos="fade-right" data-aos-delay="700">Custom Software</li>
            
          </ul>
        </div>
      </section>

      <section className='fun-activities' data-aos="flip-up">
        <h2>Fun Activities</h2>
        <img src={fun_activities} alt="Fun Activities" data-aos="zoom-in" />
        <p data-aos="fade-up">We believe in learning through play! Our fun activities allow your child to explore while having a great time.</p>
      </section>

      <Link to="/contact" className='cta-button' data-aos="fade-up" data-aos-delay="500">
        Join Now for an Exciting Journey!
      </Link>
    </div>
  );
};

export default SchoolCarePage;
