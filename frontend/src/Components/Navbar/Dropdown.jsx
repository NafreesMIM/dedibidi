// Dropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleItemClick = (item) => {
    if (item.openInNewWindow) {
      window.open(item.link, '_blank');
    } else {
      console.log(`Navigating to: ${item.link}`);
    }
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
            <li key={index} onClick={() => handleItemClick(item)}>
              <Link to={item.link} target={item.openInNewWindow ? '_blank' : '_self'}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
