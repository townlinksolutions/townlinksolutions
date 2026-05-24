import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, switchLanguage } = useLanguage();

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Mobile Menu Close on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar">
                    <div className="logo" onClick={() => window.scrollTo(0,0)}>
                        <span className="logo-icon" aria-hidden="true">
                        <img src="images/company_logo/logo.jpeg" alt="Finmox Logo" width="38" height="38" style={{ objectFit: 'contain' }} />
                        </span>
                        <div className="logo-brand">
                            <span className="logo-name">{language === 'en' ? 'Finmox' : 'ಫಿನ್ಮಾಕ್ಸ್'}</span>
                            <span className="logo-tagline">
                                {language === 'en' ? 'Your Health, Wealth, Life, and Investments Covered' : 'ನಿಮ್ಮ ಆರೋಗ್ಯ, ಸಂಪತ್ತು, ಜೀವನ ಮತ್ತು ಹೂಡಿಕೆಗಳು ಆವರಿಸಿದೆ'}
                            </span>
                        </div>
                    </div>

                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#about" onClick={closeMenu}>{language === 'en' ? 'About' : 'ನಮ್ಮ ಬಗ್ಗೆ'}</a></li>
                        <li><a href="#services" onClick={closeMenu}>{language === 'en' ? 'Services' : 'ಸೇವೆಗಳು'}</a></li>
                        <li><a href="#contact" onClick={closeMenu}>{language === 'en' ? 'Contact' : 'ಸಂಪರ್ಕಿಸಿ'}</a></li>
                    </ul>

                    <div className="language-toggle">
                        <button 
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => switchLanguage('en')}
                        >EN</button>
                        <span className="lang-separator">|</span>
                        <button 
                            className={`lang-btn ${language === 'kn' ? 'active' : ''}`}
                            onClick={() => switchLanguage('kn')}
                        >ಕನ್ನಡ</button>
                    </div>

                    <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        <span style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translate(10px, 10px)' : '' }} />
                        <span style={{ opacity: isMobileMenuOpen ? '0' : '1' }} />
                        <span style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : '' }} />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;