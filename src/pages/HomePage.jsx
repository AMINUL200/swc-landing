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
        faqQAData,
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
            <FaqsLSection faqHeadData={faqHeadData} faqQAData={faqQAData} />
            <TestimonialSection testimonialData={testimonialData} />
            <FeatureSection featureData={featureData} />
            <PricingSection pricingData={pricingData} />
            <CtaSection ctaData={ctaData} />
            <BlogSection blogData={blogData} />
            <ContactSection contactData={contactData} />
        </>
    )
}

export default HomePage
