import React from 'react'
import { fireIcon, workProcessShape1 } from '../assets'
import { motion } from "motion/react"


const WorkProcessSection = () => {
  

  

    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <motion.div
                            className='subtitle'
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            How It Work <img src={fireIcon} alt="icon" />
                        </motion.div>
                        <motion.h2
                            className='title'
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        >Make Your Device Manage Everything For You!</motion.h2>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><img src={workProcessShape1} alt="shape" /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <motion.div
                                    initial={{ y: 80, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className={`work-process-box style1 `}
                                >
                                    <div className="step">STEP - 01</div>
                                    <div className="title">Download App</div>
                                    <div className="text">There are many variations of passages of Lorem</div>
                                </motion.div>
                            </div>
                            <div className="col-xl-4">
                                <motion.div
                                    initial={{ y: 80, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className={`work-process-box style1 child2  `}
                                >
                                    <div className="step">STEP - 02</div>
                                    <div className="title">Create account</div>
                                    <div className="text">There are many variations of passages of Lorem</div>
                                </motion.div>
                            </div>
                            <div className="col-xl-4">
                                <motion.div
                                    initial={{ y: 80, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className={`work-process-box style1 `}
                                >
                                    <div className="step">STEP - 03</div>
                                    <div className="title">Install App, & Enjoy</div>
                                    <div className="text">There are many variations of passages of Lorem</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcessSection
