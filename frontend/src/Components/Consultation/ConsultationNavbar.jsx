
import React from 'react';
import { Link } from 'react-router-dom';
import './ConsultationNavbar.css';
import logo from '../Assets/Logo.png';

const ConsultationNavbar = () => {
  return (
    <div>
  
      <div className="consultation-navbar">
        <div className="navbar-left">
          <Link to="/consultation/home">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>
          <h2>Dadibidi Consultation</h2>
        </div>

        <div className="navbar-center">
         
          <input type="text" placeholder="Search..." />
        </div>

        <div className="navbar-right">
         
          <Link to="/consultation/login">Login</Link>
          <Link to="/consultation/signup">Signup</Link>
        </div>
      </div>

    
      <div className="support-navbar">
        <Link to="#">Home</Link>
        <Link to="/Consultation/Service">Service</Link>
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
