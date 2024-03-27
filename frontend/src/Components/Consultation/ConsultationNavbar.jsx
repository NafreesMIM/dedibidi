// ConsultationNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Consultation/ConsultationNavbar.css';
import logo from '../Assets/Logo.png';

const ConsultationNavbar = () => {
  return (
    <div>
      {/* Existing Navbar */}
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
      </div>

      {/* New Navbar for Service to Support */}
      <div className="support-navbar">
        <Link to="#">Home</Link>
        <Link to="/Consultation/services">Service</Link>
        <Link to="/Consultation/Cabout">About Us</Link>
        <Link to="/Consultation/services">FAQs</Link>
        <Link to="/Consultation/services">Review</Link>
        <Link to="/Consultation/services">Contact Us</Link>
        <Link to="/Consultation/services">Calender</Link>
        <Link to="/Consultation/services">Payment</Link>
        <Link to="/Consultation/services">Support</Link>
      </div>
    </div>
  );
};

export default ConsultationNavbar;
