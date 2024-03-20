// Service3.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConsultationNavbar from './ConsultationNavbar'; // Adjust the import path based on your project structure
import Home from './Home'; // Import the component for the Home page
import AboutUs from './about'; // Import the component for the About Us page


const Service3 = () => {
  return (
    <div className="service3-container">
      <BrowserRouter>
        <ConsultationNavbar />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/consultation/home" element={<Home />} />
            <Route path="/consultation/about" element={<AboutUs />} />
            {/* Add routes for other pages */}
          </Routes>
          <h2>Welcome to the Dedibidi Consultation Service!!!</h2>
          {/* Add other content as needed */}
          <button>Explore More</button>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Service3;

