import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import headerlogo from '../photos/header logo.png'

const Header = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='header-section'>
        <Link to="/" id="home">
          <img src={headerlogo} className='logo' alt="VITA"/>
        </Link>
        
        <button className='menu-toggle' onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-button ${currentPage === "home" ? "active" : ""}`} id="home">
            <div className='nav-text'>Home</div>
            <div className="underline"></div>
          </Link>
          <Link to="/free-tax-filing" className={`nav-button ${currentPage === "free-tax-filing" ? "active" : ""}`} id="free-tax-filing">
            <div className='nav-text'>Free Tax Filing</div>
            <div className="underline"></div>
          </Link>
          <Link to="/decal" className={`nav-button ${currentPage === "decal" ? "active" : ""}`} id="donate">
            <div className='nav-text'>Decal</div>
            <div className="underline"></div>
          </Link>

          <Link to="/donate" id={`${currentPage === "donate" ? "donate-button" : "donate-button2"}`}>Donate</Link>
        </div>
      </header>
    </>
  );
}

export default Header;