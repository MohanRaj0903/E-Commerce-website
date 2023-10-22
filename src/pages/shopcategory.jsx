
import './css/shopcategory.css'
import dropdown_icon from '../component/Assets/dropdown_icon.png'
import React, { useContext } from 'react'
import ShopContext from '../Context/ShopContext'

// import {all_product} from '../component/Assets/all_product'
// import Item from '../component/item/item'

const shopcategory = (props) => {
  // const {all_product} = useContext(ShopContext);


  return (
    <div className='shop-category'>
     <img src={props.banner} alt="" />
     
    </div>
  )
}

export default shopcategory
