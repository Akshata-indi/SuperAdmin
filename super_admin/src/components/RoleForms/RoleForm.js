import React from 'react';
import NavComponent from './Navbar/NavComponent';

import Sidebar from '../../configurations/navigation/Sidebar';

const config = {
  showNav: true,
  showSidebar: true,
  showHeader: true,
  showDropdown: true,
};
const RoleForm = ({ config }) => {
  const { showNav, showSidebar, showHeader, showDropdown } = config;

  return (
    <div className="main-container">
      {showNav && <NavComponent />}
      {showSidebar && <Sidebar />}
      {/* {showHeader && <Header />}
      {showDropdown && <Dropdown />} */}
    </div>
  );
};

export default RoleForm;
