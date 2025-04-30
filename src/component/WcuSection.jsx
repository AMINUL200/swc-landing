import React from 'react'
import { fireIcon, wcuIcon1, wcuIcon2, wcuIcon3, wcuIcon4, wcuIcon5, wcuIcon6, wcuThumb1, wcuThumbShape1 } from '../assets'
import { useInView } from 'react-intersection-observer';


const WcuSection = () => {
    const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div ref={ref4} className="container">
                    <div className={`section-title text-center mxw-685 mx-auto ${inView4 ? 'fadeInUp delay-1' : ''} `}>
                        <div className="subtitle">
                            Why using our app<img src={fireIcon} alt="icon" />
                        </div>
                        <h2 className="title">Our app is great for individuals, startups and enterprises</h2>
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <div className="fancy-box style2">
                                        <div className="icon">
                                            <img src={wcuIcon1} alt="icon" />
                                        </div>
                                        <div className={`content ${inView4 ? 'fadeInUp delay-1' : ''} `} >
                                            <h4>High usability</h4>
                                            <p className="text">There are many variations of passages of Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className={`fancy-box style2 ${inView4 ? 'fadeInUp delay-2' : ''} `} >
                                        <div className="icon">
                                            <img src={wcuIcon2} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h4>Action Reminder</h4>
                                            <p className="text">There are many variations of passages of Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className={`fancy-box style2 ${inView4 ? 'fadeInUp delay-4' : ''} `} >
                                        <div className="icon">
                                            <img src={wcuIcon3} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h4>Merge Files</h4>
                                            <p className="text">There are many variations of passages of Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className={`wcu-thumb  ${inView4 ? 'fadeInUp delay-1' : ''} `} >
                                    <div className={`main-thumb  ${inView4 ? 'bounceInUp delay-4' : ''} `}>
                                        <img src={wcuThumb1} alt="thumb" />
                                    </div>
                                    <div className="shape">
                                        <img src={wcuThumbShape1} alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <div className={`fancy-box style2 ${inView4 ? 'fadeInUp delay-1' : ''} `} >
                                        <div className="icon">
                                            <img src={wcuIcon4} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h4>Free Live Chat</h4>
                                            <p className="text">There are many variations of passages of Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className={`fancy-box style2 ${inView4 ? 'fadeInUp delay-2' : ''} `}  >
                                        <div className="icon">
                                            <img src={wcuIcon5} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h4>Social Share</h4>
                                            <p className="text">There are many variations of passages of Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className={`fancy-box style2 ${inView4 ? 'fadeInUp delay-4' : ''} `}  >
                                        <div className="icon">
                                            <img src={wcuIcon6} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h4>Custom Shortcuts</h4>
                                            <p className="text">There are many variations of passages of Lorem Ipsum</p>
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

export default WcuSection
