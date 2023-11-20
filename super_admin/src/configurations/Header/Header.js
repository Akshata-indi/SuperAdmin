// Header.js
import React from 'react';
import Header1 from './Header1';
import ComponentMap from './ComponentMap';
import headerData from './headerData.json';

const Header = () => {
  return (
    <div>
      <Header1 componentMap={ComponentMap} jsonData={headerData} />
      {/* Add more components as needed */}
    </div>
  );
};

export default Header;
