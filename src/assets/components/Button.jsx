import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ buttonText, linkTo, target }) => {
  return (
    
    <Link className='button-link' to={linkTo} target={target}>
        <button className='button'>{buttonText}</button>
    </Link>
  );
}

export default Button;