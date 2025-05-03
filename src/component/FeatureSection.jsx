import React from 'react'
import { featureProfileShape1, fireIcon } from '../assets'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const FeatureSection = ({ featureData }) => {
    const [ref7, inView7] = useInView({ threshold: 0.1, triggerOnce: true });

    // Delay classes for animation
    const getDelayClass = (index, baseDelay) => {
        return inView7 ? `fadeInRightToLeft delay-${baseDelay + index}` : '';
    };

    return (
        <section className="feature-section section-padding fix" id='features'>
            <div className="container">
                <div className="feature-wrapper style1">
                    <div ref={ref7} className="row gy-5 gx-134">
                        <div className="col-xl-6 order-2 order-xl-1">
                            <div className="feature-content">
                                <div className="section-title">
                                    <div className={`subtitle ${inView7 ? 'fadeInLeftToRight delay-1' : ''}`} >
                                        {featureData[0]?.title}
                                        <img src={fireIcon} alt="icon" />
                                    </div>
                                    <h2 className={`title ${inView7 ? 'fadeInLeftToRight delay-2' : ''}`}>
                                        {featureData[0]?.heading1}

                                    </h2>
                                    <p className={`section-desc ${inView7 ? 'fadeInLeftToRight delay-3' : ''}`} >
                                        {featureData[0]?.heading2}
                                    </p>
                                </div>
                                <Link className={`theme-btn ${inView7 ? 'fadeInLeftToRight delay-4 ' : ''}`} to='/contact'>
                                    {featureData[0]?.button_name}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_91_29)">
                                            <path
                                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_91_29">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 order-1 order-xl-2">
                            <div className="feature-box-wrapper">


                                {featureData?.map((feature, index) => (
                                    <div key={feature.id} className={`feature-box style1 child${index + 1}`}>
                                        <div className={`feature-box-header ${getDelayClass(index, 1)}`}>
                                            <div className="content">
                                                <h5>{feature.paragraph1} </h5>
                                                <p className="text"> {feature.paragraph2} </p>
                                            </div>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35"
                                                    viewBox="0 0 34 35" fill="none">
                                                    <circle cx="17" cy="17.5" r="16" stroke="#F1F1F1" stroke-width="2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={`feature-box-footer ${getDelayClass(index, 2)}`}>
                                            <div className="content">
                                                <span className="day"> {feature.paragraph3} </span>
                                                <span className="time"> {feature.paragraph4} </span>
                                            </div>
                                            <div className="shape">
                                                <img src={featureProfileShape1} alt="shape" />
                                            </div>
                                        </div>

                                    </div>
                                ))}


                                {/* <div className="feature-box style1 child1">
                                    <div className={`feature-box-header ${inView7 ? 'fadeInRightToLeft delay-1' : ''} `} >
                                        <div className="content">
                                            <h5>Software development</h5>
                                            <p className="text">UX Research</p>
                                        </div>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35"
                                                viewBox="0 0 34 35" fill="none">
                                                <circle cx="17" cy="17.5" r="16" stroke="#F1F1F1" stroke-width="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`feature-box-footer  ${inView7 ? 'fadeInRightToLeft delay-2' : ''}`} >
                                        <div className="content">
                                            <span className="day">Today</span>
                                            <span className="time">07:02 AM</span>
                                        </div>
                                        <div className="shape"><img src={featureProfileShape1}
                                            alt="shape" />
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box style1 child2">
                                    <div className={`feature-box-header ${inView7 ? 'fadeInRightToLeft delay-4' : ''} `} >
                                        <div className="content">
                                            <h5>Design data & analytics</h5>
                                            <p className="text">UX Research</p>
                                        </div>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35"
                                                viewBox="0 0 34 35" fill="none">
                                                <circle cx="17" cy="17.5" r="16" stroke="#F1F1F1" stroke-width="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`feature-box-footer  ${inView7 ? 'fadeInRightToLeft delay-3' : ''}`} >
                                        <div className="content">
                                            <span className="day">Today</span>
                                            <span className="time">07:02 AM</span>
                                        </div>
                                        <div className="shape"><img src={featureProfileShape1}
                                            alt="shape" /></div>
                                    </div>
                                </div>
                                <div className="feature-box style1 child3" >
                                    <div className={`feature-box-header ${inView7 ? 'fadeInRightToLeft delay-4' : ''} `}>
                                        <div className="content">
                                            <h5>Dedicated Support</h5>
                                            <p className="text">UX Research</p>
                                        </div>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35"
                                                viewBox="0 0 34 35" fill="none">
                                                <circle cx="17" cy="17.5" r="16" stroke="#F1F1F1" stroke-width="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`feature-box-footer  ${inView7 ? 'fadeInRightToLeft delay-4' : ''}`}>
                                        <div className="content">
                                            <span className="day">Today</span>
                                            <span className="time">07:02 AM</span>
                                        </div>
                                        <div className="shape"><img src={featureProfileShape1}
                                            alt="shape" /></div>
                                    </div>
                                </div> */}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
