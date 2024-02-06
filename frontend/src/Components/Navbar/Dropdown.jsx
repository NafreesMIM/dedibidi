import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdown-toggle">
        {title}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
