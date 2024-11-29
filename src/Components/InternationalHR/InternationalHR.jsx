import React, { useState, useEffect } from 'react';
import './InternationalHR.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const InternationalHr = () => {
    const [result, setResult] = useState("");

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Optional: set the duration for animations
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Submitting...");
        const formData = new FormData(event.target);
        formData.append("access_key", "your-access-key");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setResult(data.success ? "Form Submitted Successfully" : data.message);
        if (data.success) event.target.reset();
    };

    return (
        <div className="international-hr-page">
            {/* Programme Details with Animation */}
            <div className="programme-details" data-aos="fade-up">
                <h2>International HR Management Program</h2>
                <p>
                Step into the world of global HR with TCIC’s specialized International HR course. Designed to equip you with the skills and knowledge to excel in diverse and dynamic workplaces, ensuring you are prepared for the demands of an international career.

                </p>
                <ul>
                    <li>Comprehensive training on Payroll, Recruitment, and Onboarding.</li>
                    <li>Insights into Labor Laws and Employee Relations.
                    </li>
                    <li>Employee Engagement Strategies</li>
                    <li>Practical knowledge of Performance Appraisals and Talent Management.
                    </li>
                    <li>Guidance from industry experts and experienced trainers.</li>
                </ul>
            </div>

            {/* Application Form with Animation */}
            <div className="programme-form" data-aos="fade-left" data-aos-delay="200">
                <h3>Apply for International HR</h3>
                <form onSubmit={onSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="name" required placeholder="Enter your name" />

                    <label>Email</label>
                    <input type="email" name="email" required placeholder="Enter your email" />

                    <label>Contact Number</label>
                    <input type="tel" name="phone" required placeholder="Enter your phone number" />

                    <label>Select Program</label>
                    <select name="programme" required>
                        <option value="">Choose...</option>
                        <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="International HR">International HR</option>
                    </select>

                    <button type="submit" className="btn dark-btn">Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default InternationalHr;
