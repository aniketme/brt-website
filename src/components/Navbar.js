// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS for styling
import logo from '../assets/brtlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll', !isOpen); // Prevent scrolling when menu is open
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Change navbar background on scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
        </a>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="navbar-toggle-icon">☰</span> {/* Hamburger menu icon */}
        </button>
        {/* Sliding menu container */}
        <div className={`navbar-slide-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-menu">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
