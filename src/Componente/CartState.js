import React from 'react'
import './CartState.css'

export default function CartState(props) {

 
  return (
    <div className='cartProductWrap'>
        <div className='cartProduct'>{props.Name} price= {props.Price} </div>
    </div>
  )
}
