import React from 'react'
import { fireIcon, wpShape2_1, wpThumb2_1 } from '../assets'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer';
import FadeInUp from './AnimationCom/FadeInUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const WorkProcessing = ({ workPrecessingData }) => {
    // console.log("workPrecessingData", workPrecessingData);

    const moduleData = workPrecessingData?.module?.[0] || {};
    const faqDetails = workPrecessingData?.details || [];

    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section class="wp-section section-padding fix">
            <div class="container">
                <div class="wp-wrapper style2" id='customizations'>
                    <div class="shape">
                        <img src={wpShape2_1} alt="shape" />
                    </div>
                    <div class="row gy-5 gy-md-0 gx-60 d-flex align-items-center">
                        <div class="col-xl-4 order-2 order-xl-1">
                            <div class="wp-content style2">
                                <div class="section-title">
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
                                <div class="wp-accordion">
                                    <div class="accordion" id="accordion">

                                        <FadeInUp
                                            as='div'
                                            delay={0.3}
                                            className='accordion-item mb-3'
                                        >
                                            <h5 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                    {faqDetails[0]?.question}
                                                    <span className="accordion-icon">
                                                        <FontAwesomeIcon
                                                            icon={faPlus}
                                                            className="plus-icon"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faMinus}
                                                            className="minus-icon"
                                                        />
                                                    </span>
                                                </button>
                                            </h5>
                                            <div id="faq1" class="accordion-collapse show" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    {faqDetails[0]?.answer}

                                                </div>
                                            </div>
                                        </FadeInUp>


                                        <FadeInUp
                                            as='div'
                                            delay={0.5}
                                            className='accordion-item mb-3'
                                        >
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"
                                                    aria-controls="faq2">
                                                    {faqDetails[1]?.question}
                                                    <span className="accordion-icon">
                                                        <FontAwesomeIcon
                                                            icon={faPlus}
                                                            className="plus-icon"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faMinus}
                                                            className="minus-icon"
                                                        />
                                                    </span>
                                                </button>
                                            </h5>
                                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    {faqDetails[1]?.answer}

                                                </div>
                                            </div>
                                        </FadeInUp>
                                        <FadeInUp
                                            as='div'
                                            delay={0.7}
                                            className='accordion-item mb-3'
                                        >
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                                    aria-controls="faq3">
                                                    {faqDetails[2]?.question}
                                                    <span className="accordion-icon">
                                                        <FontAwesomeIcon
                                                            icon={faPlus}
                                                            className="plus-icon"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faMinus}
                                                            className="minus-icon"
                                                        />
                                                    </span>
                                                </button>
                                            </h5>
                                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    {faqDetails[2]?.answer}
                                                </div>
                                            </div>
                                        </FadeInUp>
                                        <FadeInUp
                                            as='div'
                                            delay={0.3}
                                            className='accordion-item'
                                        >
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="true"
                                                    aria-controls="faq4">
                                                    {faqDetails[3]?.question}
                                                    <span className="accordion-icon">
                                                        <FontAwesomeIcon
                                                            icon={faPlus}
                                                            className="plus-icon"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faMinus}
                                                            className="minus-icon"
                                                        />
                                                    </span>
                                                </button>
                                            </h5>
                                            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    {faqDetails[3]?.answer}

                                                </div>
                                            </div>
                                        </FadeInUp>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 order-1 order-xl-2">
                            <motion.div
                                class="wp-thumb wow fadeInUp" data-wow-delay=".4s"
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <div ref={ref1} class={`main-thumb  ${inView1 ? 'img-custom-anim-right' : ''}`}>
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

export default WorkProcessing
