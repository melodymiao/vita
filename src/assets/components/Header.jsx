import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ currentPage }) => {

  return (
    <>
      <section className='header-section'>
        <img src='logo-campanile-i.png' className='logo' />
        <div className='nav-buttons'>
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
      </section>
    </>
  );
}

export default Header;

{/* SAMPLE BEFORE:

<section className='header-section'>
  <h1>Filler Header</h1>
  <div className='header-links'>
    <Link to="/" className={`${currentPage === "home" ? "bold" : ""}`}>Home</Link>
    <Link to="/sample" className={`${currentPage === "sample" ? "bold" : ""}`}>Sample Page</Link>
    <Link to="/free-tax-filing" className={`${currentPage === "free-tax-filing" ? "bold" : ""}`}>Free Tax Filing</Link>
    <Link to="/decal" className={`${currentPage === "decal" ? "bold" : ""}`}>Decal</Link>
    <Link to="/donate" className={`${currentPage === "donate" ? "bold" : ""}`}>Donate</Link>
  </div>
</section>

*/}