import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import HeroSection from '../component/HeroSection';
import BrandSlider from '../component/BrandSlider';
import AboutSection from '../component/AboutSection';
import WorkProcessSection from '../component/WorkProcessSection';
import AdvantageSection from '../component/AdvantageSection';
import WcuSection from '../component/WcuSection';
import CounterSection from '../component/CounterSection';
import FaqsSection from '../component/FaqsSection';
import FaqsLSection from '../component/FaqsLSection';
import TestimonialSection from '../component/TestimonialSection';
import FeatureSection from '../component/FeatureSection';
import PricingSection from '../component/PricingSection';
import CtaSection from '../component/CtaSection';
import BlogSection from '../component/BlogSection';
import ContactSection from '../component/ContactSection';
import SponsorCompliances from '../component/SponsorCompliances';
import WorkProcessing from '../component/WorkProcessing';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import MetaTags from '../component/MetaTags/MetaTags';
import { Helmet } from 'react-helmet';
import RecruitmentSection from '../component/RecruitmentSection';

const HomePage = () => {
    const location = useLocation();

    const {
        setShowPopup,
        bannerData,
        brandData,
        aboutData,
        workData,
        advantageData,
        wcuData,
        countData,
        faqHeadData,
        faqLeftHeadData,
        faqQAData,
        faqLeftQAData,
        testimonialData,
        featureData,
        pricingData,
        ctaData,
        blogData,
        contactData,
        sponserData,
        workPrecessingData,
        metaData,
        recruitmentData
       


    } = useContext(AppContext);

    console.log(recruitmentData);
    


    useEffect(() => {
        const scrollTarget = location.state?.scrollToId;
        if (scrollTarget) {
            const el = document.getElementById(scrollTarget);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50); // slight delay ensures DOM is ready
            }
        }
    }, [location]);


    return (
        <>
            <MetaTags meta={metaData}/>
            
            <HeroSection bannerData={bannerData} showPopupModel={() => setShowPopup(true)} />
            <BrandSlider brandData={brandData} />
            <AboutSection ClassAdd='' aboutData={aboutData} />
            <WorkProcessSection workData={workData} />
            <AdvantageSection advantageData={advantageData} />
            <WcuSection wcuData={wcuData} />
            <CounterSection countData={countData} />
            <FaqsSection faqHeadData={faqHeadData} faqQAData={faqQAData} />
            <FaqsLSection faqHeadData={faqLeftHeadData} faqQAData={faqLeftQAData} />
            <SponsorCompliances sponserData={sponserData} />
            <TestimonialSection testimonialData={testimonialData} />
            <FeatureSection featureData={featureData} />
            <PricingSection pricingData={pricingData} />
            <CtaSection ctaData={ctaData} />
            <WorkProcessing workPrecessingData={workPrecessingData} />
            <RecruitmentSection recruitmentData={recruitmentData}/>
            <BlogSection blogData={blogData} />
            <ContactSection contactData={contactData} />
        </>
    )
}

export default HomePage
