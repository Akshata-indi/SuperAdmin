

import React from 'react';
import MenuStyle from './MenuStyle'

const MenuComponent = ({config}) => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        {config.map(item => (
          <li key={item.id} className={MenuStyle[item.menucss]}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;
