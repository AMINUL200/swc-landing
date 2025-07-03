import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { logo4 } from '../assets';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ setIsSidebarOpen, showPopupModel }) => {
  const navigate = useNavigate();

  const handleScrollLinkClick = (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        const headerHeight = document.getElementById('header-sticky')?.offsetHeight || 0;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      navigate('/', { state: { scrollToId: sectionId } });
    }
  };

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
                  <Link to='home' smooth={true} duration={500}>
                    <img src={logo4} alt="logo-img" height={70} />
                  </Link>
                </div>
              </div>

              <div className="header-right d-flex justify-content-end align-items-center gap-6">
                <div className="mean__menu-wrapper  ">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li><a className="a-tag" onClick={() => handleScrollLinkClick('home')}>Home</a></li>
                        <li><a className="a-tag" onClick={() => handleScrollLinkClick('about')}>About</a></li>
                        <li><a className="a-tag" onClick={() => handleScrollLinkClick('features')}>Features</a></li>
                        <li><a className="a-tag" onClick={() => handleScrollLinkClick('pricing')}>Pricing</a></li>
                        <li><a className="a-tag" onClick={() => handleScrollLinkClick('blog')}>Blog</a></li>
                        <li><a className="a-tag" onClick={() => handleScrollLinkClick('our-app')}>Our App</a></li>
                        <li><a className="a-tag" onClick={() => handleScrollLinkClick('contact')}>Contact Us</a></li>


                      </ul>
                    </nav>
                  </div>
                </div>

                {/* <a href="#0" className="search-trigger search-icon"><FontAwesomeIcon icon={faSearch} /></a> */}

                <div className="header-button ms-4">
                  <a className="theme-btn" onClick={showPopupModel}>
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

