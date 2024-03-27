import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConsultationNavbar from './ConsultationNavbar'; // Adjust the import path based on your project structure
import '../Consultation/service3.css'; // Import your CSS file for styling
import AboutUs from './Cabout'; 

const Service3 = () => {
  return (
    <div className="service3-container">
      
      <ConsultationNavbar />

      {/* Main Content */}
      <div className="main-content">
      <Routes>
            <Route path="/Consultation/about" element={<AboutUs />} /> {/* Route for AboutUs page */}
            {/* Add routes for other pages */}
          </Routes>
        {/* Your Online Consultation page content */}
        <h2>Welcome to the Dedibidi <br></br> 
         Consultation Service!!!</h2>
        {/* Add other content as needed */}
       
        <button>Explore More</button>
      </div>

     
    </div>
  );
};

export default Service3;
