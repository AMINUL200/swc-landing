import React from 'react'
import { ctaAppleStore1, ctaplayStore1, ctaShape1, ctaShape2, ctaShape3, ctaShape4, ctaThumb1, fireIcon } from '../assets'
import { useInView } from 'react-intersection-observer';
import { motion } from "motion/react"

const CtaSection = ({ ctaData }) => {



    return (
        <section className="cta-section" id='our-app'>
            <div className="cta-container-wrapper style1">
                <div className="container">
                    <div className="cta-wrapper style1  section-padding fix">
                        <div className="shape1 d-none d-xxl-block"><img src={ctaShape1} alt="shape" />
                        </div>
                        <div className="shape2 d-none d-xxl-block"><img src={ctaShape2} alt="shape" />
                        </div>
                        <div className="shape3 d-none d-xxl-block"><img src={ctaShape3} alt="shape" />
                        </div>
                        <div className="shape4 d-none d-xxl-block"><img src={ctaShape4} alt="shape" />
                        </div>
                        <div className="container">
                            <div className="row gy-5">
                                <div className="col-xl-8 order-2 order-xl-1">
                                    <div className="cta-content">
                                        <div className="section-title">
                                            <motion.div
                                                initial={{ y: 60, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                viewport={{ once: true, margin: "-30px" }}
                                                className={`subtitle text-white bg2 `}>
                                                {ctaData?.title}
                                                <img src={fireIcon} alt="icon" />
                                            </motion.div>
                                            <motion.h2
                                                initial={{ y: 60, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                className={`title text-white `} >
                                                {ctaData?.heading1}
                                            </motion.h2>
                                            <motion.p
                                                initial={{ y: 60, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                className={`section-desc text-white mxw-651 `} >
                                                {ctaData?.paragraph1}
                                            </motion.p>
                                        </div>
                                        <motion.a
                                            initial={{ x: -80, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.2,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ once: true, margin: "100px" }}
                                            className="playstore"
                                            href="https://play.google.com/store"
                                            style={{ display: 'inline-block' }}  // Ensure motion works properly
                                        >
                                            <img src={ctaData?.image2} alt="img" />
                                        </motion.a>
                                        <motion.a
                                            initial={{ x: 200, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.2,
                                                ease: "easeOut"
                                            }}
                                            viewport={{
                                                once: true,
                                                margin: "-30% 0px 100px 0px",
                                                threshold: 0.3
                                            }}
                                            className="playstore"
                                            href="https://www.apple.com/store"
                                            style={{ display: 'inline-block' }}>
                                            <img src={ctaData?.image3} alt="img" />
                                        </motion.a>
                                    </div>
                                </div>
                                <div className="col-xl-4 order-1 order-xl-2">
                                    <motion.div
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        className={`cta-thumb `} >
                                        <img src={ctaData?.image1} alt="thumb" width={1000}/>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection
