// BodyComponent.js

import React from 'react';
import Menu from '../Menu/Menu';
import Nav from '../Navbar/Nav';
import rolemenuData from './rolemenuData.json'
import rolenavData from './rolenavdata.json'

const BodyComponent = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Container for heading and button */}
      <div className="flex justify-between items-center ml-20 mt-20 mb-10 mr-20">
        {/* Heading on the top left */}
        <h3 className="text-xl font-sans">Roles</h3>

        {/* Button on the top right */}
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
          Create New Role
        </button>
      </div>

      {/* Main container */}
      <div className="flex-1 flex ml-20 mr-20">
        {/* Sidebar (Menu) */}
        <div className="w-1/4 rounded-lg bg-white-200 border-t-2 border-b-2 border-l-2 p-5">
          <Menu configs={rolemenuData} />
        </div>

        {/* Main content */}
        <div className="w-3/4 rounded-lg bg-white-200 border-2 p-10">
            
            <header className="text-xl font-sans">Role 1</header>
         <Nav configs={rolenavData} />
         <hr className="my-2 border-b-1 border-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
