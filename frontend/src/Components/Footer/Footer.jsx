import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/footer_logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pinterest_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer d-flex flex-column justify-content-center align-items-center'>
        <div className="footer-logo d-flex align-items-center">
            <img src={footer_logo} alt=""/>
            <p>SHOPER</p>
        </div>
        <ul className="footer-links d-flex">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons d-flex">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" className='footer-icon'/>
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" className='footer-icon'/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" className='footer-icon'/>
            </div>
        </div>
        <div className="footer-copyright d-flex flex-column align-items-center">
            <hr/>
            <p>Copy @ 2025 - All Rights Reserved</p>
        </div>
    </div>
  )
}
export default Footer;
