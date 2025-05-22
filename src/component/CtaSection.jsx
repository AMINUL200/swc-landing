import React from 'react'
import { ctaAppleStore1, ctaplayStore1, ctaShape1, ctaShape2, ctaShape3, ctaShape4, ctaThumb1, fireIcon } from '../assets'
import FadeInUp from './AnimationCom/FadeInUp'
import FadeInRight from './AnimationCom/FadeInRight'
import FadeInLeft from './AnimationCom/FadeInLeft'

const CtaSection = ({ ctaData }) => {



    return (
        <section className="cta-section" id='our-app'>
            <div className="cta-container-wrapper style1">
                <div className="container">
                    <div className="cta-wrapper style1  section-padding fix">
                        <div className="shape1 d-none d-xxl-block"><img src={ctaShape1} alt="shape" />
                        </div>
                        <div className="shape2 d-none d-xxl-block"><img src={ctaShape2} alt="shape" />
                        </div>
                        <div className="shape3 d-none d-xxl-block"><img src={ctaShape3} alt="shape" />
                        </div>
                        <div className="shape4 d-none d-xxl-block"><img src={ctaShape4} alt="shape" />
                        </div>
                        <div className="container">
                            <div className="row gy-5">
                                <div className="col-xl-8 order-2 order-xl-1">
                                    <div className="cta-content">
                                        <div className="section-title">
                                            <FadeInUp
                                                as='div'
                                                delay={0.2}
                                                className='subtitle text-white bg2'
                                            >
                                                {ctaData?.title}
                                                <img src={fireIcon} alt="icon" />
                                            </FadeInUp>
                                            <FadeInUp
                                                as='h2'
                                                delay={0.4}
                                                className='title text-white'
                                            >
                                                {ctaData?.heading1}
                                            </FadeInUp>
                                            <FadeInUp
                                                as='p'
                                                delay={0.6}
                                                className='section-desc text-white mxw-651 '
                                            >
                                                {ctaData?.paragraph1}
                                            </FadeInUp>

                                        </div>
                                        <FadeInRight
                                            as='a'
                                            delay={0.4}
                                            className='playstore'
                                            href="https://play.google.com/store"
                                            style={{ display: 'inline-block' }}
                                        >
                                            <img src={ctaData?.image2} alt="img" />
                                        </FadeInRight>

                                        <FadeInLeft
                                            as='a'
                                            delay={0.4}
                                            className='playstore'
                                            href="https://www.apple.com/store"
                                            style={{ display: 'inline-block' }}
                                        >
                                            <img src={ctaData?.image3} alt="img" />
                                        </FadeInLeft>


                                    </div>
                                </div>
                                <div className="col-xl-4 order-1 order-xl-2">
                                    <FadeInUp
                                        as='div'
                                        delay={0.3}
                                        className='cta-thumb'
                                    >
                                        <img src={ctaData?.image1} alt="thumb" />
                                    </FadeInUp>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection
