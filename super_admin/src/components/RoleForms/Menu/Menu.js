import React from 'react';
import MenuStyle from './MenuStyle'

const Menu = ({config}) => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        {config.map(item => (
          <li key={item.id} className={MenuStyle[item.menucss]}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
