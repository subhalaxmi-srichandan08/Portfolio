import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/header.css';
import hamberger from '../assets/images/hamburger.png';
import cancelIcon from '../assets/images/cancel.png';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const headerContent = ["HOME", "ABOUT", "SKILL", "PROJECT", "CONTACT"]
  return (
    <div className='portfolio--header--body'>
      <h1 className='portfolio--header--tag'>Portfolio</h1>
      {!isMobile && (
        <nav>
          <div className='portfolio--header--items'>
            {headerContent.map((item, index) => (
              <li key={index}>
                <a style={{ cursor: "pointer" }} onClick={() => handleSmoothScroll(item.toLowerCase().replace(' ', '-'))}>
                  {item}
                </a>
              </li>
            ))}
          </div>
        </nav>
      )}

      {isMobile && (
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? cancelIcon : hamberger}
            alt="Menu Toggle Icon"
            style={{ width: '27px', height: '24px', cursor: 'pointer' }}
          />
        </div>
      )}

      {isMobile && menuOpen && (
        <div className="mobile-menu">
          <ul>
            {headerContent.map((item, index) => (
              <li key={index}>
               <a style={{ cursor: "pointer" }} onClick={() => handleSmoothScroll(item.toLowerCase().replace(' ', '-'))}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header;
