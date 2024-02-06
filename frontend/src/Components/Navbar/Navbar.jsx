import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import card_icon from '../Assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'; 

const Navbar = () => {

    const[menu,setMenu]=useState("Shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
      <img src={logo} alt="" />
        <p>DADIBIDI<span className='comEdit'>.COM</span></p>
      </div>
      <ul className="nav-menu">
        <Dropdown title="SERVICES" items={[' Service 1 ', 'Service 2', 'Service 3','service 4']} />


       
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
