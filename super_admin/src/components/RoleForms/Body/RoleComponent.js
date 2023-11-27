import React from 'react';

import Nav from '../Navbar/Nav';
import rolemenuData from './rolemenuData.json'
import rolenavData from './rolenavdata.json'
import Sidebar from '../../../configurations/navigation/Sidebar';
import Modal from '../../../ui-configs/Modal/Modal';
import modalData from '../../../ui-configs/Modal/modalData.json'

const RoleComponent = () => {
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
        <Modal Config={modalData}/>
        
      </div>

      {/* Main container */}
      <div className="flex-1 flex ml-20 mr-20">
        {/* Sidebar (Menu) */}
        <div className="w-1/4 rounded-l-lg bg-white-200 border-t-2 border-b-2 border-l-2 p-5">
        <Sidebar menuConfigs={rolemenuData}/>
        </div>

        {/* Main content */}
        <div className="w-3/4 rounded-r-lg bg-white-200 border-2 p-10">
            
            <header className="text-xl font-sans">Role 1</header>
         <Nav configs={rolenavData} />
         <hr className="my-2 border-b-1 border-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default RoleComponent;
