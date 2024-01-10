import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavStyle from './NavStyle.js';

const NavComponent = ({ config, handleNavClick, activeItem }) => {
  return (
    <nav className="navbar">
      <ul className="nav-menu flex list-none">
        {config.map(item => (

          <li
          
          key={item.id}
          className={`${NavStyle[item.navcss]} ${item.name === activeItem ? NavStyle.activeStyle : ''} flex mx-14 mr-4 pt-5 gap-2 items-center  `}>
              <i>{item.icon}</i>
            <button onClick={() => handleNavClick(item.name)}>{item.name}</button>
            {/* <span className={NavStyle.lableouterstyle}>{<item.icon/>} </span> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponent;

