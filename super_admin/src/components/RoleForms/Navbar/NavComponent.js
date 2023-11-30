import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavStyle from './NavStyle.js';

const NavComponent = ({ config, handleNavClick }) => {
  return (
    <nav className="navbar">
      <ul className="nav-menu flex list-none">
        {config.map(item => (
          <li
            key={item.id}
            className={`${NavStyle[item.navcss]} ${item.name === handleNavClick ? 'NavStyle.activeStyle' : ''}`}
          >
            <Link to={item.link} onClick={() => handleNavClick(item.name)}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponent;
