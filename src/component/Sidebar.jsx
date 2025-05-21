import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightLong, faClock, faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { logo2, logo3 } from '../assets';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ isSideBarOpen, setIsSidebarOpen , showPopupModel}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollLinkClick = (sectionId) => {
        setIsSidebarOpen(false); // Close sidebar on click
        if (location.pathname === '/') {
            const el = document.getElementById(sectionId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            navigate('/', { state: { scrollToId: sectionId } });
        }
    };




    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isSideBarOpen ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link onClick={() => navigate('/')} smooth={true}>
                                        <img src={logo3} alt="logo-img" height={70} />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={() => setIsSidebarOpen(false)}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                            </div>

                            <div className="mobile-menu fix mb-3">
                                <div className="mean-bar">
                                    <nav className="mean-nav">
                                        <ul>
                                            <li><a onClick={() => handleScrollLinkClick('home')}>Home</a></li>
                                            <li><a onClick={() => handleScrollLinkClick('about')}>About Us</a></li>
                                            <li><a onClick={() => handleScrollLinkClick('features')}>Features</a></li>
                                            <li><a onClick={() => handleScrollLinkClick('pricing')}>Pricing</a></li>
                                            <li><a onClick={() => handleScrollLinkClick('blog')}>Blog</a></li>
                                            <li><a onClick={() => handleScrollLinkClick('our-app')}>Our App</a></li>
                                            <li><a onClick={() => handleScrollLinkClick('contact')}>Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">G21, Unit 3 Triangle Centre, 399 Uxbridge Road, UB1 3EJ, United Kingdom</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:info@skilledworkerscloud.co.uk"><span
                                                className="">info@skilledworkerscloud.co.uk</span></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <FontAwesomeIcon icon={faClock} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="tel:+44 074 6728 4718">+44 074 6728 4718</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <a href="#" className="theme-btn text-center" onClick={showPopupModel}>
                                        <span>Get Started
                                            <FontAwesomeIcon className='ml-3' icon={faArrowRightLong} />
                                        </span>
                                    </a>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>
        </>
    )
}

export default Sidebar
