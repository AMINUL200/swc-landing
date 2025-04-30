import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
      useEffect(() => {
        const handleScroll = () => {
          const back_top = document.getElementById('back-top');
          
          if (back_top) {  // Proper null check
            if (window.scrollY > 150) {
              back_top.classList.add('show');
            } else {
              back_top.classList.remove('show');
            }
          }
        }
        
        window.addEventListener('scroll', handleScroll);
        // Cleanup:
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <button
            id="back-top"
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    )
}

export default BackToTop
