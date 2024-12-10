import React, { useState, useEffect } from 'react'; 
import './DigitalMarketing.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const DigitalMarketing = () => {
    const [result, setResult] = useState("");

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Optional: set the duration for animations
    }, []);

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
            {/* Program Details */}
            <div className="programme-details" data-aos="fade-up">
                <h2>Executive Certificate Programme in Strategic Digital Marketing</h2>
                <p>
                    Master the art of strategic digital marketing with our comprehensive executive certificate programme. Gain expertise in diverse areas of marketing to build impactful campaigns and drive growth in today's digital-first world.
                </p>
                <ul>
                    <li>SEO (Search Engine Optimization)</li>
                    <li>PPC (Pay-Per-Click Advertising)</li>
                    <li>Content Marketing</li>
                    <li>Social Media Marketing</li>
                    <li>Email Marketing</li>
                    <li>Influencer Marketing</li>
                    <li>Affiliate Marketing</li>
                    <li>Video Marketing</li>
                    <li>Mobile Marketing</li>
                    <li>Remarketing</li>
                </ul>
            </div>

            {/* Application Form */}
            <div className="programme-form" data-aos="fade-left" data-aos-delay="200">
                <h3>Apply for the Strategic Digital Marketing Programme</h3>
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
                        <option value="Strategic Digital Marketing">
                            Executive Certificate Programme in Strategic Digital Marketing
                        </option>
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
