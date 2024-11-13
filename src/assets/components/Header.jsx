import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ currentPage }) => {

  return (
    <>
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
    </>
  );
}

export default Header;
