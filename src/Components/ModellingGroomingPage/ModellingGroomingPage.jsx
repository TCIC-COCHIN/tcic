import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ModellingGroomingPage.css';
import fitness_image from '../../assets/images/makeup1.jpg';
import pose_image from '../../assets/images/pose.jpg';
import { useNavigate } from 'react-router-dom';


const ModellingGroomingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add the dark theme class to the body
    document.body.classList.add('dark-theme');

    // Initialize AOS animations
    AOS.init();

    return () => {
      // Remove the dark theme class on unmount
      document.body.classList.remove('dark-theme');
    };
  }, []);

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="my-page">
      <div className="text-container1" data-aos="fade-down">
        <h2>International Grooming and Modelling</h2>
      </div>

      {/* Section: Physical Fitness & Grooming */}
      <div className="section section-one" data-aos="fade-right">
        <div className="image-container">
          <img src={fitness_image} alt="Fitness" />
        </div>
        <div className="text-container">
          <h2>Physical Fitness and Grooming</h2>
          <p>Confidence begins with the right foundation.</p>
          <p>
            Our fitness and grooming programs are designed to enhance your
            natural beauty and build your strength and stamina. With personalized
            fitness plans and expert grooming tips, you'll develop the poise,
            presence, and polish needed to stand out in the modeling world.
          </p>
          <p>
            Let us help you look and feel runway-ready, inside and out.
          </p>
        </div>
      </div>

      {/* Section: Mastering Runway Techniques */}
      <div className="section section-two" data-aos="fade-left">
        <div className="text-container">
          <h2>Mastering Runway Techniques</h2>
          <p>Own the stage with every step.</p>
          <p>
            Learn the art of commanding attention as you glide down the runway.
            Our expert trainers will guide you in perfecting your catwalk,
            turning with finesse, and exuding confidence with every move. From
            beginner basics to advanced techniques, we ensure you're ready to
            impress at any fashion show.
          </p>
        </div>
      </div>

      {/* Section: Striking the Perfect Poses */}
      <div className="section section-three" data-aos="fade-right">
        <div className="image-container">
          <img src={pose_image} alt="Pose" />
        </div>
        <div className="text-container">
          <h2>Striking the Perfect Poses</h2>
          <p>Let your body tell a story.</p>
          <p>
            Discover the secrets to creating stunning poses that highlight your
            unique features. Our hands-on training teaches you to connect with
            the camera, experiment with angles, and bring dynamic energy to every
            shot.
          </p>
          <p>
            Whether it's for a high-fashion editorial or a commercial shoot,
            you'll be ready to deliver perfection every time.
          </p>
        </div>
      </div>

      {/* Section: Captivating with Facial Expressions */}
      <div className="section section-four" data-aos="fade-left">
        <div className="text-container">
          <h2>Captivating with Facial Expressions</h2>
          <p>Speak volumes without saying a word.</p>
          <p>
            Master the art of using your eyes, lips, and expressions to captivate
            audiences and photographers alike. From sultry smirks to radiant
            smiles, we’ll teach you how to convey emotion, tell a story, and
            leave a lasting impression with every look.
          </p>
        </div>
      </div>

      {/* Section: Captivating with Facial Expressions */}
      <div className="section section-four" data-aos="fade-left">
        <div className="text-container">
          <h2>Step into the Spotlight with Professional Modeling and Anchoring Training


          </h2>
          <p>Discover the art of commanding attention and leaving a lasting impression with our comprehensive modeling and anchoring program. Designed to open doors to diverse careers, this training equips you with the skills to shine as a news anchor, celebrity host, event emcee, air hostess, front office hostess, ward hostess, or five star category hostess. 
          </p>
          <p>Master the confidence, poise, and communication techniques needed to thrive in dynamic, high-profile roles and create unforgettable experiences wherever you go. Start your journey to a dazzling career today!</p>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="contact-us-container" data-aos="zoom-in">
        <button className="contact-us-button" onClick={navigateToContact}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ModellingGroomingPage;
