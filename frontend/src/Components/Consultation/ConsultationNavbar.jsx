// ConsultationNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const ConsultationNavbar = () => {
  return (
    <div className="consultation-navbar">
      <Link to="/consultation/home">Home</Link>
      <Link to="/consultation/services">Services</Link>
      {/* Add other links specific to the Online Consultation page */}
    </div>
  );
};

export default ConsultationNavbar;
