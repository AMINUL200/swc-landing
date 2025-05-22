import React from 'react'
import { fireIcon, wcuIcon1, wcuIcon2, wcuIcon3, wcuIcon4, wcuIcon5, wcuIcon6, wcuIcon7, wcuIcon8, wcuIcon9, wcuThumb1, wcuThumbShape1 } from '../assets'
import { useInView } from 'react-intersection-observer';
import { motion } from "motion/react"
import FadeInUp from './AnimationCom/FadeInUp';

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
                    <FadeInUp
                        as='div'
                        className='section-title text-center mxw-685 mx-auto '
                        delay={0.2}
                    >
                        <div className="subtitle">
                            {wcuData?.title}
                            <img src={fireIcon} alt="icon" />
                        </div>
                        <h2 className="title">
                            {wcuData?.heading1}
                        </h2>
                    </FadeInUp>

                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <div className="fancy-box style2">
                                        <div className="icon">
                                            <img src={wcuIcon1} alt="icon" />
                                        </div>
                                        <FadeInUp
                                            as='div'
                                            className='content'
                                            delay={0.2}
                                        >
                                            <h4>{wcuData?.paragraph1} </h4>
                                            <p className="text"> {wcuData?.paragraph2} </p>
                                        </FadeInUp>

                                    </div>
                                    <div className={`fancy-box style2`} >
                                        <div className="icon">
                                            <img src={wcuIcon2} alt="icon" />
                                        </div>
                                        <FadeInUp
                                            as='div'
                                            className='content'
                                            delay={0.4}
                                        >
                                            <h4> {wcuData?.paragraph3} </h4>
                                            <p className="text"> {wcuData?.paragraph4} </p>
                                        </FadeInUp>

                                    </div>
                                    <div className={`fancy-box style2`} >
                                        <div className="icon">
                                            <img src={wcuIcon5} alt="icon" />
                                        </div>
                                        <FadeInUp
                                            as='div'
                                            className='content'
                                            delay={0.6}
                                        >
                                            <h4> {wcuData?.paragraph5} </h4>
                                            <p className="text"> {wcuData?.paragraph6}</p>
                                        </FadeInUp>

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
                                        style={{ width: '445px' }}
                                    >
                                        <img src={wcuData?.main_image} alt="thumb" />
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
                                            <img src={wcuIcon8} alt="icon" />
                                        </div>
                                        <FadeInUp
                                            as='div'
                                            className='content'
                                            delay={0.2}
                                        >
                                            <h4>{wcuData?.paragraph7} </h4>
                                            <p className="text"> {wcuData?.paragraph8} </p>
                                        </FadeInUp>

                                    </div>
                                    <div className={`fancy-box style2 `}  >
                                        <div className="icon">
                                            <img src={wcuIcon9} alt="icon" />
                                        </div>
                                        <FadeInUp
                                            as='div'
                                            className='content'
                                            delay={0.4}
                                        >
                                            <h4> {wcuData?.paragraph9} </h4>
                                            <p className="text"> {wcuData?.paragraph10} </p>
                                        </FadeInUp>

                                    </div>
                                    <div className={`fancy-box style2 `}  >
                                        <div className="icon">
                                            <img src={wcuIcon7} alt="icon" />
                                        </div>
                                        <FadeInUp
                                            as='div'
                                            className='content'
                                            delay={0.6}
                                        >
                                            <h4> {wcuData?.paragraph11} </h4>
                                            <p className="text"> {wcuData?.paragraph12} </p>
                                        </FadeInUp>
                                        
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
