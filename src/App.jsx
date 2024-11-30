import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Careers from './Components/Careers/Careers';
import FullStackDevelopment from './Components/FullStackDevelopment/FullStackDevelopment'; // Import the component
import DigitalMarketing from './Components/DigitalMarketing/DigitalMarketing';
import SkillDevelopmentProgramme from './Components/SkillDevelopmentProgramme/SkillDevelopmentProgramme';
import GalleryView from './Components/GalleryView/GalleryView';
import WebsiteService from './Components/WebsiteService/WebsiteService';
import CreativePosterDesigning from './Components/CreativePosterDesigning/CreativePosterDesigning';
import SocialMediaPromotion from './Components/SocialMediaPromotion/SocialMediaPromotion';
import SEOPromotions from './Components/SEOPromotions/SEOPromotions';
import ContentMarketing from './Components/ContentMarketing/ContentMarketing';
import EmailMarketing from './Components/EmailMarketing/EmailMarketing';
import ProfessionalITConsultants from './Components/ProfessionalITConsultants/ProfessionalITConsultants';
import DigitalMarketingService from './Components/DigitalMarketingService/DigitalMarketingService';
import InternationalHr from './Components/InternationalHR/InternationalHr';
import InnovativeLogoDesigning from './Components/InnovativeLogoDesigning/InnovativeLogoDesigning';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Event from './Components/Events/Event';
import TimeManagement from './Components/TimeManagement/TimeManagement';
import StressHandling from './Components/StressHandling/StressHandling';
import PowerfulLeader from './Components/PowerfulLeader/PowerfulLeader';
import LeadershipSchools from './Components/LeadershipSchools/LeadershipSchools';
import LeadershipColleges from './Components/LeadershipColleges/LeadershipColleges';
import PositiveParenting from './Components/PositiveParenting/PositiveParenting';
// import Animation from './Components/Animation/Animation';
import HomeSkills from './Components/HomeSkills/HomeSkills';
import News from './Components/News/News';
import SelfBranding from './Components/SelfBranding/SelfBranding';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const App = () => {

  const [playState, setPlayState]=useState(false)


  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page Sections */}
        <Route
          path="/"
          element={
            <>
              <Hero id="hero" />
              <div className="container">
                <About setPlayState={setPlayState} id="about" />
                <Title subTitle="" title=" Skill Development Programs " />
                <HomeSkills/>
                
                <Title title="Techno And Management Functions" />
                <Programs id="programmes" />
                <Title subTitle="" title="Gallery" />
                <Campus id="campus" />
                <Title subTitle="" title="Testimonials" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact id="contact" />
                
              </div>
              <Footer />
              <VideoPlayer playState={playState} setPlayState={setPlayState}/>
            </>
          }
        />
        {/* Careers Page */}
        <Route path="/careers" element={<Careers />} />
        {/* Full Stack Development Page */}
        <Route path="/fullstack-development" element={<FullStackDevelopment />} />
        <Route path="/digitalMarketing" element={<DigitalMarketing />} />
        <Route path="/internationalHr" element={<InternationalHr/>} />
        <Route path="/skillDevelopment" element={<SkillDevelopmentProgramme/>} />
        <Route path="/galleryView" element={<GalleryView/>} />
        <Route path="/websiteService" element={<WebsiteService/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/posterDesigning" element={<CreativePosterDesigning/>} />
        <Route path="/logoDesigning" element={<InnovativeLogoDesigning/>} />
        <Route path="/socialMediaPromotion" element={<SocialMediaPromotion/>} />
        <Route path="/seoPromotion" element={<SEOPromotions/>} />
        <Route path="/contentMarketing" element={<ContentMarketing/>} />
        <Route path="/emailMarketing" element={<EmailMarketing/>} />
        <Route path="/itConsulting" element={<ProfessionalITConsultants/>} />
        <Route path="/digitalMarketingService" element={<DigitalMarketingService/>} />
        <Route path="/event" element={<Event/>} />
        <Route path="/time-management" element={<TimeManagement/>} />
        <Route path="/stress-handling" element={<StressHandling/>} />
        <Route path="/powerful-leader" element={<PowerfulLeader/>} />
        <Route path="/leadership-schools" element={<LeadershipSchools/>} />
        <Route path="/leadership-colleges" element={<LeadershipColleges/>} />
        <Route path="/positive-parenting" element={<PositiveParenting/>} />
        <Route path="/selfBranding" element={<SelfBranding/>} />
        <Route path="/news" element={<News/>} />
        
        
        
      </Routes>
    </Router>
    
  );
};

export default App;
