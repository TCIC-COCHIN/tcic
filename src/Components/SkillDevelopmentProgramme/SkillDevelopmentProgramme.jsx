import React, { useState } from 'react';
import './SkillDevelopmentProgramme.css';

const SkillDevelopmentProgramme = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="skill-development-page">
      {/* Programme Details */}
      <div className="programme-details">
        <h2>Skill Development Programme</h2>
        <p>
          Our Skill Development Programme is designed to enhance your abilities and prepare you
          for a competitive job market. Learn industry-relevant skills from experienced mentors.
        </p>
        <p>
          <strong>Key Highlights:</strong>
        </p>
        <ul>
          <li>Hands-on training with industry experts</li>
          <li>Certification upon course completion</li>
          <li>Job-oriented modules</li>
          <li>Flexible learning schedule</li>
        </ul>
      </div>

      {/* Programme Form */}
      <div className="programme-form">
        <h3>Join the Programme</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="contact">Contact Number</label>
          <input type="tel" id="contact" placeholder="Enter your contact number" required />

          <label htmlFor="course">Select a Course</label>
          <select id="course" required>
            <option value="">Choose...</option>
            <option value="soft-skills">Soft Skills</option>
            <option value="technical-skills">Technical Skills</option>
            <option value="management-skills">Management Skills</option>
          </select>

          <button type="submit">Submit</button>
        </form>
        {formSubmitted && <span>Thank you for registering! We will contact you soon.</span>}
      </div>
    </div>
  );
};

export default SkillDevelopmentProgramme;
