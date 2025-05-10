import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faClock, faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { logo2 } from '../assets';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isSideBarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();


 


    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isSideBarOpen ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link onClick={()=> navigate('/')} smooth={true}>
                                        <img src={logo2} alt="logo-img" />
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
                                            <li>
                                                <Link to="home">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link  to="features" smooth={true} duration={500}>
                                                    Features
                                                </Link>
                                            </li>
                                            <li>
                                                <Link  to="pricing" smooth={true} duration={500}>
                                                    Pricing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link  to="blog" smooth={true} duration={500}>
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link  to="our-app" smooth={true} duration={500}>
                                                    Our App
                                                </Link>
                                            </li>
                                            <li>
                                                <Link  to="contact" smooth={true} duration={500}>
                                                    Contact Us
                                                </Link>
                                            </li>
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
                                            <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:info@example.com"><span
                                                className="mailto:info@example.com">info@example.com</span></a>
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
                                            <a href="tel:+11002345909">+11002345909</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <a href="contact.html" className="theme-btn text-center">
                                        <span>Get A Quote<i className="fa-solid fa-arrow-right-long"></i></span>
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
