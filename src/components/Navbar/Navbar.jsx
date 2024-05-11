import React, { useState } from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets'


const Navbar = () => {

    const[menu, setMenu] = useState("home")

  return (
    
    <div className='navbar'>
        <img className='logo' src={assets.logo_new} alt="" />

        <ul className='navbar-menu'>
            <li onClick={() => setMenu('home')} className={menu==='home'?'active': ""}>Home</li>
            <li onClick={() => setMenu('offers')} className={menu==='offers'?'active': ""}>Offers</li>
            <li onClick={() => setMenu('categories')} className={menu==='categories'?'active': ""}>Categories</li>
            <li onClick={() => setMenu('shops')} className={menu==='shops'?'active': ""}>Shops</li>
            <li onClick={() => setMenu('contact')} className={menu==='contact'?'active': ""}>Contact</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""  />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot">

                </div>
            </div>
            <button className='navbar-signin-btn'>Login</button>
        </div>
    </div>
  )
}

export default Navbar