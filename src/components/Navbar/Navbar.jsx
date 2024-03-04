import React from 'react'
import logotipo from "../../images/Logotipo.png"
import carritoImg from "../../images/carrito.png"
export const Navbar = () => {
  return (
    
    <nav>
      <img src={logotipo} alt="logotipo de la empresa" className='logo' />
        <ul>
            <li> Cremas </li>
            <li> Lociones </li>
            <li> Serums </li>
            
        </ul>
        <img src={carritoImg} alt="" className='cartImg' /><span className='carritoCant'>4</span>
    </nav>
  )
}
