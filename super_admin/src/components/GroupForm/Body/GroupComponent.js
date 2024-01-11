import React, { useState, useEffect } from 'react';
import Nav from '../Navbar/Nav';
import groupmenuData from './groupmenuData.json'
import groupnavdata from './groupnavdata.json'
import Sidebar from '../../../configurations/navigation/Sidebar';
import Modal from '../../../ui-configs/modal/Modal'
import groupModal from './groupModal.json'
import Header from '../header/Header';
import AppNav from '../app/AppNav'
import UserNav from '../user/UserNav'
import PermissionsNav from '../permission/PermissionNav'

const GroupComponent = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [groupCount, setGroupCount] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    // Update group count when component mounts
    if (groupmenuData && Array.isArray(groupmenuData)) {
      setGroupCount(groupmenuData.length);
    }
  }, []);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  const handleNavClick = (itemName) => {
    setSelectedNavItem(itemName);
  };

  return (
    <div className='basis-[100%]'>
      <div className='main-container pt-10'>

        <div className='btn-container flex justify-between px-40'>
          <h3 className="text-xl font-sans text-gray-600">{groupCount} Groups</h3>
          <Modal Config={groupModal} />
        </div>
      </div>

      {/* Sidebar and Main Content */}
      <div className='sidebar-and-content-container flex px-40 py-10'>

        {/* Sidebar */}
        <div className="w-1/4 bg-white-200 border-2 border-gray-100 rounded-l-lg p-4 shadow-sm bg-gray-50" style={{ height: '70vh' }}>
          <Sidebar menuConfigs={groupmenuData} onGroupSelect={handleGroupSelect} />
        </div>

        {/* Main content */}
        <div className="w-3/4 bg-white-200 border-y-2 border-r-2 border-gray-100 rounded-r-lg p-4 shadow-sm bg-gray-50" style={{ height: '70vh' }}>

          {/* header */}
          <div className='header-container flex justify-between p-4'>
            <Header selectedGroup={selectedGroup} />
            <button>Edit</button>
            <button>Delete</button>
          </div>

          {/* navbar */}
          <div className='nav-container p-4'>
            <Nav configs={groupnavdata} handleNavClick={handleNavClick} />
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

export default GroupComponent;
