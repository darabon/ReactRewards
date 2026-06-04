import React, { useState, useEffect } from "react";

import './Header.css'

function Header() {


    // dont work
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (window.scrollY < 100) {
                setIsVisible(true);
            } else if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    }, [lastScrollY]);

  return (
  <header className={`Header 
  ${isVisible ? 'header--visible' : 'header--hidden'}
  ${isScrolled ? 'header--scrolled' : 'header--transparent'}`}>
    <h1 className='Logoone'>Rewards & Review</h1>
    <ul className='List'>
        <li className='ElementSp'>Rewards</li>
        <li>Join Us</li>
        <li>LeaderBoard</li>
        <li>Rules</li>
        <a href="http://">Login</a>
    </ul>
  </header>
  )
}

export default Header
