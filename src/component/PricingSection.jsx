import React from 'react'
import { fireIcon } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const PricingSection = ({ pricingData, addGap }) => {



    const monthlyPlans = pricingData?.[0] || [];
    const yearlyPlans = pricingData?.[1] || [];

  

    return (
        <section class={`pricing-section ${addGap ? "section-padding-3 pb-4" : "section-padding"}  fix`} id='pricing'>
            <div class="container">
                <div class="section-title text-center mxw-685 mx-auto">
                    {!addGap &&
                        <div class="subtitle">
                            {pricingData?.title ?? "Pricing"}
                            <img src={fireIcon} alt="icon" />
                        </div>
                    }

                    <h2 class="title">
                        Choose Your Plan
                    </h2>
                    <p class="text">
                        Select the plan that works best for your needs

                    </p>
                </div>
                <div class="pricing-wrapper style1">
                    <div class="tab-section d-flex justify-content-center align-items-center">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly"
                                    aria-selected="true"> {monthlyPlans?.name} </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-yearly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly"
                                    aria-selected="false" tabindex="-1"> {yearlyPlans?.name} </button>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        {/* Monthly Plans */}
                        <div class="tab-pane fade active show" id="pills-monthly" role="tabpanel"
                            aria-labelledby="pills-monthly-tab">
                            <div class="row gy-5" style={{ justifyContent: 'space-around' }}>

                                {monthlyPlans.plans.map((plan) => (
                                    <div key={plan.id} className="col-xl-4 col-md-6">
                                        <div className="pricing-card style1">
                                            <div className="pricing-card-header">
                                                <h6>{plan?.name}</h6>
                                                <div className="price-wrapper">
                                                    <span className="price">£{plan?.sales_price}</span>
                                                    <span className="text"> /{plan.type}</span>
                                                </div>
                                                <p className="text">{plan?.description}</p>
                                            </div>
                                            <div className="pricing-card-body">
                                                <ul className="checklist">
                                                    {plan.features.map((feature, index) => (
                                                        <li key={index}>
                                                            <FontAwesomeIcon
                                                                icon={faCircleCheck}
                                                                className={feature.icon_class === '1' ? "green" : "gray"}
                                                            />
                                                            {feature.name}
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                            <a
                                                className={`theme-btn ${plan.id === '2' ? 'style4' : 'style5'}`}
                                                href={plan.button_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {plan.button_name}
                                            </a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        {/* Yearly Plans */}
                        <div class="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                            <div class="row gy-5" style={{ justifyContent: 'space-around' }}>


                                {yearlyPlans.plans.map((plan) => (
                                    <div key={plan.id} className="col-xl-4 col-md-6">
                                        <div className="pricing-card style1">
                                            <div className="pricing-card-header">
                                                <h6>{plan.name}</h6>
                                                <div className="price-wrapper">
                                                    <span className="price">£{plan.sales_price}</span>
                                                    <span className="text"> / {plan.type}</span>
                                                </div>
                                                <p className="text">{plan.description}</p>
                                            </div>
                                            <div className="pricing-card-body">
                                                <ul className="checklist">
                                                    {plan.features.map((feature, index) => (
                                                        <li key={index}>
                                                            <FontAwesomeIcon
                                                                icon={faCircleCheck}
                                                                className={feature.icon_class === '1' ? "green" : "gray"}
                                                            />
                                                            {feature.name}
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                            <a
                                                className={`theme-btn ${plan.id === '5' ? 'style4' : 'style5'}`}
                                                href={plan.button_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {plan.button_name}
                                            </a>
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
