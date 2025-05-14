import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightLong, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { logo, logo3 } from '../assets';
import { useNavigate } from 'react-router-dom';

const Header = ({ setIsSidebarOpen, showPopupModel }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header-sticky');
      if (window.scrollY > 200) {
        header?.classList.add('sticky');
      } else {
        header?.classList.remove('sticky');
      }
    };
    console.log(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className="header-section-1 ">
      <div id="header-sticky" className="header">
        <div className="container ">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link  onClick={()=> navigate('/')} smooth={true} duration={500}>
                    <img src={logo3} alt="logo-img" height={70} />
                  </Link>
                </div>
              </div>

              <div className="header-right d-flex justify-content-end align-items-center gap-6">
                <div className="mean__menu-wrapper  ">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link className='a-tag' to="/"  smooth={true} duration={200}>Home</Link>
                        </li>
                        <li>
                          <Link className='a-tag' to="/about"  smooth={true} duration={200}>About</Link>
                        </li>
                        
                        <li>
                          <Link className='a-tag' to="/services"  smooth={true} duration={200}>
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link className='a-tag' to="#"  smooth={true} duration={200}>
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link className='a-tag' to="#"  smooth={true} duration={200}>
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link className='a-tag' to="#"  smooth={true} duration={200}>
                            Our App
                          </Link>
                        </li>
                        <li>
                          <Link className='a-tag' to="#"  smooth={true} duration={200}>
                            Contact Us
                          </Link>
                        </li>
                        
                        
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* <a href="#0" className="search-trigger search-icon"><FontAwesomeIcon icon={faSearch} /></a> */}

                <div className="header-button ms-4">
                  <a  className="theme-btn" onClick={showPopupModel}>
                    <span>
                      Get Started
                      <FontAwesomeIcon className='ml-3' icon={faArrowRightLong} />
                    </span>
                  </a>
                </div>
                <div className="header__hamburger d-block d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <FontAwesomeIcon onClick={() => setIsSidebarOpen(true)} className='text-2xl' icon={faBars} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

const header = () => {
  return (
    <nav>
      <Link to="home" smooth={true} duration={500}>Home</Link>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </nav>
  )
}