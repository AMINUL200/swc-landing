import React, { useEffect, useState } from 'react';
import Preloader from './component/Preloader'
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import HeroSection from './component/HeroSection';
import Footer from './component/Footer';
import BackToTop from './component/BackToTop';
import BrandSlider from './component/BrandSlider';
import AboutSection from './component/AboutSection';
import WorkProcessSection from './component/WorkProcessSection';
import AdvantageSection from './component/AdvantageSection';
import WcuSection from './component/WcuSection';
import CounterSection from './component/CounterSection';
import FaqsSection from './component/FaqsSection';
import TestimonialSection from './component/TestimonialSection';
import FeatureSection from './component/FeatureSection';
import PricingSection from './component/PricingSection';
import CtaSection from './component/CtaSection';
import BlogSection from './component/BlogSection';
import ContactSection from './component/ContactSection';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Show preloader for 3 seconds only once on first render
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <BackToTop />
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          <Sidebar isSideBarOpen={isSideBarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <HeroSection />
          <BrandSlider/>
          <AboutSection ClassAdd=''/>
          <WorkProcessSection/>
          <AdvantageSection/>
          <WcuSection/>
          <CounterSection/>
          <FaqsSection/>
          <TestimonialSection titleDir='center'/>
          <FeatureSection/>
          <PricingSection/>
          <CtaSection/>
          <BlogSection/>
          <ContactSection/>


          <Footer />

        </>
      )}
    </>
  )
}

export default App
