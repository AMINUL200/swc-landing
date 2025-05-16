import React from 'react'
import { fireIcon, wcuIcon1, wcuIcon2, wcuIcon3, wcuIcon4, wcuIcon5, wcuIcon6, wcuThumb1, wcuThumbShape1 } from '../assets'
import { useInView } from 'react-intersection-observer';
import { motion } from "motion/react"

const WcuSection = ({ wcuData }) => {

    const bounceInUpVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.6,
                duration: 2,
                delay: 0.3
            }
        }
    };



    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="section-title text-center mxw-685 mx-auto "
                    >
                        <div className="subtitle">
                            {wcuData?.title}
                            <img src={fireIcon} alt="icon" />
                        </div>
                        <h2 className="title">
                            {wcuData?.heading1}
                        </h2>
                    </motion.div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <div className="fancy-box style2">
                                        <div className="icon">
                                            <img src={wcuIcon1} alt="icon" />
                                        </div>
                                        <motion.div
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            viewport={{ once: true, margin: "-20px" }}
                                            className='content'
                                        >
                                            <h4>{wcuData?.paragraph1} </h4>
                                            <p className="text"> {wcuData?.paragraph2} </p>
                                        </motion.div>
                                    </div>
                                    <div className={`fancy-box style2`} >
                                        <div className="icon">
                                            <img src={wcuIcon2} alt="icon" />
                                        </div>
                                        <motion.div
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true, margin: "-20px" }}
                                            className="content">
                                            <h4> {wcuData?.paragraph3} </h4>
                                            <p className="text"> {wcuData?.paragraph4} </p>
                                        </motion.div>
                                    </div>
                                    <div className={`fancy-box style2`} >
                                        <div className="icon">
                                            <img src={wcuIcon3} alt="icon" />
                                        </div>
                                        <motion.div
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            viewport={{ once: true, margin: "-20px" }}
                                            className="content">
                                            <h4> {wcuData?.paragraph5} </h4>
                                            <p className="text"> {wcuData?.paragraph6}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <motion.div
                                    initial={{ y: 80, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true, margin: "-20px" }}
                                    className={`wcu-thumb `} >
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        variants={bounceInUpVariants}
                                        className={`main-thumb`}
                                    >
                                        {/* <img src={wcuData?.main_image} alt="thumb" /> */}
                                        <img src={`https://skilledworkerscloud.co.uk/api-admin/${wcuData?.main_image}`} alt="thumb" />
                                    </motion.div>
                                    <div className="shape">
                                        <img src={wcuThumbShape1} alt="shape" />
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <div className={`fancy-box style2 `} >
                                        <div className="icon">
                                            <img src={wcuIcon4} alt="icon" />
                                        </div>
                                        <motion.div
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            viewport={{ once: true, margin: "-20px" }}
                                            className="content">
                                            <h4>{wcuData?.paragraph7} </h4>
                                            <p className="text"> {wcuData?.paragraph8} </p>
                                        </motion.div>
                                    </div>
                                    <div className={`fancy-box style2 `}  >
                                        <div className="icon">
                                            <img src={wcuIcon5} alt="icon" />
                                        </div>
                                        <motion.div
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true, margin: "-20px" }}
                                            className="content">
                                            <h4> {wcuData?.paragraph9} </h4>
                                            <p className="text"> {wcuData?.paragraph10} </p>
                                        </motion.div>
                                    </div>
                                    <div className={`fancy-box style2 `}  >
                                        <div className="icon">
                                            <img src={wcuIcon6} alt="icon" />
                                        </div>
                                        <motion.div
                                            initial={{ y: 80, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            viewport={{ once: true, margin: "-20px" }}
                                            className="content">
                                            <h4> {wcuData?.paragraph11} </h4>
                                            <p className="text"> {wcuData?.paragraph12} </p>
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

export default WcuSection
