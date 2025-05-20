import React from 'react'
import { fireIcon, wcuIcon2_1, wcuIcon2_2, wcuThumb2_1, wcuThumb2_2, wcuThumb2_3 } from '../assets'
import { useInView } from 'react-intersection-observer';

const SponsorCompliances = () => {
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    // const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
    return (
        <section className="wcu-section">
            <div className="wcu-container-wrapper style2">
                <div className="container">
                    <div className="wcu-wrapper style2  section-padding fix">
                        <div className="container">
                            <div ref={ref1} className="row gy-5 gx-60 d-flex align-items-center">
                                <div className="col-xl-6">
                                    <div className="wcu-thumb">
                                        <div className={`main-thumb ${inView1 ? 'img-custom-anim-right fadeInUp delay-2' : ''} `} >
                                            <img src={wcuThumb2_1} alt="thumb" />
                                        </div>
                                        <div className="thumb2 float-bob-y"><img src={wcuThumb2_2}
                                            alt="thumb" /></div>
                                        <div className="thumb3 float-bob-x"><img src={wcuThumb2_3}
                                            alt="thumb" /></div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="wcu-content">
                                        <div className="section-title">
                                            <div className={`subtitle ${inView1 ? 'fadeInUp delay-1' : ''} `} >
                                                Customizations & Analysis
                                                <img src={fireIcon}
                                                    alt="icon" />
                                            </div>
                                            <h2 className={`title ${inView1 ? 'fadeInUp delay-2' : ''}`}>
                                                Manage your Team’s Easily Communication.

                                            </h2>
                                            <p className="text1 wow fadeInUp" data-wow-delay=".6s">

                                                Customizations & Analysisicon
                                                Manage your Team’s Easily Communication.
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even

                                            </p>
                                        </div>
                                        <div className={`fancy-box style3 mb-20 ${inView1 ? 'fadeInUp delay-4' : ''}`} >
                                            <div className="icon">
                                                <img src={wcuIcon2_1} alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h4> Easy Collaboration </h4>
                                                <p className="text">
                                                    There are many variations of passages of Lorem Ipsum available, but the majority have
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`fancy-box style3 ${inView1 ? 'fadeInUp delay-3' : ''}`} data-wow-delay=".6s">
                                            <div className="icon">
                                                <img src={wcuIcon2_2} alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h4>Innovative Solutions</h4>
                                                <p className="text">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                                            </div>
                                        </div>
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

export default SponsorCompliances
