import React from 'react';
import NavStyle from './NavStyle.js';
import navData from './navData.json'
const Nav = ({config}) => {
  return (
    <nav className="navbar">
      <ul className="nav-menu flex list-none">
        {config.map(item => (
          <li key={item.id} className={NavStyle[item.navcss]}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;