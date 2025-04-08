import React, {useContext, useRef, useState}from 'react';
import './Navbar.css';
import logo from "../Assets/logo.png"
import cart_image from "../Assets/cart_image.png"
import {Link} from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png';

export const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) =>{
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar d-flex flex-row justify-content-around'>
        <div className="nav-logo d-flex align-items-center">
            <img src={logo} alt="" className="logo"/>
            <p>Shoper</p>
        </div>
        <img className='nav-dropdown' onClick={dropdownToggle} src={dropdown_icon} alt=''/>
        <ul ref={menuRef} className="nav-menu">
            <li onClick= {() =>{ setMenu("shop") }}><Link style= {{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop" ? <hr/> : <></> }</li>
            <li onClick={ () => {setMenu("mens")}}><Link style= {{textDecoration:'none'}} to="/mens">Men</Link>{menu==="mens" ? <hr/> : <></> }</li>
            <li onClick={ () =>{setMenu("womens")}}><Link style= {{textDecoration:'none'}} to="/womens">Women</Link>{menu==="womens" ? <hr/> : <></> }</li>
            <li onClick={ () => {setMenu("kids")}}><Link style= {{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids" ? <hr/> : <></> }</li>
        </ul>
        <div className="nav-login-cart d-flex align-items-center">
            <Link style= {{textDecoration:'none'}} to="/login"><button className="btn btn-outline-secondary text-center">Login</button></Link>
            <Link style= {{textDecoration:'none'}} to="/cart"><img src={cart_image} alt="" className="cart-icon"/></Link>
            <div className="nav-cart-count d-flex justify-content-center align-items-center">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
