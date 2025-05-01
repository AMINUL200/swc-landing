import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll'
import { advanceThumbShape1, advantageThumb1, advantageThumb2, checkMarkIcon, fireIcon } from '../assets';

const AdvantageSection = ({ advantageData }) => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });




    return (
        <section className="advantage-section fix">
            <div className="advantage-container-wrapper style1">
                <div className="container">
                    <div className="advantage-wrapper style1 section-padding">
                        <div className="container">
                            <div ref={ref} className="row gy-5 d-flex align-items-center">
                                <div className="col-xl-6 order-2 order-xl-1">
                                    <div className="advantage-content">
                                        <div className={`section-title  ${inView ? "fadeInUp delay-1" : ''} `} >
                                            <div className="subtitle">
                                                {advantageData?.title ?? 'App Advantage '}
                                                <img src={fireIcon} alt="icon" />
                                            </div>
                                            <h2 className="title">
                                                {advantageData?.heading1 ?? 'Get Benefit By Using Trending Apps'}
                                            </h2>
                                            <p className="section-desc">
                                                {advantageData?.heading2}

                                            </p>
                                        </div>
                                        <div className={`checklist-wrapper style1  ${inView ? "fadeInUp delay-2" : ''} `}>
                                            <ul className="checklist style1">
                                                <li>
                                                    <img src={checkMarkIcon} alt="icon" />
                                                    {advantageData?.paragraph1}
                                                </li>
                                                <li>
                                                    <img src={checkMarkIcon} alt="icon" />
                                                    {advantageData?.paragraph2}
                                                </li>
                                            </ul>
                                            <ul className="checklist style1">
                                                <li>
                                                    <img src={checkMarkIcon} alt="icon" />
                                                    {advantageData?.paragraph3}
                                                </li>
                                                <li>
                                                    <img src={checkMarkIcon} alt="icon" />
                                                    {advantageData?.paragraph4}
                                                </li>
                                            </ul>
                                        </div>
                                        <Link className={`theme-btn  ${inView ? "fadeInUp delay-4" : ''} `} to='/about'  >
                                            {advantageData?.button_name }

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <g clip-path="url(#clip0_43_54)">
                                                    <path
                                                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_43_54">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 order-1 order-xl-2">
                                    <div className="advantage-thumb">
                                        <div
                                            className={`thumb1 ${inView ? "img-custom-anim-top fadeInUp delay-3" : ''} `}

                                            data-tilt data-tilt-max="10">
                                            <img src={advantageData?.image ?? advantageThumb1} alt="thumb" />
                                        </div>
                                        <div
                                            className={`thumb2  ${inView ? "img-custom-anim-right fadeInUp delay-2" : ''}`}

                                            data-tilt data-tilt-max="15">
                                            <img src={advantageData?.image2 ?? advantageThumb2} alt="thumb" />
                                        </div>
                                        <div className="shape1">
                                            <img src={advanceThumbShape1} alt="shape" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvantageSection
