import React from 'react';
import './About.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-section">
        <h2>About Us</h2>
        <p>
          Welcome to dadibidi.com - Where Every Purchase Tells a Story! Our journey began with a passion for bringing unique and extraordinary products to your doorstep.
        </p>
      </div>

      <div className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          <strong>Empowering Your Lifestyle:</strong> We are committed to curating a diverse collection of products that enhance your lifestyle, express your individuality, and make every day a little more extraordinary.
        </p>
        <p>
          <strong>Quality & Sustainability:</strong> Our dedication to quality goes hand-in-hand with our commitment to sustainability. We carefully source products that not only meet the highest standards but also leave a positive impact on the environment.
        </p>
      </div>

      {/* Add more sections as needed */}

    </div>
  );
};

export default AboutUs;
