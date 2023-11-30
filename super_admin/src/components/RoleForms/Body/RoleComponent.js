import React, { useState } from 'react';
import Nav from '../Navbar/Nav';
import rolemenuData from './rolemenuData.json'
import rolenavData from './rolenavdata.json'
import Sidebar from '../../../configurations/navigation/Sidebar';
import Modal from '../../../ui-configs/Modal/Modal';
import roleModal from './roleModal.json'
import Header from './Header';
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

          <div className='main-container pt-10 '>

            <div className='btn-container flex justify-between px-40'>
                <h3 className="text-xl font-sans text-gray-600">2 Roles</h3>
                <Modal Config={roleModal}/>
              </div>
            </div>

            <div className='sidebar-container px-40 py-10'>
                <div className="flex-1 flex">
                  <div className="w-1/4 bg-white-200 border-2 rounded-l-lg p-4">
                    <Sidebar menuConfigs={rolemenuData}/>
                  </div>

              {/* Main content */}
                  <div className="w-3/4 bg-white-200 border-y-2 border-r-2 rounded-r-lg p-4">  
                    <div className='header-container flex justify-between p-4'>
                      <Header />
                      <button>disable</button>
                    </div>

                    <div className='nav-container p-4'>
                    <Nav configs={rolenavData} handleNavClick={handleNavClick} />
                    </div>
                  
                    <hr className="border-b-1 border-gray-200 ml-0" />

                    <div className='main-body'>
                      <div className='p-4'>
                      {(selectedNavItem === 'Apps' || selectedNavItem === null) && <AppNav />}
                      {selectedNavItem === 'User' && <UserNav />}
                      {selectedNavItem === 'Permissions' && <PermissionsNav />}
                        
                      </div>
                    </div>
                    
                  </div>
                  </div>
          
      </div>
     </div>

    );
  };

  export default RoleComponent;






    // <div className="flex flex-col h-screen">
    //   {/* Container for heading and button */}
    //   <div className="flex justify-between items-center ml-20 mt-20 mb-10 mr-20">
    //     {/* Heading on the top left */}
    //     <h3 className="text-xl font-sans text-gray-600">2 Roles</h3>

    //     {/* Button on the top right */}
    //     <Modal Config={modalData}/>
        
    //   </div>

    //   {/* Main container */}
    //   <div className="flex-1 flex ml-20 mr-20">
    //     {/* Sidebar (Menu) */}
    //     <div className="w-1/5 rounded-l-lg bg-white-200 border-t-2 border-b-2 border-l-2 p-4">
    //     <Sidebar menuConfigs={rolemenuData}/>
    //     </div>

    //     {/* Main content */}
    //     <div className="w-3/4 rounded-r-lg bg-white-200 border-2 p-10">  
    //       <Header />
    //      <Nav configs={rolenavData} />
    //      <hr className="my-2 border-b-1 border-gray-200" />
    //     </div>
    //   </div>
    // </div>


  
