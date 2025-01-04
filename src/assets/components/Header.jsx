import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import './Header.css';
import headerlogo from '../photos/header logo.png'

const Header = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
      <header className='header-section'>
        <Link to="/" id="home" onClick={scrollToTop}>
          <img src={headerlogo} className='logo' alt="VITA"/>
        </Link>
        
        <button className='menu-toggle' onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-button ${currentPage === "home" ? "active" : ""}`} id="home" onClick={scrollToTop}>
            <div className='nav-text'>Home</div>
            <div className="underline"></div>
          </Link>
          <Link to="/free-tax-filing" className={`nav-button ${currentPage === "free-tax-filing" ? "active" : ""}`} id="free-tax-filing" onClick={scrollToTop}>
            <div className='nav-text'>Free Tax Filing</div>
            <div className="underline"></div>
          </Link>
          <Link to="/decal" className={`nav-button ${currentPage === "decal" ? "active" : ""}`} id="donate" onClick={scrollToTop}>
            <div className='nav-text'>Decal</div>
            <div className="underline"></div>
          </Link>

          <Link to="/donate" id={`${currentPage === "donate" ? "donate-button" : "donate-button2"}`} onClick={scrollToTop}>Donate</Link>
        </div>
      </header>
    </>
  );
}

export default Header;