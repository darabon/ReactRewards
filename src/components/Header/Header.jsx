import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Скрываем шапку при скролле вниз только если меню закрыто
            if (window.scrollY < 100) {
                setIsVisible(true);
            } else if (window.scrollY > lastScrollY && !isMenuOpen) {
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
    }, [lastScrollY, isMenuOpen]);

    // Закрываем меню при смене маршрута
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Блокируем скролл body при открытом меню
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`Header 
        ${isVisible ? 'header--visible' : 'header--hidden'}
        ${isScrolled ? 'header--scrolled' : 'header--transparent'}`}>
            
            <Link to="/" className='Logoone' style={{ textDecoration: 'none', color: 'inherit' }}>
                Rewards & Review
            </Link>

            <ul className={`List ${isMenuOpen ? 'open' : ''}`}>
                <li className='ElementSp' onClick={closeMenu}>Rewards</li>
                <li onClick={closeMenu}>Join Us</li>
                <li onClick={closeMenu}>LeaderBoard</li>
                <li onClick={closeMenu}>Rules</li>
                <Link to="/login" className='login-link' onClick={closeMenu}>Login</Link>
            </ul>

            <div 
                className={`burger ${isMenuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header