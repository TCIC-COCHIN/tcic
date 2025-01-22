import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TalentPage.css';
import transparentHeadingImage from '../../assets/images/talt.png'; // Replace with your image path

const TalentPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="talent-page-container">
      <div className="content-wrapper" data-aos="fade-up">
        <img
          src={transparentHeadingImage}
          alt="Sell Your Talent"
          className="heading-image"
          data-aos="zoom-in"
        />
        <div className="content" data-aos="fade-up">
          <p>
            <strong>𝗔𝗕𝗜𝗡 𝗝𝗢𝗛𝗡, 𝗥𝗢𝗬 𝗖𝗛𝗔𝗖𝗞𝗢, 𝗦𝗔𝗥𝗔𝗧𝗛 𝗦 𝗞𝗨𝗥𝗨𝗣</strong> are brand-making mentors coming together for a
            <strong> 3-day immersive training program</strong> tailored for young graduates.
          </p>

          <div className="program-details" data-aos="fade-right">
            <p><strong>Date:</strong> December 27, 28, 29, 2024</p>
            <p><strong>Time:</strong> 7:30 AM - 7:30 PM</p>
            <p><strong>Venue:</strong> TCIC Kochi</p>
          </div>

          <div className="training-outline">
            <h2 data-aos="fade-left">What You Will Learn:</h2>
            <p data-aos="fade-up">
              Most graduates struggle to find jobs that match their aspirations or provide a rewarding income. This program is designed to bridge that gap, equipping you with the skills and strategies needed to turn your talents into opportunities, achieve your dream career, and secure a high-paying job.
            </p>
            <h3 data-aos="fade-right">Day 1: Conflict Resolution Secrets</h3>
            <p>The secret to resolving conflicts (Handling mental struggles): Training to professionally manage all conflicts and difficult situations.</p>
            <ul data-aos="fade-up">
              <li>The Smart Work you do.. the MORE you make.</li>
              <li>Build a group of Talents.</li>
              <li> More Control 
              </li>
              <li>Types of self-branding assets.</li>
            </ul>

            <h3 data-aos="fade-right">Day 2: Clearly Set Your Vision</h3>
            <p>Where do you need to go? Let's put up a sign for the bus that will take you to your future.






</p>
            
            <ul data-aos="fade-up">
              <li>Set your 2035 Target.</li>
              <li>Your 2028 Vision.</li>
              <li>Find your integrator.</li>
              <li>Be a Visionary and Make an New Identity.</li>
            </ul>

            <h3 data-aos="fade-right">Day 3: Sell Talent and Cash In on Goals</h3>
            <p>It's not enough to have a goal... How do you get there? Let's figure out how to turn your skills into cash and reach your goal.</p>
            <ul data-aos="fade-up">
              <li>Premium Strategies Secrets.</li>
            </ul>
          </div>

          <p className="highlight" data-aos="zoom-in">
            Limited to the first 100 participants only. Register now!
          </p>

          <p data-aos="fade-up"><strong>Contact:</strong> 96337 60759</p>
          <a
            href="https://forms.gle/4tRp2mDwwmFVvo6t6"
            target="_blank"
            rel="noopener noreferrer"
            className="register-btn"
            data-aos="zoom-in"
          >
            For Registration Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default TalentPage;
