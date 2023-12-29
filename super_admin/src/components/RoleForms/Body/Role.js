  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import Nav from '../Navbar/Nav';
  import rolemenuData from './rolemenuData.json'
  import rolenavData from './rolenavdata.json'
  import Sidebar from '../../../configurations/navigation/Sidebar';
  import roleModal from './roleModal.json'
  import Header from '../header/Header';
  import AppNav from '../app/AppNav'
  import UserNav from '../user/UserNav'
  import PermissionNav from '../permission/PermissionNav'
  import Fmodal from '../../../configurations/form_modal/Fmodal';
  import rolemodalData from './rolemodalData.json'

  const Role = () => {
        const [selectedNavItem, setSelectedNavItem] = useState(null);
        const [roleNames, setRoleNames] = useState([]);
        const handleNavClick = (itemName) => {
        setSelectedNavItem(itemName);
    };

       useEffect(() => {
      const fetchRoleNames = async () => {
        try {
          const response = await axios.get('http://localhost:3001/roles');
          setRoleNames(response.data.roles.map(role => role.roleName));
        } catch (error) {
          console.error('Error fetching role names:', error);
        }
      };
  
      fetchRoleNames();
    }, []);
    
    return (
      <div className='w-[100%]'>

        <div className='btn-container mb-2 mx-8 flex justify-end mr-20 my-12'>
        <Fmodal configs={roleModal} iconfig={rolemodalData} />
        </div>

        <div className="roleform bg-white border w-[90%] mx-4 border-gray-300 shadow-sm rounded h-[60vh] ">
          <div className='sidebar-and-content-container flex'>
            
          <div className="w-[20%] border-r-2 border-gray-100 h-[60vh] px-2 py-2">
            <Sidebar menuConfigs={roleNames } />
          </div>

          <div className="main-content w-[80%]">
          <div className='header-container flex justify-between p-4'>
            <Header />
          <button>disable</button>
          </div>

          <div className='nav-container p-2'>
          <Nav configs={rolenavData} handleNavClick={handleNavClick} />
          </div>

          {/* body components */}
            <div className='main-body'>
              <div className=''>
                {(selectedNavItem === 'Apps' || selectedNavItem === null) && <AppNav />}
                {selectedNavItem === 'User' && <UserNav />}
                {selectedNavItem === 'Permissions' && <PermissionNav />}
              </div>
            </div>
    </div> 

    </div> 
  </div>
  </div>
    )
  }
    
  export default Role
