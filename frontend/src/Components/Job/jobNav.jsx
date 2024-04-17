import React from 'react';
import { Link } from 'react-router-dom';
import '../job/jobNav.css';
import logo from '../Assets/Logo.png';

const jobNavbar = () => {
  return (
    <div>
      {/* Existing Navbar */}
      <div className="Job-navbar">
        <div className="navbar-left">
          <Link to="/Job/home">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>
          <h2>Dadibidi Jobs seeking & posting</h2>
        </div>

        <div className="navbar-center">
          {/* Add a search bar here */}
          <input type="text" placeholder="Search..." />
        </div>

        <div className="navbar-right">
          {/* Add login and signup links */}
          <Link to="/Job/login">Login</Link>
          <Link to="/Job/signup">Signup</Link>
        </div>
      </div>

      {/* New Navbar for Service to Support */}
      <div className="support-navbar">
        <Link to="/Job/services">Service</Link>
        <Link to="/Job/home">About Us</Link>
        <Link to="/Job/services">FAQs</Link>
        <Link to="/Job/services">Review</Link>
        <Link to="/Job/services">Contact Us</Link>
        <Link to="/Job/services">Calender</Link>
        <Link to="/Job/services">Payment</Link>
        <Link to="/Job/services">Support</Link>
      </div>
    </div>
  );
};
export default jobNavbar;