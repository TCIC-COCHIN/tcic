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
import FullStackDevelopment from './Components/FullStackDevelopment/FullStackDevelopment';
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
import HomeSkills from './Components/HomeSkills/HomeSkills';
import News from './Components/News/News';
import SelfBranding from './Components/SelfBranding/SelfBranding';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Internship from './Components/Internship/Internship';
import FutureStrength from './Components/FutureStrength/FutureStrength';
import SchoolCare from './Components/SchoolCare/SchoolCare';
import SchoolCarePage from './Components/SchoolCarePage/SchoolCarePage';
import Modelling from './Components/Modelling/Modelling';
import ModellingGroomingPage from './Components/ModellingGroomingPage/ModellingGroomingPage';
import KidsAfterSchool from './Components/KidsAfterSchool/KidsAfterSchool';

// Import NotFoundPage
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import TalentPage from './Components/TalentPage/TalentPage';
import SellYourTalent from './Components/SellYourTalent/SellYourTalent';
import ApplyNow from './Components/ApplyNow/ApplyNow';
import PhotographyPrograms from './Components/PhotographyPrograms/PhotographyPrograms';
import PhotographyWorkshopPage from './Components/PhotographyWorkshopPage/PhotographyWorkshopPage';
import Photo from './Components/Photo/Photo';
import Jobin from './Components/Jobin/Jobin';
import SkillEd from './Components/skilled/skilled';
import SkilledSenior from './Components/SkilledSenior/SkilledSenior';
import KidsAssessment from './Components/KidsAssessment/KidsAssessment';
import TCICJuniorLifie from './Components/TCICJuniorLifie/TCICJuniorLifie';
import BetterKids from './Components/BetterKids/BetterKids';
import PosterGallery from './Components/PosterGallery/PosterGallery';
import Tourism from './Components/Tourism/Tourism';
import FamilyMentoring from './Components/FamilyMentoring/FamilyMentoring';
import GroomingYouth from './Components/GroomingYouth/GroomingYouth';
import AdolescentServices from './Components/AdolescentServices/AdolescentServices';
import PublicPrograms from './Components/PublicPrograms/PublicPrograms';
import Solution from './Components/Solution/Solution';
import GeneralConsultation from './Components/GeneralConsultation/GeneralConsultation';
import CorporateServices from './Components/CorporateServices/CorporateServices';



const App = () => {
  const [playState, setPlayState] = useState(false);

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
              <PosterGallery/>
              <div className="container">
                
                <KidsAfterSchool />
                <Title subTitle="" title=" Skill Development Programmes " />
                <HomeSkills />
                <Title title="Techno And Management Functions" />
                <Programs id="programmes" />
                <Title title="Hands on Training/Internship/Familiarization" />
                <Internship />
                <Title title="Kids After School Care" />
                <SchoolCare />
                <Title subTitle="" title="International Grooming and Modelling  " />
                <Modelling />
               <Title subTitle="" title="Gallery" />
                <Campus id="campus" />
                <Title subTitle="" title="Testimonials" />
                <Testimonials />
                <About setPlayState={setPlayState} id="about" />
                <Title subTitle="" title="Get in Touch" />
                <Contact id="contact" />
              </div>
              <Footer />
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />
        {/* Careers Page */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/fullstack-development" element={<FullStackDevelopment />} />
        <Route path="/digitalMarketing" element={<DigitalMarketing />} />
        <Route path="/internationalHr" element={<InternationalHr />} />
        <Route path="/skillDevelopment" element={<SkillDevelopmentProgramme />} />
        <Route path="/galleryView" element={<GalleryView />} />
        <Route path="/websiteService" element={<WebsiteService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posterDesigning" element={<CreativePosterDesigning />} />
        <Route path="/logoDesigning" element={<InnovativeLogoDesigning />} />
        <Route path="/socialMediaPromotion" element={<SocialMediaPromotion />} />
        <Route path="/seoPromotion" element={<SEOPromotions />} />
        <Route path="/contentMarketing" element={<ContentMarketing />} />
        <Route path="/emailMarketing" element={<EmailMarketing />} />
        <Route path="/itConsulting" element={<ProfessionalITConsultants />} />
        <Route path="/digitalMarketingService" element={<DigitalMarketingService />} />
        <Route path="/event" element={<Event />} />
        <Route path="/time-management" element={<TimeManagement />} />
        <Route path="/stress-handling" element={<StressHandling />} />
        <Route path="/powerful-leader" element={<PowerfulLeader />} />
        <Route path="/leadership-schools" element={<LeadershipSchools />} />
        <Route path="/leadership-colleges" element={<LeadershipColleges />} />
        <Route path="/positive-parenting" element={<PositiveParenting />} />
        <Route path="/selfBranding" element={<SelfBranding />} />
        <Route path="/news" element={<News />} />
        <Route path="/futureStrength" element={<FutureStrength />} />
        <Route path="/studentCarePage" element={<SchoolCarePage />} />
        <Route path="/ModellingGroomingPage" element={<ModellingGroomingPage />} />
        <Route path="/talent" element={<TalentPage/>} />
        <Route path="/sellYourTalent" element={<SellYourTalent/>} />
        <Route path="/applynow" element={<ApplyNow/>} />
        <Route path="/PhotographyWorkshopPage" element={<PhotographyWorkshopPage/>} />
        <Route path="/Photo" element={<Photo/>} />
        <Route path="/Jobin" element={<Jobin/>} />
        <Route path="/skillEd" element={<SkillEd/>} />
        <Route path="/skilledSenior" element={<SkilledSenior/>} />
        <Route path="/kidsAssessment" element={<KidsAssessment/>} />
        <Route path="/tcicJuniorLifie" element={<TCICJuniorLifie/>} />
        <Route path="/BetterKids" element={<BetterKids/>} />
        <Route path="/toursim" element={<Tourism/>} />
        <Route path="/familyMentoring" element={<FamilyMentoring/>} />
        <Route path="/groomingYouth" element={<GroomingYouth/>} />
        <Route path="/adolescent" element={<AdolescentServices/>} />
        <Route path="/publicPrograms" element={<PublicPrograms/>} />
        <Route path="/solution" element={<Solution/>} />
        <Route path="/generalConsultation" element={<GeneralConsultation/>} />
        <Route path="/corporateServices" element={<CorporateServices/>} />
      
        

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
