import React from 'react'
import { fireIcon } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const PricingSection = ({ pricingData, addGap }) => {

    const monthlyPlans = pricingData?.monthly_plans || [];
    const yearlyPlans = pricingData?.yearly_plans || [];


    console.log("Pricing Data:", monthlyPlans);


    return (
        <section class={`pricing-section ${addGap ? "section-padding-3 pb-4" : "section-padding"}  fix`} id='pricing'>
            <div class="container">
                <div class="section-title text-center mxw-685 mx-auto">
                    {!addGap &&
                        <div class="subtitle">
                            {pricingData?.title}
                            <img src={fireIcon} alt="icon" />
                        </div>
                    }

                    <h2 class="title">
                        {pricingData?.heading1 }
                    </h2>
                    <p class="text">
                        {pricingData?.heading2 }

                    </p>
                </div>
                <div class="pricing-wrapper style1">
                    <div class="tab-section d-flex justify-content-center align-items-center">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly"
                                    aria-selected="true"> {pricingData?.button_name1 ?? 'Monthly'} </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-yearly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly"
                                    aria-selected="false" tabindex="-1"> {pricingData?.button_name2 ?? 'Yearly'} </button>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        {/* Monthly Plans */}
                        <div class="tab-pane fade active show" id="pills-monthly" role="tabpanel"
                            aria-labelledby="pills-monthly-tab">
                            <div class="row gy-5" style={{ justifyContent: 'space-around' }}>

                                {monthlyPlans.map((plan) => (
                                    <div key={plan.id} className="col-xl-4 col-md-6">
                                        <div className="pricing-card style1">
                                            <div className="pricing-card-header">
                                                <h6>{plan.heading1}</h6>
                                                <div className="price-wrapper">
                                                    <span className="price">£{plan.amount}</span>
                                                    <span className="text"> / Per Month</span>
                                                </div>
                                                <p className="text">{plan.description}</p>
                                            </div>
                                            <div className="pricing-card-body">
                                                <ul className="checklist">
                                                    {plan.features.map(([text, included], index) => (
                                                        <li key={index}>
                                                            <FontAwesomeIcon
                                                                icon={faCircleCheck}
                                                                className={included ? "green" : "gray"}
                                                            />
                                                            {text}
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                            <a class={`theme-btn ${plan.id === '2' ? 'style4' : 'style5'}`} href="pricing.html"> {plan.button_name} </a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        {/* Yearly Plans */}
                        <div class="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                            <div class="row gy-5" style={{ justifyContent: 'space-around' }}>


                                {yearlyPlans.map((plan) => (
                                    <div key={plan.id} className="col-xl-4 col-md-6">
                                        <div className="pricing-card style1">
                                            <div className="pricing-card-header">
                                                <h6>{plan.heading1}</h6>
                                                <div className="price-wrapper">
                                                    <span className="price">${plan.amount}</span>
                                                    <span className="text"> / Per Month</span>
                                                </div>
                                                <p className="text">{plan.description}</p>
                                            </div>
                                            <div className="pricing-card-body">
                                                <ul className="checklist">
                                                    {plan.features.map(([text, included], index) => (
                                                        <li key={index}>
                                                            <FontAwesomeIcon
                                                                icon={faCircleCheck}
                                                                className={included ? "green" : "gray"}
                                                            />
                                                            {text}
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                            <a class={`theme-btn ${plan.id === '2' ? 'style4' : 'style5'}`} href="pricing.html"> {plan.button_name} </a>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
