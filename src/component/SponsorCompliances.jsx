import React from 'react'
import { checkMarkIcon, fireIcon, wcuIcon2_1, wcuIcon2_2, wcuThumb2_1, wcuThumb2_2, wcuThumb2_3 } from '../assets'
import { useInView } from 'react-intersection-observer';
import { motion } from "motion/react"

const SponsorCompliances = ({ sponserData }) => {
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    // const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="wcu-section">
            <div className="wcu-container-wrapper style2">
                <div className="container">
                    <div className="wcu-wrapper style2  section-padding fix">
                        <div className="container">
                            <div  className="row flex-row-reverse gy-5 gx-60 d-flex align-items-center">
                                <div className="col-xl-6">
                                    <div ref={ref1} className="wcu-thumb">
                                        <div className={`main-thumb ${inView1 ? 'img-custom-anim-right fadeInUp delay-2' : ''} `} >
                                            <img src={sponserData?.image1 ?? wcuThumb2_1} alt="thumb" />
                                        </div>
                                        <div className="thumb2 float-bob-y">
                                            <img src={sponserData?.image2 ?? wcuThumb2_2} alt="thumb" /></div>
                                        <div className="thumb3 float-bob-x">
                                            <img src={sponserData?.image3 ?? wcuThumb2_3} alt="thumb" /></div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="wcu-content">
                                        <div className="section-title">
                                            <motion.div
                                                className="subtitle "
                                                initial={{ y: 80, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                viewport={{ once: true, margin: "-50px" }}>
                                                {sponserData?.title}
                                                <img src={fireIcon}
                                                    alt="icon" />
                                            </motion.div>
                                            <motion.h2
                                                className={`title`}
                                                initial={{ y: 80, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                            >

                                                {sponserData?.heading}

                                            </motion.h2>
                                            <motion.p
                                                className="text1  "
                                                initial={{ y: 80, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                                viewport={{ once: true, margin: "-50px" }}>
                                                {sponserData?.paragraph}


                                            </motion.p>
                                        </div>
                                        <motion.div
                                            className={`fancy-box style3 mb-20 `}
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <div className="icon">
                                                <img src={checkMarkIcon} alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h4> {sponserData?.sub_heading1} </h4>
                                                <p className="text">
                                                    {sponserData?.sub_paragraph1}
                                                </p>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className={`fancy-box style3 mb-20 `}
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <div className="icon">
                                                <img src={checkMarkIcon} alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h4>{sponserData?.sub_heading2}</h4>
                                                <p className="text">{sponserData?.sub_paragraph2}</p>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className={`fancy-box style3 mb-20 `}
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <div className="icon">
                                                <img src={checkMarkIcon} alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h4>{sponserData?.sub_heading3}</h4>
                                                <p className="text">{sponserData?.sub_paragraph3}</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className={`fancy-box style3 `}
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <div className="icon">
                                                <img src={checkMarkIcon} alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h4>{sponserData?.sub_heading4}</h4>
                                                <p className="text">{sponserData?.sub_paragraph4}</p>
                                            </div>
                                        </motion.div>

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

export default SponsorCompliances
