import React from 'react'
import { fireIcon, wpThumb2_1 } from '../assets'

const WorkProcessing = () => {
    return (
        <section class="wp-section section-padding fix">
            <div class="container">
                <div class="wp-wrapper style2">
                    <div class="shape"> <img src="assets/images/shape/wpShape2_1.png" alt="shape" />
                    </div>
                    <div class="row gy-5 gy-md-0 gx-60 d-flex align-items-center">
                        <div class="col-xl-4 order-2 order-xl-1">
                            <div class="wp-content style2">
                                <div class="section-title">
                                    <div class="subtitle wow fadeInUp" data-wow-delay=".2s">
                                        How It Works <img src={fireIcon} alt="icon" />
                                    </div>
                                    <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                                        Work smarter with easy access for user..
                                        </h2>
                                </div>
                                <div class="wp-accordion">
                                    <div class="accordion" id="accordion">
                                        <div class="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                    01.Create account
                                                </button>
                                            </h5>
                                            <div id="faq1" class="accordion-collapse show" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    There are many variations of passages of Lorem Ipsum available, but the
                                                    majority have suffered alteration in some form,
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"
                                                    aria-controls="faq2">
                                                    02. Install tracking
                                                </button>
                                            </h5>
                                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    There are many variations of passages of Lorem Ipsum available, but the
                                                    majority have suffered alteration in some form,
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                                    aria-controls="faq3">
                                                    03. Track analytics
                                                </button>
                                            </h5>
                                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    There are many variations of passages of Lorem Ipsum available, but the
                                                    majority have suffered alteration in some form,
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="true"
                                                    aria-controls="faq4">
                                                    04. Integrate
                                                </button>
                                            </h5>
                                            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div class="accordion-body">
                                                    There are many variations of passages of Lorem Ipsum available, but the
                                                    majority have suffered alteration in some form,
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 order-1 order-xl-2">
                            <div class="wp-thumb wow fadeInUp" data-wow-delay=".4s">
                                <div class="main-thumb img-custom-anim-right wow">
                                    <img src={wpThumb2_1} alt="thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcessing
