import React from 'react'
import { featureProfileShape1, fireIcon } from '../assets'
import { Link } from 'react-scroll';
import { motion } from "motion/react"

const FeatureSection = ({ featureData }) => {

    const AnimatedBox = ({
        children,
        delay = 0,
        x = -80,       // Default: slide from left (-80). Use 80 for right.
        opacity = 0,
        duration = 0.4,
        margin = "-50px",
        className = "",
        ...props
    }) => (
        <motion.div
            className={className}
            initial={{ x, opacity }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration, delay }}
            viewport={{ once: true, margin }}
            {...props}
        >
            {children}
        </motion.div>
    );

    return (
        <section className="feature-section section-padding fix" id='features'>
            <div className="container">
                <div className="feature-wrapper style1">
                    <div className="row gy-5 gx-134">
                        <div className="col-xl-6 order-2 order-xl-1">
                            <div className="feature-content">
                                <div className="section-title">
                                    <AnimatedBox className="subtitle" delay={0.2}>
                                        {featureData[0]?.title}
                                        <img src={fireIcon} alt="icon" />
                                    </AnimatedBox>
                                    <motion.h2
                                        className={`title `}
                                        initial={{ x: -80, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        {featureData[0]?.heading1}

                                    </motion.h2>
                                    <motion.p
                                        className={`section-desc `}
                                        initial={{ x: -80, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.6 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        {featureData[0]?.heading2}
                                    </motion.p>
                                </div>
                                <motion.div
                                    initial={{ x: -80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                    viewport={{ once: true, margin: "-50px" }}
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
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-xl-6 order-1 order-xl-2">
                            <div className="feature-box-wrapper">


                                {featureData?.map((feature, index) => (
                                    <div key={feature.id} className={`feature-box style1 child${index + 1}`}>
                                        <motion.div className={`feature-box-header `}
                                            initial={{ x: 80, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.2 }}
                                            viewport={{ once: true, margin: "-50px" }}
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
                                        </motion.div>


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
