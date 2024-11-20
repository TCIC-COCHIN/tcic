import React, { useState } from 'react';
import './FullStackDevelopment.css';

const FullStackDevelopment = () => {
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
        <div className="fullstack-development-page">
            {/* Programme Details */}
            <div className="programme-details">
                <h2>Full Stack Development Programme</h2>
                <p>
                    Become an expert in building web applications from scratch! Our Full Stack Development programme focuses on
                    industry-demanded skills with hands-on projects using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                </p>
                <ul>
                    <li>Master front-end technologies like React.js, Redux, and Bootstrap.</li>
                    <li>Get hands-on experience with back-end technologies like Node.js, Express.js, and MongoDB.</li>
                    <li>Develop RESTful APIs and integrate third-party services.</li>
                    <li>Build and deploy real-world projects to showcase your expertise.</li>
                </ul>
            </div>

            {/* Application Form */}
            <div className="programme-form">
                <h3>Apply for Full Stack Development</h3>
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
                        <option value="Digital Marketing">Digital Marketing</option>
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

export default FullStackDevelopment;
