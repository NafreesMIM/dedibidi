import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Dadibidi<span className='comEdit'>.Com</span></p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("home") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>HOME{menu === "home" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => { setMenu("services") }}>
          <Dropdown title="SERVICES" items={[
            { text: ' Job posting and seeking', link: '/service1' },
            { text: 'Online booking', link: '/service2' },
            { text: 'Online consultation', link: '/service3' },
            { text: 'Selling and buying', link: '/service4' },
            { text: 'E stores', link: '/service5' }
          ]} />
          {menu === "services" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("about") }}>
          <Link style={{ textDecoration: 'none' }} to='/About'>ABOUT US</Link>{menu === "about" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("contact") }}>
          <Link style={{ textDecoration: 'none' }} to='/Contact'>CONTACT US</Link> {menu === "contact" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("privacy") }}>
          <Link style={{ textDecoration: 'none' }} to='/privacy'>PRIVACY POLICY</Link> {menu === "privacy" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-card">
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar;
