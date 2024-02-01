import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import card_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const[menu,setMenu]=useState("Shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>DEDIBIDI</p>
      </div>
      <ul className="nav-menu">
        <li >SERVICES</li>
        <li >ABOUT US</li>
        <li >CONTACT US</li>
        <li >PRIVACE POLICY</li>
      </ul>
      <div className="nav-login-card">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/card'><img src={card_icon} alt="" /></Link>
        <div className="nav-card-count">0</div>
      </div>
    </div>
  )
}
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
export default Navbar
