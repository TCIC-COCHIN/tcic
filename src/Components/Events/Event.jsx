import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Event.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

// Import images from the assets folder
import TimeManagementImage from "../../assets/images/timemanagement.jpg";
import StressHandlingImage from "../../assets/images/stresshandlinggg.jpg";
import PowerfulLeaderImage from "../../assets/images/powlead.jpg";
import LeadershipSchoolsImage from "../../assets/images/schoollead.jpg";
import LeadershipCollegesImage from "../../assets/images/banner.jpeg";
import PositiveParentingImage from "../../assets/images/positiveparenting.jpg";
import PositiveParentingImage1 from "../../assets/images/SELFBRANDING.jpg";
import PositiveParentingImage2 from "../../assets/images/selltalent.jpg";
import PositiveParentingImage3 from "../../assets/images/pyschoo.jpg";
import PositiveParentingImage4 from "../../assets/images/CINEMATOGRAPHY.jpg";
import PositiveParentingImage5 from "../../assets/images/betterkids.jpg";
import PositiveparentingImage6 from "../../assets/images/tcicjrlifie.jpg"
import PositiveparentingImage7 from "../../assets/images/kidsass.jpg"
import PositiveparentingImage8 from "../../assets/images/skilledjr.jpg"
import PositiveparentingImage9 from "../../assets/images/skiledsr.jpg"
import PositiveparentingImage10 from "../../assets/images/toursimsbg.jpg"
import PositiveparentingImage11 from "../../assets/images/adol.jpg"
import PositiveparentingImage12 from "../../assets/images/YOUTH.jpg"
import PositiveparentingImage13 from "../../assets/images/ADOLL.jpg"
import PositiveparentingImage14 from "../../assets/images/PUBLICPRO.jpg"
import PositiveparentingImage15 from "../../assets/images/SOLUTION.jpg"
import PositiveparentingImage16 from "../../assets/images/COACHING.jpg"
import PositiveparentingImage17 from "../../assets/images/CORP.jpg"


const Event = () => {
  const events = [
    
    
    { 
      title: "BETTER KIDS", 
      description: "Explore More >>", 
      path: "/BetterKids", 
      image: PositiveParentingImage5
    },
    { 
      title: "TCIC JUNIOR LIFIE", 
      description: "Explore More >>", 
      path: "/tcicJuniorLifie", 
      image: PositiveparentingImage6
    },
    { 
      title: "KIDS ASSESSMENT", 
      description: "Explore More >>", 
      path: "/kidsAssessment", 
      image: PositiveparentingImage7
    },
    
    { 
      title: "SKILL-Ed JUNIOR", 
      description: "Explore More >>", 
      path: "/skillEd", 
      image: PositiveparentingImage8
    },
    { 
      title: "SKILL-Ed SENIOR", 
      description: "Explore More >>", 
      path: "/skilledSenior", 
      image: PositiveparentingImage9
    },
    { 
      title: "HEALTH TOURSIM FOR GROUP OF FOREIGNERS", 
      description: "Explore More >>", 
      path: "/toursim", 
      image: PositiveparentingImage10
    },
    { 
      title: "FAMILY MENTORING", 
      description: "Explore More >>", 
      path: "/familyMentoring", 
      image: PositiveparentingImage11
    },
    { 
      title: "GROOMING YOUTH FOR SUCCESS ", 
      description: "Explore More >>", 
      path: "/groomingYouth", 
      image: PositiveparentingImage12
    },
    { 
      title: "OUR SERVICES IN ADOLESCENT SUCCESS ", 
      description: "Explore More >>", 
      path: "/adolescent", 
      image: PositiveparentingImage13
    },
    { 
      title: "PUBLIC PROGRAMS ", 
      description: "Explore More >>", 
      path: "/publicPrograms", 
      image: PositiveparentingImage14
    },
    { 
      title: "EVERY PROBLEM HAS A SOLUTION", 
      description: "Explore More >>", 
      path: "/solution", 
      image: PositiveparentingImage15
    },
    { 
      title: "OUR SERVICES IN GENERAL CONSULTATION & COACHING", 
      description: "Explore More >>", 
      path: "/generalConsultation", 
      image: PositiveparentingImage16
    },
    { 
      title: "OUR SERVICES IN CORPORATE", 
      description: "Explore More >>", 
      path: "/corporateServices", 
      image: PositiveparentingImage17
    },
    { 
      title: "PSYCHOMETRIC ANALYSIS AND CAREER PLANNING", 
      description: "Explore More >>", 
      path: "/Jobin", 
      image: PositiveParentingImage3
    },
    { 
      title: "CINEMATOGRAPGHY PREMIUM WORKSHOP", 
      description: "Explore More >>", 
      path: "/Photo", 
      image: PositiveParentingImage4
    },
    { 
      title: "SELL YOUR TALENT MAKE THE MONEY", 
      description: "Explore More >>", 
      path: "/sellYourTalent", 
      image: PositiveParentingImage2
    },
    { 
      title: "SELF BRANDING AND INTERNATIONAL CAREER GROOMING FOR YOUNG GRADUATES", 
      description: "Explore More >>", 
      path: "/selfBranding", 
      image: PositiveParentingImage1
    },
    { 
      title: "TIME MANAGEMENT", 
      description: "Explore More >>", 
      path: "/time-management", 
      image: TimeManagementImage 
    },
    { 
      title: "STRESS HANDLING", 
      description: "Explore More >>", 
      path: "/stress-handling", 
      image: StressHandlingImage 
    },
    { 
      title: "POWERFUL LEADER", 
      description: "Explore More >>", 
      path: "/powerful-leader", 
      image: PowerfulLeaderImage 
    },
    { 
      title: "LEADRSHIP PROGRAMS FOR SCHOOLS", 
      description: "Explore More >>", 
      path: "/leadership-schools", 
      image: LeadershipSchoolsImage 
    },
    { 
      title: "LEADRSHIP PROGRAMS FOR COLLEGES", 
      description: "Explore More >>", 
      path: "/leadership-colleges", 
      image: LeadershipCollegesImage 
    },
    { 
      title: "POSITIVE PARENTING PROGRAM", 
      description: "Explore More >>", 
      path: "/positive-parenting", 
      image: PositiveParentingImage 
    }
    
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
