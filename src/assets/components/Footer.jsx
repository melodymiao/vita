import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerlogo from '../photos/footer logo.png'
import IG from '../photos/instagram_icon.png'
import email from '../photos/email_icon.png'
import FB from '../photos/facebook_icon.png'
import linkedin from '../photos/linkedin_icon.png'
import ocflogo from '../photos/ocf-hosted-penguin-dark.svg';


const Footer = () => {
  
  return (
    <>

      <section className='footer-section'>

        <div className='footer-flex'>
          <Link to='/'>
            <img src={footerlogo} alt="Footer" className="footer-logo" />
          </Link>

          <div className='footerinfo'>
          <div className="social-icons">
            <Link to='https://www.instagram.com/berkeleyvita/' target="_blank">
              <img src={IG} alt="Footer" className="social-icon" />
            </Link>
            <Link to='mailto:ucberkeleyvita@gmail.com' target="_blank">
              <img src={email} alt="Footer" className="email-icon" />
            </Link>
            <Link to='https://www.facebook.com/berkeleyvita/' target="_blank">
              <img src={FB} alt="Footer" className="social-icon" />
            </Link>
            <Link to='https://www.linkedin.com/company/uc-berkeley-vita/' target="_blank">
              <img src={linkedin} alt="Footer" className="social-icon" />
            </Link>
          </div>
          <div className="footer-text">
            <h3>We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.</h3>
          </div>
        </div>
          
          <Link to='https://www.ocf.berkeley.edu' target="_blank">
            <img className='ocf' src={ocflogo} alt="Hosted by the OCF" />
          </Link>
        </div>
        




      </section>

    </>
  );
}


export default Footer; 