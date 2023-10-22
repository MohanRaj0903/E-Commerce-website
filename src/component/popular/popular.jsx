import React from 'react'
import './popular.css'
import data_product from '../Assets/data'
import Item from '../item/item'


const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMAN</h1>
      <hr/>
      <div className='popular-item'>
        {data_product.map((item)=>{
        return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      })}</div>
    </div>
  )
}

export default Popular