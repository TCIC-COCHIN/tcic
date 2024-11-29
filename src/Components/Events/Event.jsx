import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Event.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Event = () => {
  const events = [
    { title: 'Time Management', description: 'Explore More >>', path: '/time-management' },
    { title: 'Stress Handling', description: 'Explore More >>', path: '/stress-handling' },
    { title: 'Powerful Leader', description: 'Explore More >>', path: '/powerful-leader' },
    { title: 'Leadership Programs for Schools', description: 'Explore More >>', path: '/leadership-schools' },
    { title: 'Leadership Programs for Colleges', description: 'Explore More >>', path: '/leadership-colleges' },
    { title: 'Positive Parenting Program', description: 'Explore More >>', path: '/positive-parenting' },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Optional: set the duration for animations
  }, []);

  return (
    <div className="event-page">
      <header className="event-header" data-aos="fade-down">
        <h1>Our Events</h1>
      </header>

      <div className="event-details">
        {events.map((event, index) => (
          <div className="event-card" key={index} data-aos="fade-up" data-aos-delay={`${index * 200}`}>
            <h2>{event.title}</h2>
            <Link to={event.path}>{event.description}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
