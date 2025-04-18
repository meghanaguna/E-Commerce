import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';


const CartItems = () => {
  const {getTotalCartAmount,all_products,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
        {all_products.map((e)=>{
          if(cartItems[e.id]>0)
          {  
            return <div>
              <div className="cartitems-format cartitems-format-main">
                <img className='carticon-producticon' src={e.image} alt=""/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img  className='cartitems-removeicon' src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
              </div>
              <hr/>
            </div>
          }
          return null;
        })}
        <div className="cartitems-down d-flex">
          <div className="cartitems_total d-flex flex-column">
            <h1>Cart Total</h1>
            <div>
              <div className="cartitems-totalitem">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cartitems-totalitem">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className="cartitems-totalitem">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className='text-uppercase'>Proceed To Checkout</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code enter it here</p>
            <div className="cartitem-promobox">
              <input placeholder='promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems;
