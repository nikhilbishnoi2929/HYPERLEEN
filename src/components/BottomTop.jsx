import React, { useState, useEffect } from 'react';
import arrowTop from '../assets/images/png/arrowTop.png'
const BottomTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='z-50'
        >
          <img className='size-16 z-50 relative hover:animate-bounce' src={arrowTop} />
        </button>
      )}
    </div>
  );
};

export default BottomTop;
