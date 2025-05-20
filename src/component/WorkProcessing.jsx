import React from 'react'
import { fireIcon, wpShape2_1, wpThumb2_1 } from '../assets'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer';

const WorkProcessing = ({workPrecessingData}) => {
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    console.log(workPrecessingData);
    
    return (
        <section class="wp-section section-padding fix">
            <div class="container">
                <div class="wp-wrapper style2">
                    <div class="shape">
                        <img src={wpShape2_1} alt="shape" />
                    </div>
                    <div class="row gy-5 gy-md-0 gx-60 d-flex align-items-center">
                        <div class="col-xl-4 order-2 order-xl-1">
                            <div class="wp-content style2">
                                <div class="section-title">
                                    <motion.div
                                        class="subtitle "
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true, margin: "-50px" }}>
                                         {workPrecessingData?.title}
                                        <img src={fireIcon} alt="icon" />
                                    </motion.div>
                                    <motion.h2
                                        class="title "
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true, margin: "-50px" }}>
                                        {workPrecessingData?.heading}
                                    </motion.h2>
                                </div>
                                <div class="wp-accordion">
                                    <div class="accordion" id="accordion">
                                        <motion.div
                                            class="accordion-item mb-3 "
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <h5 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                    {workPrecessingData?.button_name1}
                                                </button>
                                            </h5>
                                            <div id="faq1" class="accordion-collapse show" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    {workPrecessingData?.paragraph1}
                                                   
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            class="accordion-item mb-3 "
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"
                                                    aria-controls="faq2">
                                                     {workPrecessingData?.button_name2}
                                                </button>
                                            </h5>
                                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    {workPrecessingData?.paragraph2}
                                                  
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            class="accordion-item mb-3 "
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.7 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                                    aria-controls="faq3">
                                                    {workPrecessingData?.button_name3}
                                                </button>
                                            </h5>
                                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    {workPrecessingData?.paragraph3}
                                                    
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            class="accordion-item wow fadeInUp" data-wow-delay=".3s"
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="true"
                                                    aria-controls="faq4">
                                                    {workPrecessingData?.button_name4}
                                                </button>
                                            </h5>
                                            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    {workPrecessingData?.paragraph4}
                                                    
                                                </div>
                                            </div>
                                        </motion.div>
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
                                    <img src={workPrecessingData?.image} alt="thumb" />
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
