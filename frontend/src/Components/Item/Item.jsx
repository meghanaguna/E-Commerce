import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="item">
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className="item-prices d-flex">
            <div className='item-prices-new me-1'>
                <p>{props.new_price}</p>
            </div>
            <div className='item-prices-old'>
                <p>{props.old_price}</p>
            </div>
        </div>
    </div>
  )
}

export default Item;

