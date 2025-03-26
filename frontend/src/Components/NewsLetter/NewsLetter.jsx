import React from 'react';
import './NewsLetter.css';

export const NewsLetter = () => {
  return (
    <div className='newsletter d-flex flex-column justify-content-center align-items-center'>
        <h1>Get Exclusive Offers On YOur Email</h1>
        <p>Subscribe to your newsletter and stay updated</p>
        <div className='d-flex justify-content-center align-items-center'>
            <input type="email" placeholder="Your Email Id"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
