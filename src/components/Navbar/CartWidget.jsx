import React from 'react'
import carritoImg from "../../images/carrito.png"

export const CartWidget = () => {
  return (
    <div className='cartContainer'>
        <img src={carritoImg} alt="" className='cartImg' /><span className='carritoCant'>4</span>
    </div>
  )
}
