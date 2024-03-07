// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dropdownItems = [
    { text: 'Job posting and seeking', link: '/Job/service1', openInNewWindow: true },
    { text: 'Online booking', link: '/online-booking', openInNewWindow: true },
    { text: 'Online consultation', link: '/Consultation/service3', openInNewWindow: true },
    { text: 'Selling and buying', link: '/service4', openInNewWindow: true },
    { text: 'E stores', link: 'E-store/service5', openInNewWindow: true }
  ];

  return (
    <div className='navbar'>
      <div className="nav-logo" onClick={() => handleMenuItemClick("home")}>
        <img src={logo} alt="" />
        <p>Dadibidi<span className='comEdit'>.Com</span></p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenuItemClick("home")}>
          <Link style={{ textDecoration: 'none' }} to='/'>HOME{menu === "home" && <hr />}</Link>
        </li>
        <li onClick={() => handleMenuItemClick("services")}>
          <Dropdown title="SERVICES" items={dropdownItems} />
          {menu === "services" && <hr />}
        </li>
        <li onClick={() => handleMenuItemClick("about")}>
          <Link style={{ textDecoration: 'none' }} to='/About'>ABOUT US</Link>{menu === "about" && <hr />}
        </li>
        <li onClick={() => handleMenuItemClick("contact")}>
          <Link style={{ textDecoration: 'none' }} to='/Contact'>CONTACT US</Link> {menu === "contact" && <hr />}
        </li>
        <li onClick={() => handleMenuItemClick("privacy")}>
          <Link style={{ textDecoration: 'none' }} to='/privacy'>PRIVACY POLICY</Link> {menu === "privacy" && <hr />}
        </li>
      </ul>
      <div className="nav-login-card">
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <button onClick={() => handleMenuItemClick("login")}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
