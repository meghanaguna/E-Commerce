import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import stardull_icon from '../Assets/stardull_icon.png';
import { ShopContext } from '../../Context/ShopContext';



const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay d-flex'>
        <div className="productdisplay-left d-flex">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="paoductdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/>
            </div>
        </div>
        <div className="productdisplay-right d-flex flex-column">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars d-flex align-items-center">
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={stardull_icon} alt=""/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices d-flex">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight,usually knitted,pullover shirt,close fitting and a round neckline and short sleeves, worn as a undershirt or outershirt garment. 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes d-flex">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category">Category: <span>Women , T-Shirt , Crop Top</span></p>
            <p className="productdisplay-right-category">Tags: <span>Modern , Latest</span></p>
        </div>
    </div>
  )
}
export default ProductDisplay;
