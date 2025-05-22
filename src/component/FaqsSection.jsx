import React from 'react'
import { faqThumb1, faqThumb2, fireIcon } from '../assets'
import { useInView } from 'react-intersection-observer';
import { motion } from "motion/react"
import FadeInUp from './AnimationCom/FadeInUp';

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
                                    <FadeInUp
                                        as="div"
                                        delay={0.2}
                                        className='subtitle'
                                    >
                                        {faqHeadData?.title}
                                        <img src={fireIcon} alt="icon" />
                                    </FadeInUp>
                                    <FadeInUp
                                        as="h2"
                                        delay={0.4}
                                        className='title'
                                    >
                                        {faqHeadData?.heading1}
                                    </FadeInUp>

                                    <FadeInUp
                                        as="p"
                                        delay={0.6}
                                        className='section-desc'
                                    >
                                        {faqHeadData?.heading2}
                                    </FadeInUp>


                                </div>
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">

                                        {faqQAData?.map((faq, index) => (
                                            <FadeInUp
                                                as="div"
                                                delay={index * 0.2}
                                                className='accordion-item mb-3'
                                                key={faq.id}
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
                                            </FadeInUp>

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
