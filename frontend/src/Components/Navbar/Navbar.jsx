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
      <Dropdown title="SERVICES" items={[' Service 1 ', 'Service 2', 'Service 3','service 4','service 5']} />

        <li > 
          <select>
            <option >SERVICES</option>
            <option><a href='#'>Option 1</a></option>
            <option><a href='#'>Option 2</a></option>  
          </select>
                
        </li>
           42ced7e17d72107e110d4489dec78f60a1049308
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
