import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ buttonText, linkTo }) => {
  return (
    
    <Link className='button-link' to={linkTo}>
        <button className='button'>{buttonText}</button>
    </Link>
  );
}

export default Button;