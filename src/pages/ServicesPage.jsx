import React from 'react'
import BreadCumbSection from '../component/BreadCumbSection'
import { csharf, css, html, js, laravel, mongodb, nextjs, nodejs, python, react, sass, serviceIcon3_1, serviceIcon3_2, serviceIcon3_3, serviceIcon3_5, serviceIcon3_6, servicesThumb1_1, teamThumb1_1, teamThumb1_2, teamThumb1_3, testimonialShape2_1, testimonialShape2_2, typescript, wordpress } from '../assets'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ServicesPage = () => {

    const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.4, triggerOnce: true });
    const [ref5, inView5] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref6, inView6] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref7, inView7] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref8, inView8] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref9, inView9] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref10, inView10] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ref11, inView11] = useInView({ threshold: 0.2, triggerOnce: true });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom, duration: 0.4, ease: "easeOut" }
        })
    };

    const fadeInLeft = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom, // Stagger delay
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <>
            <BreadCumbSection page='Services' />

            {/* <!-- Service Section S T A R T --> */}
            <section className="service-section-3">
                <div className="container">
                    <div ref={ref1} className={`service-thumb section-padding pb-0 ${inView1 ? 'img-custom-anim-left  fadeInLeft' : ''} `} style={{ animationDelay: '0.3s' }}>
                        <img src={servicesThumb1_1} alt="thumb" />
                    </div>
                </div>
                <div className="service-container-wrapper style3  section-padding fix">
                    <div className="shape1 fix"><img src={testimonialShape2_1} alt="shape" /></div>
                    <div className="shape2 fix"><img src={testimonialShape2_2} alt="shape" /></div>
                    <div className="container">
                        <div className="service-wrapper style3">
                            <h2 ref={ref2} className={`${inView2 ? 'fadeInUp' : ''} `} style={{ animationDelay: '0.3s' }} >Join our team to create the best digital solutions.
                            </h2>
                            <motion.p className={`text`}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                custom={0.5}
                            >
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority
                                have suffered alteration in some form, by injected humour, or randomised words which don't look
                                even slightly believable. If you are going to use There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                randomised words which don't look even slightly believable. If you are going to use
                            </motion.p>

                            <Link to='/contact' >
                                <motion.span
                                    className="theme-btn"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover={{ y: -2 }}
                                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
                                    custom={0.2}
                                > Join Our Team
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <g clip-path="url(#clip0_199_944)">
                                            <path
                                                d="M11.6123 3.61183L10.8996 4.32455L14.0711 7.49604H0.000488281V8.50399H14.0711L10.8996 11.6754L11.6123 12.3882L16.0005 7.99998L11.6123 3.61183Z"
                                                fill="white"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_199_944">
                                                <rect width="16" height="16" fill="white" transform="translate(0.000488281)">
                                                </rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </motion.span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Service Section S T A R T --> */}
            <section className="service-section section-padding fix">
                <div className="service-container-wrapper style1">
                    <div className="container">
                        <div className="service-wrapper style1">
                            <div className="row gy-5">
                                <div className="col-xl-4 col-md-6">
                                    <div ref={ref5} className={`service-box style3 ${inView5 ? 'fadeInLeft' : ''} `} style={{ animationDelay: '.3s' }}>
                                        <div className="icon-box style3">
                                            <img src={serviceIcon3_1} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="service-details.html"> Software Features </a></h3>
                                            <p className="text">There are many variations of passages of Lorem Ipsum available, but
                                                the majority have suffered alteration in some form,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div ref={ref6} className={`service-box style3 active ${inView6 ? 'fadeInLeft' : ''} `} style={{ animationDelay: '0.4s' }}>
                                        <div className="icon-box style3">
                                            <img src={serviceIcon3_2} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="service-details.html"> Subscription Plans </a></h3>
                                            <p className="text">There are many variations of passages of Lorem Ipsum available, but
                                                the majority have suffered alteration in some form,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div ref={ref7} className={`service-box style3 ${inView7 ? 'fadeInLeft' : ''} `} style={{ animationDelay: '0.6s' }}>
                                        <div className="icon-box style3">
                                            <img src={serviceIcon3_3} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="service-details.html"> Customization Option </a></h3>
                                            <p className="text">There are many variations of passages of Lorem Ipsum available, but
                                                the majority have suffered alteration in some form,</p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={ref8} className="col-xl-4 col-md-6">
                                    <div className={`service-box style3 ${inView8 ? 'fadeInLeft' : ''} `} style={{ animationDelay: '0.3s' }}>
                                        <div className="icon-box style3">
                                            <img src={serviceIcon3_5} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="service-details.html"> Choose a App </a></h3>
                                            <p className="text">There are many variations of passages of Lorem Ipsum available, but
                                                the majority have suffered alteration in some form,</p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={ref9} className="col-xl-4 col-md-6">
                                    <div className={`service-box style3 ${inView9 ? 'fadeInLeft' : ''} `} style={{ animationDelay: '0.4s' }}>
                                        <div className="icon-box style3">
                                            <img src={serviceIcon3_5} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="service-details.html"> Clean Modern Code </a></h3>
                                            <p className="text">There are many variations of passages of Lorem Ipsum available, but
                                                the majority have suffered alteration in some form,</p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={ref10} className="col-xl-4 col-md-6">
                                    <div className={`service-box style3 ${inView10 ? 'fadeInLeft' : ''} `} style={{ animationDelay: '0.6s' }}>
                                        <div className="icon-box style3">
                                            <img src={serviceIcon3_6} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="service-details.html"> User Interactive </a></h3>
                                            <p className="text">There are many variations of passages of Lorem Ipsum available, but
                                                the majority have suffered alteration in some form,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Team Section S T A R T --> */}
            <section className="team-section-3 section-padding pt-0 fix">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto">
                        <motion.h2
                            className="title"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={0.3}
                        >
                            We Provide the Best Quality
                        </motion.h2>
                    </div>
                    <div className="row">
                        <div ref={ref3} className="col-xl-4 col-md-6">
                            <motion.div
                                className="team-card style1"
                                variants={fadeInLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={0.2}
                            >
                                <div className="team-thumb">
                                    <img src={teamThumb1_1} alt="thumb" />
                                </div>
                                <div className="team-card-content">
                                    <h3>
                                        <a href="team-details.html">Masirul Islam</a>
                                    </h3>
                                    <p className="designation">co-Founder</p>
                                    <ul className="social-links">
                                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div ref={ref4} className="col-xl-4 col-md-6">
                            <motion.div
                                className="team-card style1"
                                variants={fadeInLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={0.4}
                            >
                                <div className="team-thumb">
                                    <img src={teamThumb1_2} alt="thumb" />
                                </div>
                                <div className="team-card-content">
                                    <h3>
                                        <a href="team-details.html">Tonya Martin</a>
                                    </h3>
                                    <p className="designation">co-Founder</p>
                                    <ul className="social-links">
                                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div ref={ref11} className="col-xl-4 col-md-6">
                            <motion.div
                                className="team-card style1"
                                variants={fadeInLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={0.7}
                            >
                                <div className="team-thumb">
                                    <img src={teamThumb1_3} alt="thumb" />
                                </div>
                                <div className="team-card-content">
                                    <h3>
                                        <a href="team-details.html">Stephan Bullok</a>
                                    </h3>
                                    <p className="designation">co-Founder</p>
                                    <ul className="social-links">
                                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Used Technology Section Start --> */}
            <section className="used-technology-section section-padding pt-0 fix">
                <div className="container">
                    <div className="section-title text-center mb-50 mx-auto">
                        <motion.h2
                            className="title "
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={0.4}
                        >Technologies Behind Our Solutions.
                        </motion.h2>
                    </div>
                    <ul className="nav">
                        <motion.li
                            className="nav-item"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={0.2}
                        >
                            <a href="#End" data-bs-toggle="tab" className="nav-link active">
                                Front End
                            </a>
                        </motion.li>
                        <motion.li
                            className="nav-item "
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={0.4}
                        >
                            <a href="#Back" data-bs-toggle="tab" className="nav-link">
                                Back End
                            </a>
                        </motion.li>
                    </ul>
                    <div className="tab-content">
                        <div id="End" className="tab-pane fade show active">
                            <div className="technology-box-items-wrapper style-4 mt-0">
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={html} alt="logo" />
                                    </div>
                                    <div className="title">HTML5</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={css} alt="logo" />
                                    </div>
                                    <div className="title">CSS3</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={sass} alt="logo" />
                                    </div>
                                    <div className="title">Sass</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={js} alt="logo" />
                                    </div>
                                    <div className="title">JavaScript</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={react } alt="logo" />
                                    </div>
                                    <div className="title">React</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={typescript} alt="logo" />
                                    </div>
                                    <div className="title">TypeScript</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={nextjs} alt="logo" />
                                    </div>
                                    <div className="title">Next.js</div>
                                </div>
                            </div>
                        </div>
                        <div id="Back" className="tab-pane fade">
                            <div className="technology-box-items-wrapper style-4 mt-0">
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={laravel} alt="logo" />
                                    </div>
                                    <div className="title">LARAVEL</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={wordpress} alt="logo" />
                                    </div>
                                    <div className="title">WORDPRESS</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={python} alt="logo" />
                                    </div>
                                    <div className="title">PYTHON</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={csharf} alt="logo" />
                                    </div>
                                    <div className="title">C#</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={nodejs} alt="logo" />
                                    </div>
                                    <div className="title">NODE JS</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={mongodb} alt="logo" />
                                    </div>
                                    <div className="title">MONGODB</div>
                                </div>
                                <div className="technology-box-items style-4">
                                    <div className="logo">
                                        <img src={nextjs} alt="logo" />
                                    </div>
                                    <div className="title">Next.js</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServicesPage
