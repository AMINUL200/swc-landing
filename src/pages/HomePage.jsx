import React, { useContext } from 'react'
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

const HomePage = () => {

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
        contactData


    } = useContext(AppContext);



    return (
        <>
            <HeroSection bannerData={bannerData} showPopupModel={() => setShowPopup(true)} />
            <BrandSlider brandData={brandData} />
            <AboutSection ClassAdd='' aboutData={aboutData} />
            <WorkProcessSection workData={workData} />
            <AdvantageSection advantageData={advantageData} />
            <WcuSection wcuData={wcuData} />
            <CounterSection countData={countData} />
            <FaqsSection faqHeadData={faqHeadData} faqQAData={faqQAData} />
            <FaqsLSection faqHeadData={faqLeftHeadData} faqQAData={faqLeftQAData} />
            <SponsorCompliances/>
            <TestimonialSection testimonialData={testimonialData} />
            <FeatureSection featureData={featureData} />
            <PricingSection pricingData={pricingData} />
            <CtaSection ctaData={ctaData} />
            <WorkProcessing/>
            <BlogSection blogData={blogData} />
            <ContactSection contactData={contactData} />
        </>
    )
}

export default HomePage
