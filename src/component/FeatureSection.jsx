import React from 'react'
import { featureProfileShape1, fireIcon } from '../assets'
import { Link } from 'react-scroll';
import FadeInRight from './AnimationCom/FadeInRight';
import FadeInLeft from './AnimationCom/FadeInLeft';

const FeatureSection = ({ featureData }) => {



    return (
        <section className="feature-section section-padding fix" id='features'>
            <div className="container">
                <div className="feature-wrapper style1">
                    <div className="row gy-5 gx-134">
                        <div className="col-xl-6 order-2 order-xl-1">
                            <div className="feature-content">
                                <div className="section-title">
                                    <FadeInRight
                                        as='div'
                                        delay={0.2}
                                        className='subtitle'
                                    >
                                        {featureData[0]?.title}
                                        <img src={fireIcon} alt="icon" />
                                    </FadeInRight>
                                    <FadeInRight
                                        as='h2'
                                        delay={0.4}
                                        className='title'
                                    >
                                        {featureData[0]?.heading1}

                                    </FadeInRight>
                                    <FadeInRight
                                        as='p'
                                        delay={0.6}
                                        className='section-desc'
                                    >

                                        {featureData[0]?.heading2}
                                    </FadeInRight>

                                </div>
                                <FadeInRight
                                    as='div'
                                    delay={0.8}
                                    className=''
                                >
                                    <Link
                                        className={`theme-btn `}
                                        to='/contact'
                                    >
                                        {featureData[0]?.button_name}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_91_29)">
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
                                </FadeInRight>

                            </div>
                        </div>
                        <div className="col-xl-6 order-1 order-xl-2">
                            <div className="feature-box-wrapper">


                                {featureData?.map((feature, index) => (
                                    <div key={feature.id} className={`feature-box style1 child${index + 1}`}>
                                        <FadeInLeft
                                            as='div'
                                            delay={index * 0.2}
                                            className='feature-box-header'
                                        >
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
                                        </FadeInLeft>

                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
