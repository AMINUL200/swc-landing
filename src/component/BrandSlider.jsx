import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5 } from '../assets';
import { useInView } from 'react-intersection-observer';
import FadeInUp from './AnimationCom/FadeInUp';

const logos = [brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo3];

const BrandSlider = ({ brandData }) => {
  const [ref1, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // console.log(brandData[0].title);
  // const logos2 = brandData.map(item => item.image1);
  const logos2 = [...brandData.map(item => item.image1)];
  // console.log(logos2);

  



  return (
    <div className="brand-slider-section section-padding fix">
      <div className="brand-slider-container-wrapper style1">
        <div className="container">
          <div className="brand-slider-wrapper style1">
            <FadeInUp
              as="h2"
              delay={0.2}
              margin="-50px"
              className="single-section-title"
            >
              {brandData[0]?.title ?? 'Millions of clients trust us.'}
            </FadeInUp>
            
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
                  {logos2.map((logo, index) => (
                    <SwiperSlide key={index}>
                      <div className="brand-logo">
                        <img src={logo} alt={`logo-${index}`} width={200} height={100}/>
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
