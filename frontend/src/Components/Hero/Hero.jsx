import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow_icon.png';
import hero_image from '../Assets/hero_image.png';

export default function Hero() {
  return (
    <div className="hero d-flex vh-100">
        <div className="hero-left d-flex flex-column justify-content-center">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon d-flex align-items-center">
                    <p>new</p>
                    <img src={hand_icon} alt='' className='hand-icon'/>
                </div>
                <p>Collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn d-flex justify-content-center align-items-center">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='' className='arrow-icon'/>
            </div>
        </div>
        <div className="hero-right align-items-center justify-content-center">
            <img src={hero_image} alt='' className='hero-image'/>
        </div>
    </div>
  )
}
