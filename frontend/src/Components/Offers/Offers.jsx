import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

export const Offers = () => {
  return (
    <div className='offers d-flex'>
        <div className="offers-left d-flex flex-column justify-content-center">
            <h1>Exclusive</h1>
            <h2>Offers For You</h2>
            <p>Only On Best Sellar Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right d-flex align-items-center justify-content-end">
            <img src={exclusive_image} alt=" "/>

        </div>
    </div>
  )
}
