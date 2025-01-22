import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router
import emailjs from 'emailjs-com';
import './ApplyNow.css';

const ApplyNow = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        address: '',
        role: '',
        resumeLink: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate(); // React Router navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setIsSubmitting(true);

        try {
            const templateParams = {
                fullName: formData.fullName,
                email: formData.email,
                contactNumber: formData.contactNumber,
                address: formData.address,
                role: formData.role,
                resumeLink: formData.resumeLink,
            };

            const response = await emailjs.send(
                'service_l2yrx1l', // Replace with your Service ID
                'template_itqjlvo', // Replace with your Template ID
                templateParams,
                'gcIwoM69MGyBw53E4' // Replace with your Public Key
            );
            

            if (response.status === 200) {
                alert('Form submitted successfully!');
                navigate('/'); // Redirect to the home page
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('An error occurred while submitting the form.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="applynow-container">
            <h2 className="applynow-title">Apply Here</h2>
            <form onSubmit={handleSubmit} className="applynow-form">
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="contactNumber">Contact Number</label>
                <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="address">Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="4"
                ></textarea>

                <label htmlFor="role">Role Applied For</label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="resumeLink">Resume Link (Google Drive, Dropbox, etc.)</label>
                <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    placeholder="https://drive.google.com/your-resume-link"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
    );
};

export default ApplyNow;
