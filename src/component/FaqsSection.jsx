import React from 'react'
import { faqThumb1, faqThumb2, fireIcon } from '../assets'
import { useInView } from 'react-intersection-observer';
import { div } from 'framer-motion/client';

const FaqsSection = ({ faqHeadData, faqQAData }) => {
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref6, inView6] = useInView({ threshold: 0.1, triggerOnce: true });


    return (
        <section className="faq-section section-padding  fix">
            <div className="container">
                <div className="faq-wrapper style1">
                    <div className="row gy-5 gy-xl-0 gx-60 d-flex align-items-start">
                        <div className="col-xl-6">
                            <div className="faq-content style1">
                                <div ref={ref1} className="section-title">
                                    <div className={`subtitle ${inView1 ? 'fadeInUp delay-1' : ''} `} >
                                        {faqHeadData?.title}
                                        <img src={fireIcon} alt="icon" />
                                    </div>
                                    <h2 className={`title ${inView1 ? 'fadeInUp delay-2' : ''}`} > {faqHeadData?.heading1} </h2>
                                    <p className={`section-desc ${inView1 ? 'fadeInUp delay-4' : ''} `} >
                                        {faqHeadData?.heading2}

                                    </p>
                                </div>
                                <div ref={ref6} className="faq-accordion">
                                    <div className="accordion" id="accordion">

                                        {faqQAData?.map((faq, index) => (
                                            <div
                                                key={faq.id}
                                                className={`accordion-item mb-3 ${inView6 ? 'fadeInUp' : ''}`}
                                                style={{ animationDelay: `${0.3 + (index * 0.2)}s` }}
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
                                            </div>
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
