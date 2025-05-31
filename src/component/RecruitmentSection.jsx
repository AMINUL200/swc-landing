import React from 'react'
import { fireIcon, wpShape2_1, wpThumb2_1 } from '../assets'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import FadeInUp from './AnimationCom/FadeInUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const RecruitmentSection = ({ recruitmentData }) => {
    const moduleData = recruitmentData?.module?.[0] || {};
    const faqDetails = recruitmentData?.details || [];
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="wp-section section-padding fix">
            <div className="container">
                <div className="wp-wrapper style2" id='customizations'>
                    <div className="shape-left">
                        <img src={wpShape2_1} alt="shape" />
                    </div>
                    <div className="row gy-5 gy-md-0 gx-60 d-flex align-items-center flex-row-reverse">
                        <div className="col-xl-4 order-2 order-xl-1">
                            <div className="wp-content style2">
                                <div className="section-title">
                                    <FadeInUp
                                        as='div'
                                        delay={0.2}
                                        className='subtitle'
                                    >
                                        {moduleData?.title}
                                        <img src={fireIcon} alt="icon" />
                                    </FadeInUp>
                                    <FadeInUp
                                        as='h2'
                                        delay={0.4}
                                        className='title'
                                    >
                                        {moduleData?.heading1}
                                    </FadeInUp>
                                </div>
                                <div className="wp-accordion">
                                    <div className="accordion" id="recruitmentAccordion">
                                        {faqDetails.map((faq, index) => (
                                            <FadeInUp
                                                key={index}
                                                as='div'
                                                delay={0.3 + (index * 0.2)}
                                                className='accordion-item mb-3'
                                            >
                                                <h5 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#recruitmentFaq${index}`}
                                                        aria-expanded={index === 0 ? 'true' : 'false'}
                                                        aria-controls={`recruitmentFaq${index}`}
                                                    >
                                                        {faq?.question}
                                                        <span className="accordion-icon">
                                                            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                                                            <FontAwesomeIcon icon={faMinus} className="minus-icon" />
                                                        </span>
                                                    </button>
                                                </h5>
                                                <div
                                                    id={`recruitmentFaq${index}`}
                                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                    data-bs-parent="#recruitmentAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        {faq?.answer}
                                                    </div>
                                                </div>
                                            </FadeInUp>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 order-1 order-xl-2">
                            <motion.div
                                className="wp-thumb wow fadeInUp"
                                data-wow-delay=".4s"
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <div ref={ref1} className={`main-thumb  ${inView1 ? 'img-custom-anim-right' : ''}`}>
                                    <img src={moduleData?.image1} alt="thumb" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecruitmentSection
