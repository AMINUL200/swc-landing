import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5 } from '../assets';
import { useInView } from 'react-intersection-observer';

const logos = [brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo3];

const BrandSlider = () => {
    const [ref1, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
      });
      
  return (
    <div className="brand-slider-section section-padding fix">
      <div className="brand-slider-container-wrapper style1">
        <div className="container">
          <div className="brand-slider-wrapper style1">
            <h2 ref={ref1} className={`single-section-title ${inView ? 'fadeInUp delay-1' : ''} `} data-wow-delay=".2s">
              Millions of clients trust us.
            </h2>
            <div className="row">
              <div className="slider-area brandSliderOne">
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  speed={800}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2, centeredSlides: true },
                    768: { slidesPerView: 3 },
                    1025: { slidesPerView: 4 },
                    1400: { slidesPerView: 5 },
                  }}
                  className="gt-slider"
                >
                  {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                      <div className="brand-logo">
                        <img src={logo} alt="logo" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
