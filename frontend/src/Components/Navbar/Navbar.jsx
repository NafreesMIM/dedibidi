import React, { useState } from 'react'
import './Navbar.css'
import card_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

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
      <button>Login</button>
      
      
      </div>
    </div>
  )
}

export default Navbar
