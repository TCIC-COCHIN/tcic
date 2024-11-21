import React, { useState } from 'react';
import './InternationalHR.css';

const InternationalHr = () => {
    const [result, setResult] = useState("");

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
            <div className="programme-details">
                <h2>International HR Management Programme</h2>
                <p>
                    Equip yourself with advanced skills and global HR practices. This program is tailored to prepare
                    professionals for international HR roles.
                </p>
                <ul>
                    <li>Global Recruitment and Talent Acquisition</li>
                    <li>Cross-Cultural Management</li>
                    <li>Employee Engagement Strategies</li>
                    <li>Compensation and Benefits on a Global Scale</li>
                    <li>HR Compliance and International Labor Laws</li>
                </ul>
            </div>
            <div className="programme-form">
                <h3>Apply for International HR</h3>
                <form onSubmit={onSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="name" required placeholder="Enter your name" />

                    <label>Email</label>
                    <input type="email" name="email" required placeholder="Enter your email" />

                    <label>Contact Number</label>
                    <input type="tel" name="phone" required placeholder="Enter your phone number" />

                    <label>Select Programme</label>
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
