import React from 'react'
import './Product.css'

export default function Product(props) {
  return (
    <div className='product'>
        <div className='productView'>{props.Name} price= {props.Price} 
            <button onClick={()=>{props.AddP(props.Val)}}>+</button>
        </div>
        
    </div>
  )
}
