import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator d-flex">
            <div className="descriptionbox-nav-box d-flex align-items-center justify-content-center">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description d-flex flex-column">
            <p>Upgrade your style with our premium Classic Denim Jacket, designed for comfort and versatility. Whether you're dressing up or keeping it casual, this jacket pairs effortlessly with any outfit.</p>
            <p>Upgrade your style with our premium Classic Denim Jacket, designed for comfort and versatility. Whether you're dressing up or keeping it casual, this jacket pairs effortlessly with any outfit.</p>
        </div>
    </div>
  )
}

export default DescriptionBox;