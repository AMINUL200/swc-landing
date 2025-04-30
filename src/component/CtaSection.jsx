import React from 'react'
import { ctaAppleStore1, ctaplayStore1, ctaShape1, ctaShape2, ctaShape3, ctaShape4, ctaThumb1, fireIcon } from '../assets'
import { useInView } from 'react-intersection-observer';


const CtaSection = () => {
    const [ref8, inView8] = useInView({ threshold: 0.1, triggerOnce: true });
    return (
        <section className="cta-section" id='our-app'>
            <div className="cta-container-wrapper style1">
                <div className="container">
                    <div className="cta-wrapper style1  section-padding fix">
                        <div className="shape1 d-none d-xxl-block"><img src={ctaShape1} alt="shape" />
                        </div>
                        <div className="shape2 d-none d-xxl-block"><img src={ctaShape2 } alt="shape" />
                        </div>
                        <div className="shape3 d-none d-xxl-block"><img src={ctaShape3} alt="shape" />
                        </div>
                        <div className="shape4 d-none d-xxl-block"><img src={ctaShape4} alt="shape" />
                        </div>
                        <div className="container">
                            <div ref={ref8} className="row gy-5">
                                <div className="col-xl-8 order-2 order-xl-1">
                                    <div className="cta-content">
                                        <div className="section-title">
                                            <div className={`subtitle text-white bg2 ${inView8 ? 'fadeInUp delay-1' : ''} `}>
                                                Our App <img src={fireIcon} alt="icon" />
                                            </div>
                                            <h2 className={`title text-white ${inView8 ? 'fadeInUp delay-2' : ''}`} >Download our app
                                                and start your free trail to get
                                                started today!</h2>
                                            <p className={`section-desc text-white mxw-651 ${inView8 ? 'fadeInUp delay-4' : ''}`} >
                                                There are many variations of passages
                                                of Lorem Ipsum available, but the majority have suffered alteration in some
                                                form, by injected humour, or randomised</p>
                                        </div>
                                        <a className="playstore" href="https://play.google.com/store"><img
                                            src={ctaplayStore1} alt="img" /></a>
                                        <a href="https://www.apple.com/store"><img
                                            src={ctaAppleStore1} alt="img" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 order-1 order-xl-2">
                                    <div className={`cta-thumb ${inView8 ? 'fadeInUp delay-1' : ''}`} data-wow-delay=".2s">
                                        <img src={ctaThumb1} alt="thumb" />
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

export default CtaSection
