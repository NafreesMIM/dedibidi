import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConsultationNavbar from './ConsultationNavbar'; 
import '../Consultation/service3.css'; 
import AboutUs from './Cabout'; 
import Service from './Service'; 

const Service3 = () => {
  return (
    <div className="service3-container">
      
      <ConsultationNavbar />

   
      <div className="main-content">
         <Routes>
            <Route path="/Consultation/Cabout" element={<AboutUs />} /> 
            <Route path="/Consultation/Service" element={<Service />} />
          </Routes>
     
        <h2>Welcome to the Dedibidi <br></br> 
         Consultation Service!!!</h2>
       
       
        <button>Explore More</button>
      </div>

     
    </div>
  );
};

export default Service3;
