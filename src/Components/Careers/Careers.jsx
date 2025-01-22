import React, { useState } from 'react';
import './Careers.css';
import { Link } from 'react-router-dom';
import noJobsImage from '../../assets/images/car.jpg'; // Background image for the card

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    const jobOpenings = [
        {
            id: 1,
            role: 'Chief Coordinator',
            position: 'Chief Coordinator 3-5 years',
            payScale: '₹12,000 - ₹22,000 per month',
            keySkills: ['Excellent Interpersonal Skills', 'Communication Skills'],
            responsibilities: [
                'Lead and coordinate social development programs.',
                'Strategize and ensure effective project implementation.',
                'Provide leadership to the team for TCIC initiatives.',
            ],
            qualifications: [
                'MBA / Masters in Public Administration.',
                'Public Policy, Development Studies, Sociology, or Social Work.',
            ],
            experience: [
                '3-5 years in project management.',
                'Preferred background in educational and social development sectors.',
            ],
        },
        { 
            id: 2, 
            role: 'Operations Manager', 
            position: 'Operations Manager (MBA with 5 + years Experience in operations or a similar role)', 
            payScale: '₹18,000 - ₹32,000 per month', 
            keySkills: ['Strong Communication', 'Execute strategies', 'Lead teams to enhance performance'] 
        },
        // Other job openings...
        { id: 3, role: 'Kids Academic Director', position: 'Kids Academic Director 5 + years experience in similar role (Females, MSW preferred)', payScale: '₹60,000 per month', keySkills: ['Chief Coordination and Mentoring of Teachers, Kids and Parents '] },
        { id: 4, role: 'Business Development Excecutive', position: 'Business Development Excecutive 0-2 years (Females preferred)', payScale: '₹12,000 - ₹22,000 per month', keySkills: ['Excellent Interpersonal Skills','Communication Skills'] },
        { id: 5, role: 'Front Office Receptionist', position: 'Fresher - Front Office Receptionist', payScale: '₹20,000 - ₹28,000 per month', keySkills: ['Communication', 'Multitasking', 'Front Office Management'] },
        { id: 6, role: 'Guest Relation Executive', position: 'Fresher - Guest Relation Executive', payScale: '₹15,000 - ₹22,000 per month', keySkills: ['Communication Skills'] },
        { id: 7, role: 'HR Executive', position: 'Fresher - HR Executive', payScale: '₹18,000 - ₹26,000 per month', keySkills: ['Recruitment and Onboarding', 'Communication', 'Employee Relations'] },
        { id: 8, role: 'Front Office Jr. Manager', position: 'Fresher - Front Office Jr. Manager', payScale: '₹18,000 - ₹26,000 per month', keySkills: ['Front Office Management', 'Team Leadership', 'Communication'] },
        { id: 9, role: 'Jr. Accountant', position: 'Fresher - Jr. Accountant', payScale: '₹18,000 - ₹22,000 per month', keySkills: ['Accounting Software (Tally, QuickBooks)', 'Financial Analysis', 'Attention to Detail'] },
        { id: 10, role: 'Call Centre Executive', position: 'Fresher - Call Centre Executive', payScale: '₹15,000 - ₹22,000 per month', keySkills: ['Communication', 'Customer Support', 'Telecalling Skills'] },
        { id: 11, role: 'Digital Marketing', position: 'Fresher - Digital Marketing', payScale: '₹12,000 - ₹22,000 per month', keySkills: ['Social Media Marketing', 'SEO Basics', 'Creativity', 'Communication'] },
        { id: 12, role: 'Software Developer', position: 'Fresher - Software Developer', payScale: '₹22,000 - ₹35,000 per month', keySkills: ['Programming (JavaScript, Python, or C++)', 'Problem-Solving', 'Team Collaboration', 'Communication'] },
        { id: 13, role: 'Graphic Designer', position: 'Fresher - Graphic Designer', payScale: '₹15,000 - ₹26,000 per month', keySkills: ['Design Tools (Adobe Photoshop, Illustrator)', 'Creativity', 'Attention to Detail'] },
    ];

    const handleKnowMoreClick = (job) => {
        setSelectedJob(job);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

    return (
        <div className="careers-container">
            <h2 className="careers-title">This is your Moment to Connect, Innovate and Grow into Greatness</h2>
            <div className="cards-container">
                {jobOpenings.map((job) => (
                    <div key={job.id} className="job-card">
                        <div className="job-card-background">
                            <img src={noJobsImage} alt="Job background" className="job-card-image" />
                            <div className="job-card-role-overlay">
                                <span className="job-card-role">{job.role}</span>
                            </div>
                        </div>
                        <div className="job-card-content">
                            <h3 className="job-card-title">{job.position}</h3>
                            <p className="job-card-payScale"><strong>Pay Scale:</strong> {job.payScale}</p>
                            <h4 className="job-card-skills-title">Key Skills</h4>
                            <ul>
                                {job.keySkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                            {job.id === 1 ? (
                                <button className="know-more-button" onClick={() => handleKnowMoreClick(job)}>
                                    Know More
                                </button>
                            ) : (
                                <Link to="/applynow" className="apply-button-link">
                                    <button className="apply-button">Apply Now</button>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Job Details */}
            {selectedJob && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedJob.role}</h2>
                        <h3>{selectedJob.position}</h3>
                        <p><strong>Pay Scale:</strong> {selectedJob.payScale}</p>
                        <h4>Responsibilities</h4>
                        <p>
                            {selectedJob.responsibilities.map((res, index) => (
                                <li key={index}>{res}</li>
                            ))}
                        </p>
                        <h4>Qualifications</h4>
                        <p>
                            {selectedJob.qualifications.map((qual, index) => (
                                <li key={index}>{qual}</li>
                            ))}
                        </p>
                        <h4>Experience</h4>
                        <p>
                            {selectedJob.experience.map((exp, index) => (
                                <li key={index}>{exp}</li>
                            ))}
                        </p>
                        <p><strong>Send your resume to:</strong> +91 81379 62123</p>
                        <p><strong>Last date to apply:</strong> 11/01/2025</p>
                        <button className="close-modal-button" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Careers;
