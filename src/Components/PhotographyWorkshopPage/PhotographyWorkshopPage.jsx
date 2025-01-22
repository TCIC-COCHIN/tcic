import React from "react";
import "./PhotographyWorkshopPage.css";
import photo_program_1 from "../../assets/images/anil1.png";

const PhotographyWorkshopPage = () => {
  return (
    <div className="workshop-page">
      {/* Left Section: Content */}
      <div className="workshop-left">
        {/* Main Heading Card */}
        <div className="workshop-card">
          <h1>CINEMATOGRAPHY WORKSHOP</h1>
          <h2>1 Day Basic Photography & Cinematography</h2>
          <div className="instructor-card">
            <h3>Instructor</h3>
            <h4>ANIL VIJAY</h4>
            <p>(Professional Cinematographer)</p>
          </div>
        </div>

        {/* Learning and Highlights Section */}
        <div className="workshop-sections">
          <div className="workshop-card hover-card">
            <h3>What You'll Learn</h3>
            <ul>
              <li>Camera Setting Basics</li>
              <li>Camera Composition Techniques</li>
              <li>Lighting Mastery</li>
            </ul>
          </div>
          <div className="workshop-card hover-card">
            <h3>Workshop Highlights</h3>
            <ul>
              <li>Hands-on Practical Sessions</li>
              <li>Interactive Discussions</li>
              <li>Q&A with Experienced Photographer</li>
              <li>Internship Assistance</li>
            </ul>
          </div>
        </div>

        {/* Details Button Section */}
        <div className="workshop-button-container">
          <button className="details-button">
            For Registration: 8891241696 <br />
            Entry Fee: ₹3000/- (Lunch, Tea Snacks Included) <br />
            Date: January 11th, 2025 <br />
            Time: 9 AM to 5 PM
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="workshop-right">
        <img
          src={photo_program_1}
          alt="Anil Vijay"
          className="workshop-image"
        />
      </div>
    </div>
  );
};

export default PhotographyWorkshopPage;
