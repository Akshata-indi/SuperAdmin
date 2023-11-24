import React from 'react';
import Nav from './Navbar/Nav';
import Menu from './Menu/Menu';
import navData from './Navbar/navData.json';
import menuData from './Menu/menuData.json';

const RoleForm = ({ configs }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="main-container bg-gray-200 rounded-lg">
     <span>
        <Menu configs={menuData} />
        </span>
        <span>
        <Nav configs={navData} />
        </span>
      </div>
    </div>
  );
};

export default RoleForm;
