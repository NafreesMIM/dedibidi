import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import card_icon from '../Assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const[menu,setMenu]=useState("Shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
      <img src={logo} alt="" />
        <p>DADIBIDI</p>
      </div>
      <ul className="nav-menu">
        <li > 
          <select>
            <option >SERVICES</option>
            <option><a href='#'>Option 1</a></option>
            <option><a href='#'>Option 2</a></option>  
          </select>
                
        </li>
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
