import React from 'react'
import { checkMarkIcon, fireIcon, wcuIcon2_1, wcuIcon2_2, wcuThumb2_1, wcuThumb2_2, wcuThumb2_3 } from '../assets'
import { useInView } from 'react-intersection-observer';
import FadeInUp from './AnimationCom/FadeInUp';

const SponsorCompliances = ({ sponserData }) => {
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    
    // Extract module data (first item in the array)
    const moduleData = sponserData?.module?.[0] || {};
    // Extract FAQ details
    const faqDetails = sponserData?.details || [];

    return (
        <section className="wcu-section">
            <div className="wcu-container-wrapper style2">
                <div className="container">
                    <div className="wcu-wrapper style2  section-padding fix">
                        <div className="container">
                            <div className="row flex-row-reverse gy-5 gx-60 d-flex align-items-center">
                                <div className="col-xl-6">
                                    <div ref={ref1} className="wcu-thumb">
                                        <div className={`main-thumb ${inView1 ? 'img-custom-anim-right fadeInUp delay-2' : ''} `} >
                                            <img src={moduleData?.image1 } alt="thumb" />
                                        </div>
                                        <div className="thumb2 float-bob-y">
                                            <img src={moduleData?.image2 } alt="thumb" />
                                        </div>
                                        <div className="thumb3 float-bob-x">
                                            <img src={moduleData?.image3 } alt="thumb" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="wcu-content">
                                        <div className="section-title">
                                            <FadeInUp
                                                as="div"
                                                delay={0.2}
                                                className='subtitle'
                                            >
                                                {moduleData?.title }
                                                <img src={fireIcon} alt="icon" />
                                            </FadeInUp>
                                            <FadeInUp
                                                as="h2"
                                                delay={0.4}
                                                className='title'
                                            >
                                                {moduleData?.heading1 }
                                            </FadeInUp>
                                            <FadeInUp
                                                as="p"
                                                delay={0.6}
                                                className='text1'
                                            >
                                                {moduleData?.heading2 }
                                            </FadeInUp>
                                        </div>

                                        {/* Render FAQ details dynamically */}
                                        {faqDetails.map((detail, index) => (
                                            <FadeInUp
                                                key={detail.id}
                                                as="div"
                                                delay={0.2 + (index * 0.2)}
                                                className='fancy-box style3 mb-20'
                                            >
                                                <div className="icon">
                                                    <img src={checkMarkIcon} alt="icon" />
                                                </div>
                                                <div className="content">
                                                    <h4>{detail.question}</h4>
                                                    <p className="text">
                                                        {detail.answer}
                                                    </p>
                                                </div>
                                            </FadeInUp>
                                        ))}

                                        {/* Fallback if no FAQ details are available */}
                                        {faqDetails.length === 0 && (
                                            <>
                                                <FadeInUp
                                                    as="div"
                                                    delay={0.2}
                                                    className='fancy-box style3 mb-20'
                                                >
                                                    <div className="icon">
                                                        <img src={checkMarkIcon} alt="icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Easy Collaboration</h4>
                                                        <p className="text">
                                                            Default collaboration description text.
                                                        </p>
                                                    </div>
                                                </FadeInUp>
                                                <FadeInUp
                                                    as="div"
                                                    delay={0.4}
                                                    className='fancy-box style3 mb-20'
                                                >
                                                    <div className="icon">
                                                        <img src={checkMarkIcon} alt="icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Innovative Solutions</h4>
                                                        <p className="text">Default innovative solutions text.</p>
                                                    </div>
                                                </FadeInUp>
                                            </>
                                        )}
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