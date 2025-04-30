import React from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const CounterSection = () => {
    const [ref5, inView5] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div className="counter-section fix">
    <div className="counter-container-wrapper style1">
      <div className="container">
        <div className="counter-wrapper style1 section-padding"
          data-bg-src="assets/images/shape/counterShape1_1.png">
          <div className="shape"></div>
          <div ref={ref5} className="container">
            <div className="row gy-5">
              <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                <div className={`counter-box style1 ${inView5 ? 'fadeInUp delay-2' : ''}`}>
                  <div className="counter">
                  {inView5 && <CountUp start={0} end={56} duration={10} easing={false}  className="counter-number" />}<span className="plus">+</span>
                  </div>
                  <p className="text">Customers visit app every months</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                <div className={`counter-box style1 ${inView5 ? 'fadeInUp delay-3' : ''}`} >
                  <div className="counter">
                    {inView5 && <CountUp start={0} end={32} duration={10} easing={false} className="counter-number" />} <span className="plus">+</span>
                  </div>
                  <p className="text">Total downloaded of our app</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                <div className={`counter-box style1 ${inView5 ? 'fadeInUp delay-4' : ''}`}>
                  <div className="counter">
                  {inView5 && <CountUp start={0} end={156} duration={10} easing={false} className="counter-number" />}<span className="plus">k</span>
                  </div>
                  <p className="text">Total Members of App Users</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                <div className={`counter-box style1 ${inView5 ? 'fadeInUp delay-3' : ''}`} >
                  <div className="counter">
                  {inView5 && <CountUp start={0} end={42} duration={10} easing={false} className="counter-number" />}<span className="plus">+</span>
                  </div>
                  <p className="text">Satisfaction rate from our customers.</p>
                </div>
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
