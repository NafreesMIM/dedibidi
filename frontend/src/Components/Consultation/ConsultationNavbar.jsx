
import React from 'react';
import { Link } from 'react-router-dom';
import '../Consultation/ConsultationNavbar.css';
import logo from '../Assets/Logo.png';

const ConsultationNavbar = () => {
  return (
    <div className="consultation-navbar">
      <div className="navbar-left">
        <Link to="/consultation/home">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>
        <h2>Dadibidi Consultation</h2>
      </div>

      <div className="navbar-center">
        {/* Add a search bar here */}
        <input type="text" placeholder="Search..." />
      </div>

      <div className="navbar-right">
        {/* Add login and signup links */}
        <Link to="/consultation/login">Login</Link>
        <Link to="/consultation/signup">Signup</Link>
      </div>

      {/* Add other links specific to the Online Consultation page */}
      <Link to="/consultation/services">Services</Link>
      <Link to="/consultation/home">About Us</Link>
      <Link to="/consultation/services">FAQs</Link>
      <Link to="/consultation/services">Review</Link>
      <Link to="/consultation/services">Contact Us</Link>
      <Link to="/consultation/services">Calender</Link>
      <Link to="/consultation/services">Payment</Link>
      <Link to="/consultation/services">Support</Link>
    </div>
  );
};

export default ConsultationNavbar;

