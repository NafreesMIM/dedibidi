import React from 'react';
import { Link } from 'react-router-dom';
import '../Job/JobNav.css';
import logo from '../Assets/Logo.png';

const jobNavbar = () => {
  return (
    <div>
     
      <div className="Job-navbar">
        <div className="navbar-left">
          <Link to="/Job/home">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>
          <h1>Welcome to Dadibidi Jobs </h1>
        </div>

       
        <div className="navbar-right">

          <Link to="/Job/login">Login</Link>
          <Link to="/Job/signup">Signup</Link>
        </div>
      </div>

     
      <div className="support-navbar">
        <Link to="/Job/services">Home</Link>
        <Link to="/Job/home">Post Your Vacancy</Link>
        <Link to="/Job/services">Post your application</Link>
        <Link to="/Job/services">Success stories</Link>
        <Link to="/Job/services">Top employers</Link>
        <Link to="/Job/services">Resources</Link>
        <Link to="/Job/services">Contact us</Link>
        <Link to="/Job/services">About us</Link>
      </div>
    </div>
  );
};
export default jobNavbar;