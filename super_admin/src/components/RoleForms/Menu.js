import React from 'react';
import menuData from './menuData'; // Import the JSON file

const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        {menuItems.map(item => (
          <li key={item.id} className="menu-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
