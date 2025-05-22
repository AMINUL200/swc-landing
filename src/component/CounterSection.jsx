import React from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from "motion/react"
import FadeInUp from './AnimationCom/FadeInUp';

const CounterSection = ({ countData }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true // Changed to true to only trigger once
    });

    return (
        <div className="counter-section fix">
            <div className="counter-container-wrapper style1">
                <div className="container">
                    <div className="counter-wrapper style1 section-padding-2"
                        data-bg-src="assets/images/shape/counterShape1_1.png">
                        <div className="shape"></div>
                        <div ref={ref} className="container">
                            <div className="row gy-5">
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <FadeInUp
                                        as="div"
                                        delay={0.2}
                                        className='counter-box style1'
                                    >
                                        <div className="counter">
                                            {inView && (
                                                <CountUp
                                                    start={0}
                                                    end={countData?.number1 || 0}
                                                    duration={20} // Reduced duration for faster animation
                                                    className="counter-number"
                                                />
                                            )}
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="text">{countData?.paragraph1}</p>
                                    </FadeInUp>

                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <FadeInUp
                                        as="div"
                                        delay={0.4}
                                        className='counter-box style1'
                                    >
                                        <div className="counter">
                                            {inView && (
                                                <CountUp
                                                    start={0}
                                                    end={countData?.number2 || 0}
                                                    duration={20}
                                                    className="counter-number"
                                                />
                                            )}
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="text">{countData?.paragraph2}</p>
                                    </FadeInUp>

                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <FadeInUp
                                        as="div"
                                        delay={0.6}
                                        className='counter-box style1'
                                    >
                                        <div className="counter">
                                            {inView && (
                                                <CountUp
                                                    start={0}
                                                    end={countData?.number3 || 0}
                                                    duration={10}
                                                    className="counter-number"
                                                />
                                            )}
                                            <span className="plus">k</span>
                                        </div>
                                        <p className="text">{countData?.paragraph3}</p>
                                    </FadeInUp>

                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <FadeInUp
                                        as="div"
                                        delay={0.8}
                                        className='counter-box style1'
                                    >
                                        <div className="counter">
                                            {inView && (
                                                <CountUp
                                                    start={0}
                                                    end={countData?.number4 || 0}
                                                    duration={10}
                                                    className="counter-number"
                                                />
                                            )}
                                            <span className="plus">k</span>
                                        </div>
                                        <p className="text">{countData?.paragraph4}</p>
                                    </FadeInUp>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterSection