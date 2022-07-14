import React from 'react'
import './Logo.css' 
import homeImage from '../Assets/Images/HomeIcon.png';
import cartImage from '../Assets/Images/shopping-cart-icon.jpg';

export default function Logo(props) {

  return (
    <div className='Logo'>
        <img className='homeImage' src={homeImage} onClick={()=>{props.home()}}></img>
        <h3 className='titleLogo'>BIG Shop</h3>
        <img className='logoCartImage' src={cartImage} onClick={()=>{props.cart()}}></img>
    </div>
  )
}
