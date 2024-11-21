import React, { useState } from 'react';
import './DigitalMarketing.css';

const DigitalMarketing = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Submitting...");
        const formData = new FormData(event.target);

        formData.append("access_key", "b87c59ad-9a7f-48e4-8044-50bfcddfa681"); // Replace with your actual key.

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.error("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="digital-marketing-page">
            {/* Programme Details */}
            <div className="programme-details">
                <h2>Digital Marketing Programme</h2>
                <p>
                    Become a digital marketing expert with hands-on training in SEO, social media marketing, email marketing, and analytics. Our program equips you with the skills to run successful marketing campaigns in a competitive landscape.
                </p>
                <ul>
                    <li>Learn SEO techniques to improve website visibility.</li>
                    <li>Master social media platforms like Facebook, Instagram, and LinkedIn.</li>
                    <li>Understand the fundamentals of paid ad campaigns (Google Ads, Facebook Ads).</li>
                    <li>Analyze marketing performance using Google Analytics and other tools.</li>
                </ul>
            </div>

            {/* Application Form */}
            <div className="programme-form">
                <h3>Apply for Digital Marketing</h3>
                <form onSubmit={onSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="Enter your full name" required />

                    <label>Email ID</label>
                    <input type="email" name="email" placeholder="Enter your email ID" required />

                    <label>Contact Number</label>
                    <input type="tel" name="phone" placeholder="Enter your contact number" required />

                    <label>Select Programme</label>
                    <select name="programme" required>
                    <option value="">Choose...</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Digital Marketing">Premium Digital Marketing</option>
                        <option value="International HR">International HR</option>
                    </select>

                    <button type="submit" className="btn dark-btn">
                        Submit
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default DigitalMarketing;
