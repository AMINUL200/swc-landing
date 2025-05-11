import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
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

      const [showPopup, setShowPopup] = useState(false)
      const [blogDetailsLoading, setBlogDetailsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [
                    bannerRes,
                    brandRes,
                    aboutRes,
                    workRes,
                    pricingRes,
                    advantageRes,
                    wcuRes,
                    countRes,
                    faqHRes,
                    faqQARes,
                    testimonialRes,
                    ctaRes,
                    featureRes,
                    blogRes,
                    contactRes
                ] = await Promise.all([
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/banner.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/clients.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/about.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/work-process.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/pricing.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/advantage.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/why-using-app.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/counter.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/faq.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/faq-details.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/testimonial.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/app.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/features.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/blog.php'),
                    fetch('https://skilledworkerscloud.co.uk/website-api/api/controller/contact.php')
                ]);

                const [
                    bannerJson,
                    brandJson,
                    aboutJson,
                    workJson,
                    pricingJson,
                    advantageJson,
                    wcuJson,
                    countJson,
                    faqHJson,
                    faqQAJson,
                    testimonialJson,
                    ctaJson,
                    featureJson,
                    blogJson,
                    contactJson
                ] = await Promise.all([
                    bannerRes.json(),
                    brandRes.json(),
                    aboutRes.json(),
                    workRes.json(),
                    pricingRes.json(),
                    advantageRes.json(),
                    wcuRes.json(),
                    countRes.json(),
                    faqHRes.json(),
                    faqQARes.json(),
                    testimonialRes.json(),
                    ctaRes.json(),
                    featureRes.json(),
                    blogRes.json(),
                    contactRes.json()
                ]);

                if (bannerJson.flag === 1 && bannerJson.status === 200) setBannerData(bannerJson.data[0]);
                if (brandJson.flag === 1 && brandJson.status === 200) setBrandData(brandJson.data);
                if (aboutJson.flag === 1 && aboutJson.status === 200) setAboutData(aboutJson.data[0]);
                if (workJson.flag === 1 && workJson.status === 200) setWorkData(workJson.data[0]);
                if (pricingJson.flag === 1 && pricingJson.status === 200) setPricingData(pricingJson.data[0]);
                if (advantageJson.flag === 1 && advantageJson.status === 200) setAdvantageData(advantageJson.data[0]);
                if (wcuJson.flag === 1 && wcuJson.status === 200) setWcuData(wcuJson.data[0]);
                if (countJson.flag === 1 && countJson.status === 200) setCountData(countJson.data[0]);
                if (faqHJson.flag === 1 && faqHJson.status === 200) setFaqHeadData(faqHJson.data[0]);
                if (faqQAJson.flag === 1 && faqQAJson.status === 200) setFaqQAData(faqQAJson.data);
                if (testimonialJson.flag === 1 && testimonialJson.status === 200) setTestimonialData(testimonialJson.data);
                if (ctaJson.flag === 1 && ctaJson.status === 200) setCtaData(ctaJson.data[0]);
                if (featureJson.flag === 1 && featureJson.status === 200) setFeatureData(featureJson.data);
                if (blogJson.flag === 1 && blogJson.status === 200) setBlogData(blogJson.data);
                if (contactJson.flag === 1 && contactJson.status === 200) setContactData(contactJson.data[0]);

            } catch (error) {
                console.error('API fetch error:', error);
            } finally {
                setLoading(false);
                const timer = setTimeout(() => {
                    setShowPopup(true);
                }, 10000);

                return () => clearTimeout(timer);
            }
        };

        fetchData();
    }, []);




const blogDataInfo = async (id) => {
  setBlogDetailsLoading(true);  // Use separate loading state for blog details
  try {
    const blogDetailsRes = await fetch(`https://skilledworkerscloud.co.uk/website-api/api/controller/blog_details.php?blog=${id}`);
    const blogDetailsJson = await blogDetailsRes.json();

    if (blogDetailsJson.flag === 1 && blogDetailsJson.status === 200) {
      return blogDetailsJson.data;
    }
    return null;
  } catch (error) {
    console.error("blog Details error", error);
    return null;
  } finally {
    setBlogDetailsLoading(false);
  }
}







    const value = {
        // your state and methods here
        loading, setLoading,
        isSideBarOpen, setIsSidebarOpen,
        bannerData,
        brandData,
        aboutData,
        workData,
        pricingData,
        advantageData,
        wcuData,
        countData,
        faqHeadData,
        faqQAData,
        testimonialData,
        ctaData,
        featureData,
        blogData,
        contactData,
        showPopup, setShowPopup,
        blogDetailsLoading,
        blogDataInfo,

    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
