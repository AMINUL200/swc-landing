import React from 'react'
import { fireIcon, workProcessShape1 } from '../assets'
import { motion } from "motion/react"
import FadeInUp from './AnimationCom/FadeInUp'


const WorkProcessSection = ({ workData }) => {




    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <FadeInUp
                            as="div"
                            delay={0.2}
                            className="subtitle"
                        >
                            {workData?.title}
                            <img src={fireIcon} alt="icon" />
                        </FadeInUp>
                        <FadeInUp
                            as="h2"
                            delay={0.3}
                            className="title"
                        >
                            {workData?.heading ?? 'Make Your Device Manage Everything For You!'}
                        </FadeInUp>

                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><img src={workProcessShape1} alt="shape" /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <FadeInUp
                                    as="div"
                                    delay={0.2}
                                    className='work-process-box style1 '
                                >
                                    <div className="step">{workData?.paragrapg}</div>
                                    <div className="title">{workData?.paragraph1}</div>
                                    <div className="text">
                                        {workData?.paragraph2}
                                    </div>
                                </FadeInUp>

                            </div>
                            <div className="col-xl-4">
                                <FadeInUp
                                    as="div"
                                    delay={0.4}
                                    className='work-process-box style1 child2'
                                >
                                    <div className="step"> {workData?.paragraph3 ?? 'STEP - 02'} </div>
                                    <div className="title">{workData?.paragraph4 ?? 'Create account '} </div>
                                    <div className="text">
                                        {workData?.paragraph5 ?? 'There are many variations of passages of Lorem'}
                                    </div>
                                </FadeInUp>

                            </div>
                            <div className="col-xl-4">
                                <FadeInUp
                                    as="div"
                                    delay={0.7}
                                    className='work-process-box style1 '
                                >
                                    <div className="step"> {workData?.paragraph6 ?? 'STEP - 03'}</div>
                                    <div className="title">{workData?.paragraph7 ?? 'Install App, & Enjoy '} </div>
                                    <div className="text">
                                        {workData?.paragraph8 ?? 'There are many variations of passages of Lorem'}
                                    </div>
                                </FadeInUp>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcessSection
