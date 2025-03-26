import React from 'react';
import './Popular.css';
import data_product from '../Assets/data_products';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular d-flex flex-column align-items-center'>
        <h1>Popular In Women</h1>
        <hr/>
        <div className="popular-item d-flex">
            {
                data_product.map((item,i)=>{
                    return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default Popular;
