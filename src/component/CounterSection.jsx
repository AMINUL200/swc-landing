import React from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';


const CounterSection = ({countData}) => {
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
                  {inView5 && <CountUp start={0} end={countData?.number1} duration={10} easing={false}  className="counter-number" />}<span className="plus">+</span>
                  </div>
                  <p className="text"> {countData?.paragraph1} </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                <div className={`counter-box style1 ${inView5 ? 'fadeInUp delay-3' : ''}`} >
                  <div className="counter">
                    {inView5 && <CountUp start={0} end={countData?.number2} duration={10} easing={false} className="counter-number" />} <span className="plus">+</span>
                  </div>
                  <p className="text"> {countData?.paragraph2} </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                <div className={`counter-box style1 ${inView5 ? 'fadeInUp delay-4' : ''}`}>
                  <div className="counter">
                  {inView5 && <CountUp start={0} end={countData?.number3} duration={10} easing={false} className="counter-number" />}<span className="plus">k</span>
                  </div>
                  <p className="text"> {countData?.paragraph3} </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                <div className={`counter-box style1 ${inView5 ? 'fadeInUp delay-3' : ''}`} >
                  <div className="counter">
                  {inView5 && <CountUp start={0} end={countData?.number4} duration={10} easing={false} className="counter-number" />}<span className="plus">k</span>
                  </div>
                  <p className="text">{countData?.paragraph4}</p>
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
