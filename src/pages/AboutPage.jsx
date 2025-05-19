import React, { useContext } from 'react'
import BreadCumbSection from '../component/BreadCumbSection'
import AboutSection from '../component/AboutSection'
import { useInView } from 'react-intersection-observer';
import { fireIcon, wcuIcon2_1, wcuIcon2_2, wcuThumb2_1, wcuThumb2_2, wcuThumb2_3, wcuThumb3_1, wcuThumb3_2, wcuThumbShape3_1 } from '../assets';
import { AppContext } from '../context/AppContext';
import WorkProcessSection from '../component/WorkProcessSection';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const { workData, aboutData } = useContext(AppContext);
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
    return (
        <>
            <BreadCumbSection page='About Us' />
            <AboutSection aboutData={aboutData}/>

            {/* <!-- Why Choose Us Section S T A R T --> */}
            <section className="wcu-section">
                <div className="wcu-container-wrapper style2">
                    <div className="container">
                        <div className="wcu-wrapper style2  section-padding fix">
                            <div className="container">
                                <div ref={ref1} className="row gy-5 gx-60 d-flex align-items-center">
                                    <div className="col-xl-6">
                                        <div className="wcu-thumb">
                                            <div className={`main-thumb ${inView1 ? 'img-custom-anim-right fadeInUp delay-2' : ''} `} >
                                                <img src={wcuThumb2_1} alt="thumb" />
                                            </div>
                                            <div className="thumb2 float-bob-y"><img src={wcuThumb2_2}
                                                alt="thumb" /></div>
                                            <div className="thumb3 float-bob-x"><img src={wcuThumb2_3}
                                                alt="thumb" /></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="wcu-content">
                                            <div className="section-title">
                                                <div className={`subtitle ${inView1 ? 'fadeInUp delay-1' : ''} `} >
                                                    Customizations & Analysis <img src={fireIcon}
                                                        alt="icon" />
                                                </div>
                                                <h2 className={`title ${inView1 ? 'fadeInUp delay-2' : ''}`}>Manage your Team’s Easily
                                                    Communication.</h2>
                                                <p className="text1 wow fadeInUp" data-wow-delay=".6s">There are many variations of
                                                    passages of Lorem Ipsum available, but the majority have suffered alteration
                                                    in some form, by injected humour, or randomised words which don't look even
                                                </p>
                                            </div>
                                            <div className={`fancy-box style3 mb-20 ${inView1 ? 'fadeInUp delay-4' : ''}`} >
                                                <div className="icon">
                                                    <img src={wcuIcon2_1} alt="icon" />
                                                </div>
                                                <div className="content">
                                                    <h4>Easy Collaboration</h4>
                                                    <p className="text">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have</p>
                                                </div>
                                            </div>
                                            <div className={`fancy-box style3 ${inView1 ? 'fadeInUp delay-3' : ''}`} data-wow-delay=".6s">
                                                <div className="icon">
                                                    <img src={wcuIcon2_2} alt="icon" />
                                                </div>
                                                <div className="content">
                                                    <h4>Innovative Solutions</h4>
                                                    <p className="text">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WorkProcessSection workData={workData} />

            {/* <!-- Why Choose Us Section S T A R T --> */}
            <section className="wcu-section section-padding-2  fix">
                <div className="wcu-container-wrapper style3">
                    <div className="container">
                        <div className="wcu-wrapper style3">
                            <div className="row gy-5 gx-60">
                                <div className="col-xl-6">
                                    <div className="wcu-content">
                                        <div ref={ref2} className="section-title">
                                            <div className={`subtitle ${inView2 ? 'fadeInUp delay-1' : ''} `} >
                                                Customizations & Analysis <img src={fireIcon} alt="icon" />
                                            </div>
                                            <h2 className={`title ${inView2 ? 'fadeInUp delay-2' : ''} `}>Manage your Traffic Growth
                                                Easily</h2>
                                            <p className={`text1 ${inView2 ? 'fadeInUp delay-4' : ''} `} >There are many variations of
                                                passages of Lorem Ipsum available, but the majority have suffered alteration in
                                                some form, by injected humour, or randomised words which don't look even</p>
                                            <p className={`text2 ${inView2 ? 'fadeInUp delay-3' : ''} `} >There are many variations of
                                                passages of Lorem Ipsum available, but the majority have suffered alteration in
                                                some form,</p>
                                        </div>
                                        <Link className={`theme-btn rounded-5 ${inView2 ? 'fadeInUp delay-2' : ''} `} to='/about'>View
                                            All Project
                                            <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <g clip-path="url(#clip0_190_64)">
                                                    <path
                                                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_190_64">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                        <div ref={ref3} className="counter-box-wrapper style3">
                                            <div className={`counter-box style3 ${inView3 ? 'fadeInUp delay-1' : ''} `} >
                                                <div className="counter">
                                                    <span className="counter-nubmer">56</span> <span>k+</span>
                                                </div>
                                                <p className="text">Comparers</p>
                                            </div>
                                            <div className={`counter-box style3 ${inView3 ? 'fadeInUp delay-2' : ''} `} data-wow-delay=".4s">
                                                <div className="counter">
                                                    <span className="counter-nubmer">126</span> <span>k+</span>
                                                </div>
                                                <p className="text">Use People</p>
                                            </div>
                                            <div className={`counter-box style3 ${inView3 ? 'fadeInUp delay-4' : ''} `} data-wow-delay=".6s">
                                                <div className="counter">
                                                    <span className="counter-nubmer">1.2</span> <span>M+</span>
                                                </div>
                                                <p className="text">Download It</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={ref4} className="col-xl-6">
                                    <div className="wcu-thumb">
                                        <div className={`main-thumb  ${inView4 ? 'img-custom-anim-left fadeInUp delay-2' : ''} `} >
                                            <img src={wcuThumb3_1} alt="thumb" />
                                        </div>
                                        <div className="thumb2">
                                            <img src={wcuThumb3_2} alt="thumb" />
                                        </div>
                                        <div className={`thumb-box ${inView4 ? 'fadeInUp delay-2' : ''}`} >
                                            <h5>Traffic Growth</h5>
                                            <p className="text">Total traffic growth of 45%</p>
                                            <div className="shape-box">
                                                <img src={wcuThumbShape3_1} alt="shape" />
                                                <div className="shape-content">
                                                    <h6>Transaction</h6>
                                                    <h3>86%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutPage
