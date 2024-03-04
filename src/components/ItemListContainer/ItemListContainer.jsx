import React from 'react'
import prox from "../../images/proximamente.png"

export const ItemListContainer = (props) => {
  return (
    <section>
       <article> 
            <img src={prox} alt="" />
            <p className='prdDescription'>{props.detalle}</p>
        </article>
    </section>
  )
}
