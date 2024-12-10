import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './KidsAfterSchool.css';
import programImage from '../../assets/images/kidie.jpg'; // Replace with the actual image path

const KidsAfterSchool = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
    }, []);

    return (
        <div className="kids-afterschool-container">
            <h1 
                className="title" 
                data-aos="fade-up" // AOS animation type
            >
                INFOTAINMENT-NEXT LEVEL
            </h1>
            <img 
                src={programImage} 
                alt="Kids After School Program" 
                className="program-image" 
                data-aos="zoom-in" // AOS animation type
            />
            <p 
                className="details" 
                data-aos="fade-right" // AOS animation type
            >
                Our Kids After School Program offers engaging activities, educational support, British English accent training, and a safe environment for children to learn and grow. Designed with fun and learning in mind, this program is perfect for enhancing your child's after-school hours.
            </p>
            <button 
                className="navigate-button" 
                onClick={() => window.location.href='/studentCarePage'}
                data-aos="fade-up" // AOS animation type
            >
                Know More
            </button>
        </div>
    );
};

export default KidsAfterSchool;
