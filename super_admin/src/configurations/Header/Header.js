// Header.js
import React from 'react';
import Header2 from './Header2';
import ComponentMap from './ComponentMap';
import headerData from './headerData.json';

const Header = () => {
  return (
    <div>
      <Header2 componentMap={ComponentMap} jsonData={headerData} />
      {/* Add more components as needed */}
    </div>
  );
};

export default Header;
