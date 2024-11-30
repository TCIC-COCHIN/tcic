import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Event.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

// Import images from the assets folder
import TimeManagementImage from "../../assets/images/bg2.jpg";
import StressHandlingImage from "../../assets/images/bg1.jpg";
import PowerfulLeaderImage from "../../assets/images/bg3.jpg";
import LeadershipSchoolsImage from "../../assets/images/bg5.jpg";
import LeadershipCollegesImage from "../../assets/images/banner.jpeg";
import PositiveParentingImage from "../../assets/images/blue.jpg";
import PositiveParentingImage1 from "../../assets/images/blue1.jpg";


const Event = () => {
  const events = [
    { 
      title: "Time Management", 
      description: "Explore More >>", 
      path: "/time-management", 
      image: TimeManagementImage 
    },
    { 
      title: "Stress Handling", 
      description: "Explore More >>", 
      path: "/stress-handling", 
      image: StressHandlingImage 
    },
    { 
      title: "Powerful Leader", 
      description: "Explore More >>", 
      path: "/powerful-leader", 
      image: PowerfulLeaderImage 
    },
    { 
      title: "Leadership Programs for Schools", 
      description: "Explore More >>", 
      path: "/leadership-schools", 
      image: LeadershipSchoolsImage 
    },
    { 
      title: "Leadership Programs for Colleges", 
      description: "Explore More >>", 
      path: "/leadership-colleges", 
      image: LeadershipCollegesImage 
    },
    { 
      title: "Positive Parenting Program", 
      description: "Explore More >>", 
      path: "/positive-parenting", 
      image: PositiveParentingImage 
    },
    { 
      title: "Self Branding and International Career Grooming for Young Graduates", 
      description: "Explore More >>", 
      path: "/selfBranding", 
      image: PositiveParentingImage1
    },
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
          <div
            className="event-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
            style={{
              backgroundImage: `url(${event.image})`,
            }}
          >
            <div className="card-content">
              <h2>{event.title}</h2>
              <Link to={event.path}>{event.description}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
