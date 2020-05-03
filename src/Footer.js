import React from 'react';
import './Footer.css';

const Footer =(props)=>{
    return(
        <footer className='footer'>
            <h3>{props.text}</h3>
        </footer>
    )
}

export default Footer;