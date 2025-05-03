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
  const [bannerData, setBannerData] = useState(null);
  const [brandData, setBrandData] = useState([]);
  const [aboutData, setAboutData] = useState(null)
  const [workData, setWorkData] = useState(null)
  const [pricingData, setPricingData] = useState(null)
  const [advantageData, setAdvantageData] = useState(null)
  const [wcuData, setWcuData] = useState(null)
  const [countData, setCountData] = useState(null)
  const [faqHeadData, setFaqHeadData] = useState(null)
  const [faqQAData, setFaqQAData] = useState(null)
  const [testimonialData, setTestimonialData] = useState([])
  const [ctaData, setCtaData] = useState(null)
  const [featureData, setFeatureData] = useState([])
  const [blogData, setBlogData] = useState([])
  const [contactData, setContactData] = useState(null)


  // useEffect(() => {
  //   // Show preloader for 3 seconds only once on first render
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer); // Cleanup on unmount
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/banner.php');
        const result = await res.json();
        if (result.flag === 1 && result.status === 200) {
          setBannerData(result.data[0]);
        }

        const brandRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/clients.php');
        const brandJson = await brandRes.json();
        if (brandJson.flag === 1 && brandJson.status === 200) {
          setBrandData(brandJson.data);
        }

        const aboutRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/about.php');
        const aboutJson = await aboutRes.json();
        if (aboutJson.flag === 1 && aboutJson.status === 200) {
          setAboutData(aboutJson.data[0]);
        }

        const workProcessRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/work-process.php');
        const workProcessJson = await workProcessRes.json();
        if (workProcessJson.flag === 1 && workProcessJson.status === 200) {
          setWorkData(workProcessJson.data[0])
        }

        const pricingRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/pricing.php');
        const pricingJson = await pricingRes.json();
        if (pricingJson.flag === 1 && pricingJson.status === 200) {
          setPricingData(pricingJson.data[0])
        }

        const advantageRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/advantage.php');
        const advantageJson = await advantageRes.json();
        if (advantageJson.flag === 1 && advantageJson.status === 200) {
          setAdvantageData(advantageJson.data[0])
        }


        const wcuRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/why-using-app.php');
        const wcuJson = await wcuRes.json();
        if (wcuJson.flag === 1 && wcuJson.status === 200) {
          setWcuData(wcuJson.data[0])
        }

        const countRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/counter.php');
        const countJson = await countRes.json();
        if (countJson.flag === 1 && countJson.status === 200) {
          setCountData(countJson.data[0])
        }


        const faqHRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/faq.php');
        const faqHJson = await faqHRes.json();
        if (faqHJson.flag === 1 && faqHJson.status === 200) {
          setFaqHeadData(faqHJson.data[0])
        }


        const faqQARes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/faq-details.php');
        const faqQAJson = await faqQARes.json();
        if (faqQAJson.flag === 1 && faqQAJson.status === 200) {
          setFaqQAData(faqQAJson.data)
        }

        const testimonialRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/testimonial.php');
        const testimonialJson = await testimonialRes.json();
        if (testimonialJson.flag === 1 && testimonialJson.status === 200) {
          setTestimonialData(testimonialJson.data)
        }

        const ctaRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/app.php');
        const ctaJson = await ctaRes.json();
        if (ctaJson.flag === 1 && ctaJson.status === 200) {
          setCtaData(ctaJson.data[0])
        }


        const featureRes = await fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/features.php');
        const featureJson = await featureRes.json();
        if (featureJson.flag === 1 && featureJson.status === 200) {
          setFeatureData(featureJson.data)
        }

        const blogRes = await fetch('https://skilledworkerscloud.co.uk//website-api/api/controller/blog.php');
        const blogJson = await blogRes.json();
        if (blogJson.flag === 1 && blogJson.status === 200) {
          setBlogData(blogJson.data)
        }

        const contactRes = await fetch('https://skilledworkerscloud.co.uk//website-api/api/controller/contact.php');
        const contactJson = await contactRes.json();
        if (contactJson.flag === 1 && contactJson.status === 200) {
          setContactData(contactJson.data[0])
        }




      } catch (error) {
        console.error('API fetch error:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);
  // console.log(bannerData);

  return (
    <>
      

      
        
        <>
         <Preloader loading={loading}/>

          <BackToTop />
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          <Sidebar isSideBarOpen={isSideBarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <HeroSection bannerData={bannerData} />
          <BrandSlider brandData={brandData} />
          <AboutSection ClassAdd='' aboutData={aboutData} />
          <WorkProcessSection workData={workData} />
          <AdvantageSection advantageData={advantageData} />
          <WcuSection wcuData={wcuData} />
          <CounterSection countData={countData} />
          <FaqsSection faqHeadData={faqHeadData} faqQAData={faqQAData} />
          <TestimonialSection testimonialData={testimonialData} />
          <FeatureSection featureData={featureData} />
          <PricingSection pricingData={pricingData} />
          <CtaSection ctaData={ctaData} />
          <BlogSection  blogData={blogData}/>
          <ContactSection contactData={contactData}/>


          <Footer />

        </>
     
    </>
  )
}

export default App
