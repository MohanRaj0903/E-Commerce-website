import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'


const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo'/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><link to='/' ></link> Shop{menu==="shop"? <hr/>: <> </> }</li>
        <li onClick={()=>{setMenu("mens")}}><link to='/Mens'></link> Men {menu==="mens"? <hr/>: <> </> }</li>
        <li onClick={()=>{setMenu("womens")}}><link to='/Womens'></link> Women {menu==="womens"? <hr/>: <> </> }</li>
        <li onClick={()=>{setMenu("Kids")}}><link to='/Kids'></link> Kids {menu==="Kids"? <hr/>: <> </> }</li>

      </ul>
      <div className="nav-login-cart">
        <link to='/login'></link> <button >login</button>
        <link to='/cart'></link><img src={cart_icon} alt='cart_logo'/>
        <div className='nav-cart-count'>0</div>
      </div>
                   
                   

      
    </div>
  )
}

export default Navbar
