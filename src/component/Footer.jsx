import React from 'react'
import { logo, logo3, logo4, shape1, shape2, shape3 } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import FadeInUp from './AnimationCom/FadeInUp';
import { termsAndConditionInfo } from './TermsAndCondition';


const Footer = () => {
    const handleTermsHover = () => {
        termsAndConditionInfo();
    }

    return (
        <footer className="footer-section position-relative ">
            <div className="footer-widgets-wrapper style1 fix">
                <div className="shape1"><img src={shape1} alt="shape" /></div>
                <div className="shape2"><img src={shape2} alt="shape" /></div>
                <div className="shape3"><img src={shape3} alt="shape" /></div>
                <div className="container">
                    <div className="row">
                        <FadeInUp
                            as='div'
                            delay={0.2}
                            className='col-xl-4 col-lg-4 col-md-6 '
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="index.html">
                                        <img src={logo4} alt="logo-img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        SponicHR – Smart, Simple & Secure HR Management.
                                    </p>
                                    <div className="store-links">
                                        <div className="apple">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 384 512" fill="white">
                                                    <path d="M318.7 268.2c-.3-38.5 17.1-67.8 53.7-89.2-20.3-29.5-50.8-46.2-92.4-50.7-38.9-4.2-81.2 22.9-95.8 22.9-15.2 0-59.4-21.9-91.8-21.3-47.3.7-87.2 27.3-110.9 70.5-47.5 82.4-12.1 204.4 34 271.4 22.7 33.3 49.9 70.7 85.5 69.4 34.2-1.3 47.1-22.4 88.6-22.4 41.2 0 52.7 22.4 88.7 21.6 36.8-.7 60.2-33.7 82.5-67.4 14.4-22.1 20.2-33.6 31.5-58.9-82.7-31.4-78.6-115.1-78.6-118.9zM244.6 84.4c27.5-33.3 24.2-63.6 23.4-74.4-22.7 1-49.2 15.4-64.9 35.1-17.3 21-26.3 46.7-24.2 73.7 24.9 1.9 50.8-12.6 65.7-34.4z" />
                                                </svg>
                                                App Store
                                            </a>
                                        </div>

                                        <div className="play">
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="17"
                                                viewBox="0 0 26 17" fill="none">
                                                <path
                                                    d="M18.8732 5.50779L20.9775 1.64735C21.0339 1.54372 21.0493 1.42066 21.0204 1.30505C20.9914 1.18943 20.9204 1.09065 20.8229 1.03026C20.7748 1.00032 20.7215 0.980802 20.6661 0.97283C20.6108 0.964858 20.5545 0.968593 20.5005 0.983821C20.4466 0.999048 20.396 1.02546 20.3517 1.06154C20.3075 1.09761 20.2704 1.14263 20.2427 1.19398L18.1122 5.10427C16.4855 4.31717 14.6547 3.87902 12.6857 3.87902C10.7167 3.87902 8.88588 4.3177 7.25923 5.10427L5.12868 1.19398C5.07191 1.09044 4.97863 1.01502 4.86936 0.984319C4.76008 0.953616 4.64377 0.970142 4.546 1.03026C4.44823 1.09038 4.37702 1.18917 4.34803 1.3049C4.31904 1.42062 4.33464 1.54381 4.39141 1.64735L6.49075 5.50779C2.86386 7.58782 0.405796 11.4776 0 16.0313H25.3684C24.9626 11.4776 22.5046 7.58782 18.8732 5.50779ZM6.85988 12.2584C6.64958 12.2584 6.444 12.1924 6.26914 12.0687C6.09429 11.9449 5.958 11.7691 5.87752 11.5633C5.79705 11.3575 5.77599 11.1311 5.81702 10.9127C5.85804 10.6942 5.95931 10.4936 6.10802 10.3361C6.25672 10.1786 6.44618 10.0714 6.65244 10.0279C6.8587 9.98449 7.07249 10.0068 7.26678 10.092C7.46108 10.1772 7.62714 10.3216 7.74398 10.5068C7.86081 10.6919 7.92317 10.9097 7.92317 11.1324C7.92304 11.431 7.81097 11.7173 7.6116 11.9285C7.41222 12.1396 7.14184 12.2583 6.85988 12.2584ZM18.5036 12.2584C18.2935 12.2575 18.0883 12.1907 17.9141 12.0664C17.7398 11.9421 17.6042 11.7659 17.5244 11.56C17.4446 11.3542 17.4242 11.1279 17.4657 10.9098C17.5073 10.6917 17.6089 10.4915 17.7578 10.3345C17.9066 10.1775 18.0961 10.0707 18.3022 10.0276C18.5084 9.98453 18.7219 10.0071 18.916 10.0925C19.11 10.1778 19.2758 10.3222 19.3924 10.5073C19.5091 10.6923 19.5713 10.9099 19.5713 11.1324C19.5713 11.2804 19.5436 11.4271 19.49 11.5638C19.4364 11.7006 19.3579 11.8248 19.2589 11.9294C19.1599 12.034 19.0424 12.1169 18.9132 12.1733C18.7839 12.2298 18.6454 12.2587 18.5056 12.2584H18.5036Z"
                                                    fill="#242331" />
                                            </svg> Play Store</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInUp>
                        <FadeInUp
                            as='div'
                            delay={0.4}
                            className='col-xl-2 col-lg-4 col-md-6 ps-lg-5 '
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>  Services </h3>
                                </div>
                                <ul className="list-area2">

                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/cms?id=2"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            HR File Preparation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/cms?id=3"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            File Manager
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/cms?id=4"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Software Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/cms?id=5"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Business Consultancy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/cms?id=6"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Web/Profile Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/recruitment-services"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Recruitment
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </FadeInUp>
                        <FadeInUp
                            as='div'
                            delay={0.6}
                            className='col-xl-2 col-lg-4 col-md-6  '
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3> Our Logs </h3>
                                </div>
                                <ul className="list-area2">

                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/hrms-v2/register"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Register
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/hrms-v2/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            HRMS Organization Login
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/hrms-v2/subadmin"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Partner Login
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://skilledworkerscloud.co.uk/hrms-v2/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Employee Login
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </FadeInUp>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <div className="contact-box">
                                    <div className="subtitle">Address</div>
                                    <div className="widget-head">Ready to get started?</div>
                                    <div className="text">
                                        G21, Unit 3 Triangle Centre, 399 Uxbridge Road, UB1 3EJ, United Kingdom
                                    </div>
                                    <div className="info">
                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                                            viewBox="0 0 22 23" fill="none">
                                            <path
                                                d="M3.66671 4.16699H18.3334C19.3417 4.16699 20.1667 4.99199 20.1667 6.00033V17.0003C20.1667 18.0087 19.3417 18.8337 18.3334 18.8337H3.66671C2.65837 18.8337 1.83337 18.0087 1.83337 17.0003V6.00033C1.83337 4.99199 2.65837 4.16699 3.66671 4.16699Z"
                                                stroke="#5236FF" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M20.1667 6L11 12.4167L1.83337 6" stroke="#5236FF" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </div>
                                        <div className="link">
                                            <a href="info@skilledworkerscloud.co.uk">info@skilledworkerscloud.co.uk</a> <br />
                                            <a href="support@skilledworkerscloud.co.uk">support@skilledworkerscloud.co.uk</a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                                                viewBox="0 0 22 23" fill="none">
                                                <g clip-path="url(#clip0_2011_91)">
                                                    <path
                                                        d="M13.7959 5.08366C14.6912 5.25834 15.514 5.69623 16.1591 6.34127C16.8041 6.9863 17.242 7.80915 17.4167 8.70449L13.7959 5.08366ZM13.7959 1.41699C15.656 1.62364 17.3906 2.45665 18.7149 3.77925C20.0392 5.10185 20.8744 6.83542 21.0834 8.69533L13.7959 1.41699ZM20.1667 16.0103V18.7603C20.1677 19.0156 20.1154 19.2683 20.0132 19.5022C19.9109 19.7361 19.7609 19.9461 19.5728 20.1187C19.3846 20.2913 19.1625 20.4227 18.9207 20.5045C18.6789 20.5863 18.4226 20.6166 18.1684 20.5937C15.3476 20.2872 12.6381 19.3233 10.2575 17.7795C8.0427 16.3721 6.16491 14.4943 4.75752 12.2795C3.20833 9.8881 2.24424 7.1654 1.94335 4.33199C1.92045 4.0785 1.95057 3.82302 2.03181 3.58181C2.11305 3.34061 2.24363 3.11896 2.41522 2.93098C2.58682 2.743 2.79567 2.59281 3.0285 2.48997C3.26132 2.38713 3.513 2.3339 3.76752 2.33366H6.51752C6.96238 2.32928 7.39366 2.48681 7.73097 2.7769C8.06827 3.06698 8.28859 3.46982 8.35085 3.91033C8.46692 4.79039 8.68218 5.65449 8.99252 6.48616C9.11585 6.81426 9.14254 7.17083 9.06943 7.51363C8.99632 7.85643 8.82648 8.17109 8.58002 8.42033L7.41585 9.58449C8.72078 11.8794 10.6209 13.7796 12.9159 15.0845L14.08 13.9203C14.3293 13.6739 14.6439 13.504 14.9867 13.4309C15.3295 13.3578 15.6861 13.3845 16.0142 13.5078C16.8459 13.8182 17.71 14.0334 18.59 14.1495C19.0353 14.2123 19.442 14.4366 19.7327 14.7797C20.0234 15.1228 20.1778 15.5608 20.1667 16.0103Z"
                                                        stroke="#5236FF" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2011_91">
                                                        <rect width="22" height="22" fill="white"
                                                            transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="link">
                                            <a href="tel:+44 0208 129 1655">+44 0208 129 1655</a>
                                            <br />
                                            <a href="tel:+44 074 6728 4718">+44 074 6728 4718</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style1">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <div className='d-flex'>
                            <p className="wow fadeInLeft" data-wow-delay=".3s">
                                Copyright © SWC All rights |
                            </p>
                            <ul className='terms'>
                                <li> <a href="/terms_condition" target='_blank' onMouseEnter={handleTermsHover}> Terms of Us |</a></li>
                                <li><a href="/privacy_policy" target='_blank'>Privacy Policy</a> | </li>
                                <li>
                                    Develop by <a target='_blank' href="https://skilledworkerscloud.co.uk/">
                                        <img src={logo3} alt="" height={30} />
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <ul className="social-links" data-wow-delay=".5s">
                            <li>
                                <a href="https://www.facebook.com/skilledworkerscloud/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/scloud244" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/skilled-workers-cloud-ltd/?viewAsMember=true" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/skilledworkerscloud/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
