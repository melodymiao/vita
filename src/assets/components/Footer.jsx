import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {

  return (
    <>

      <section className='footer-section'>
        <img src='footerimage1.png' alt="Footer" className="footer-image1" />

        <div className='footerinfo'>

          <div className="social-icons">
            <img src='instagram_icon.png' alt="Footer" className="footer-image2" />
            <img src='gmail_icon.png' alt="Footer" className="footer-image2" />
            <img src='facebook_icon.png' alt="Footer" className="footer-image2" />
            <img src='linked_icon.png' alt="Footer" className="footer-image2" />
          </div>

          <div className="footer-text">
            <h3>We are a student group acting independently of the University of California.</h3>
            <h3>We take full responsibility for our organization and this web site.</h3>
          </div>


        </div>

        <div className='ocf'>
          <img src='ocf.png' alt="Footer" className="oc-image1" />
        </div>

      </section>

    </>
  );
}


export default Footer; 