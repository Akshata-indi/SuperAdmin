import React, { useState } from 'react';
import Nav from '../Navbar/Nav';
import rolemenuData from './rolemenuData.json'
import rolenavData from './rolenavdata.json'
import Sidebar from '../../../configurations/navigation/Sidebar';
import Modal from '../../../ui-configs/modal/Modal'
import roleModal from './roleModal.json'
import Header from '../header/Header';
import AppNav from '../app/AppNav'
import UserNav from '../user/UserNav'
import PermissionsNav from '../permission/PermissionNav'

const RoleComponent = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavClick = (itemName) => {
    setSelectedNavItem(itemName);
  };

  return (
    <div className='basis-[100%]'>
      <div className='main-container pt-10'>

        <div className='btn-container flex justify-between px-40'>
          <h3 className="text-xl font-sans text-gray-600">2 Roles</h3>
          <Modal Config={roleModal} />
        </div>
      </div>

      {/* Sidebar and Main Content */}
      <div className='sidebar-and-content-container flex px-40 py-10'>

        {/* Sidebar */}
        <div className="w-1/4 bg-white-200 border-2 border-gray-100 rounded-l-lg p-4 shadow-sm bg-gray-50" style={{ height: '70vh' }}>
          <Sidebar menuConfigs={rolemenuData} />
        </div>

        {/* Main content */}
        <div className="w-3/4 bg-white-200 border-y-2 border-r-2 border-gray-100 rounded-r-lg p-4 shadow-sm bg-gray-50" style={{ height: '70vh' }}>

          {/* header */}
          <div className='header-container flex justify-between p-4'>
            <Header />
            <button>disable</button>
          </div>

          {/* navbar */}
          <div className='nav-container p-4'>
            <Nav configs={rolenavData} handleNavClick={handleNavClick} />
          </div>

          <hr className="border-b-1 border-gray-200 ml-0" />

          {/* body components */}
          <div className='main-body' style={{ height: 'calc(70vh - 120px)' }}>
            <div className='p-4'>
              {(selectedNavItem === 'Apps' || selectedNavItem === null) && <AppNav />}
              {selectedNavItem === 'User' && <UserNav />}
              {selectedNavItem === 'Permissions' && <PermissionsNav />}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoleComponent;
