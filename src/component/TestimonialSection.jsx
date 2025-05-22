import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { fireIcon, quoteIcon, starIcon1, testimonialShape1, testimonialShape2 } from '../assets';

const TestimonialSection = ({ testimonialData }) => {
    return (
        <section className="testimonial-section">
            <div className="testimonial-container-wrapper style1">
                <div className="container">
                    <div className="testimonial-wrapper style1 section-padding fix">
                        <div className="shape1"><img src={testimonialShape1} alt="shape" /></div>
                        <div className="shape2"><img src={testimonialShape2} alt="shape" /></div>
                        <div className="container">
                            <div className={`section-title text-center mxw-685 mx-auto`}>
                                <div className="subtitle">
                                    {testimonialData[0]?.title ?? 'Testimonial'}
                                    <img src={fireIcon} alt="icon" />
                                </div>
                                <h2 className="title">
                                    {testimonialData[0]?.heading1}
                                </h2>
                            </div>
                            <div className="slider-area testimonialSliderOne">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        576: { slidesPerView: 1, centeredSlides: true },
                                        768: { slidesPerView: 2 },
                                        992: { slidesPerView: 2 },
                                        1200: { slidesPerView: 3 }
                                    }}
                                    loop={true}
                                    className="gt-slider"
                                >
                                    {testimonialData?.map((testimonial) => {
                                        // Convert rating string to number and round it
                                        const rating = Math.round(parseFloat(testimonial.rating || 0));
                                        
                                        return (
                                            <SwiperSlide key={testimonial.id}>
                                                <div className="testimonial-card style1">
                                                    <div className="testimonial-header">
                                                        <div className="profile-thumb">
                                                            <img 
                                                                src={`https://skilledworkerscloud.co.uk/media/testimonials/${testimonial.image}`} 
                                                                alt="thumb" 
                                                                style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <h5>{testimonial.name}</h5>
                                                            <p className="text">{testimonial.designation}</p>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-body">
                                                        <ul className="star-wrapper style1">
                                                            {/* Render ONLY the number of stars equal to the rating */}
                                                            {[...Array(rating)].map((_, i) => (
                                                                <li key={i}>
                                                                    <img src={starIcon1} alt="icon" />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <p className="desc">{testimonial.description}</p> <br />
                                                    </div>
                                                    <div className="quote-icon"><img src={quoteIcon} alt="icon" /></div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;