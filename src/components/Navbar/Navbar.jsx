import React from 'react'
import logotipo from "../../images/Logotipo.png"
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    
    <nav>
      <img src={logotipo} alt="logotipo de la empresa" className='logo' />
        <ul>
            <li> Cremas </li>
            <li> Lociones </li>
            <li> Serums </li>
            
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}
