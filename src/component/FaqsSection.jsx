import React from 'react'
import { faqThumb1, faqThumb2, fireIcon } from '../assets'
import { useInView } from 'react-intersection-observer';
import { motion } from "motion/react"

const FaqsSection = ({ faqHeadData, faqQAData }) => {

    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });


    return (
        <section className="faq-section section-padding  fix">
            <div className="container">
                <div className="faq-wrapper style1">
                    <div className="row gy-5 gy-xl-0 gx-60 d-flex align-items-start">
                        <div className="col-xl-6">
                            <div className="faq-content style1">
                                <div className="section-title">
                                    <motion.div className={`subtitle `}
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        {faqHeadData?.title}
                                        <img src={fireIcon} alt="icon" />
                                    </motion.div>
                                    <motion.h2 className={`title`}
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        {faqHeadData?.heading1}
                                    </motion.h2>
                                    <motion.p className={`section-desc`}
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        {faqHeadData?.heading2}
                                    </motion.p>
                                </div>
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">

                                        {faqQAData?.map((faq, index) => (
                                            <motion.div
                                                key={faq.id}
                                                className={`accordion-item mb-3 `}
                                                initial={{ y: 80, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                            >
                                                <h5 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${index === faqQAData.length - 1 ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#faq${faq.id}`}
                                                        aria-expanded={index === faqQAData.length - 1 ? "true" : "false"}
                                                        aria-controls={`faq${faq.id}`}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h5>
                                                <div
                                                    id={`faq${faq.id}`}
                                                    className={`accordion-collapse collapse ${index === faqQAData.length - 1 ? 'show' : ''}`}
                                                    data-bs-parent="#accordion"
                                                >
                                                    <div className="accordion-body">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={ref3} className="col-xl-6">
                            <div className="faq-thumb">
                                <img className={`main-thumb  ${inView3 ? 'fadeInUp delay-2' : ''} `}
                                    src={faqHeadData?.image2} alt="thumb" />
                                <div className={`absolute-thumb   ${inView3 ? 'float-bob-x' : ''}`}>
                                    <img className='img-ph' src={faqHeadData?.image1} alt="thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqsSection
