// ConsultationNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Consultation/ConsultationNavbar.css';

const ConsultationNavbar = () => {
  return (
    <div className="consultation-navbar">
      <Link to="/consultation/home">Home</Link>
      <Link to="/consultation/services">Services</Link>
      <Link to="/consultation/home">About Us</Link>
      <Link to="/consultation/services">FAQs</Link>
      <Link to="/consultation/services">Review</Link>
      <Link to="/consultation/services">Contact Us</Link>
      <Link to="/consultation/services">Calender</Link>
      <Link to="/consultation/services">Payment</Link>
      <Link to="/consultation/services">Support</Link>
      {/* Add other links specific to the Online Consultation page */}
    </div>
  );
};

export default ConsultationNavbar;
