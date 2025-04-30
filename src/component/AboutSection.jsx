import React from 'react'
import { aboutThumb1, aboutThumb2, aboutThumbShape1, aboutThumbShape2, aboutThumbShape3, aboutThumbShape4, checkMarkIcon, fireIcon } from '../assets'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { motion } from "motion/react"


const AboutSection = ({ ClassAdd }) => {
    const [ref1, inView1] = useInView({ threshold: 0.4, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.4, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref5, inView5] = useInView({ threshold: 0.1, triggerOnce: true });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2, // Adjust multiplier for stagger effect
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };


    return (
        <section className={`about-section ${ClassAdd} fix`} id='about'>
            <div className="about-container-wrapper style1">
                <div className="container">
                    <div className="about-wrapper style1">
                        <div className="row gy-5 gx-60">
                            <div className="col-xl-6">
                                <div className="about-thumb">
                                    <div className="bg"></div>
                                    <div className="thumbShape1 d-none d-xxl-block cir36">
                                        <img src={aboutThumbShape1} alt="shape" />
                                    </div>
                                    <div className="thumbShape2 d-none d-xxl-block cir36">
                                        <img src={aboutThumbShape2} alt="shape" />
                                    </div>
                                    <div className="thumbShape3 d-none d-xxl-block cir36 float-bob-y">
                                        <img src={aboutThumbShape3} alt="shape" />
                                    </div>
                                    <div className="thumbShape4 d-none d-xxl-block cir36">
                                        <img src={aboutThumbShape4} alt="shape" />
                                    </div>
                                    <div className="main-thumb">
                                        <img src={aboutThumb1} alt="thumb" />
                                    </div>
                                    <div className="absolute-thumb float-bob-x">
                                        <img src={aboutThumb2} alt="thumb" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        <motion.div
                                            className="subtitle"
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            viewport={{ once: true,  margin: "-100px"  }}
                                        >
                                            About Our App <img src={fireIcon} alt="icon" />
                                        </motion.div>
                                        <motion.h2
                                            className="title"
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            viewport={{ once: true ,  margin: "-100px" }}
                                        >
                                            Simple Reports & Analytics
                                            Backdown As it
                                        </motion.h2>
                                        <motion.p
                                            className="section-desc"
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            viewport={{ once: true,  margin: "-100px"  }}
                                        >There are many variations
                                            of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some form, by injected
                                            humour, or randomised words which don't look even slightly believable. If you
                                            are going to use
                                        </motion.p>
                                    </div>
                                    <motion.ul
                                        className="checklist style1"
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <li><img src={checkMarkIcon} alt="icon" />
                                            With our Technological and Marketing Solutions.</li>
                                        <li><img src={checkMarkIcon} alt="icon" />
                                            We are trusted all over the world. </li>
                                        <li><img src={checkMarkIcon} alt="icon" />
                                            Start Your 14 Days Free Trials Today! </li>
                                    </motion.ul>
                                    <motion.div
                                        initial={{ x: 70, opacity: 0 }}
                                        whileInView={{x:0, opacity:1}}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        viewport={{ once: true,  margin: "-100px" }}
                                    >
                                        <Link className="theme-btn" to="about" smooth={true} duration={500}>Discover More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none">
                                                <g clip-path="url(#clip0_18_41)">
                                                    <path
                                                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_18_41">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
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

export default AboutSection
