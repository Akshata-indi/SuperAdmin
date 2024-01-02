import React, { useEffect, useState } from 'react';
import Sidebar from '../../configurations/navigation/Sidebar'
import rolemenuData from '../../components/RoleForms/Body/rolemenuData.json'
import SearchableComp from '../../configurations/search/SearchableComp'
import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'
import Nav from '../../components/RoleForms/Navbar/Nav'
// import rolenavData from '../../components/RoleForms/Body/rolenavdata.json'
import { menudata } from './InnerConfig'
import Header from '../../components/RoleForms/header/Header'
import { sidedata } from './InnerConfig'
import AppNav from '../../components/RoleForms/app/AppNav'
import UserNav from '../../components/RoleForms/user/UserNav'
import PermissionNav from '../../components/RoleForms/permission/PermissionNav'
import ProfileDetails from '../../pages/userContent/profile/ProfileDetails'
import AppDetails from './userApp/AppDetails'
import PolicyDetails from './policy/PolicyDetails'
import GroupsDetails from './groups/GroupsDetails'
import RolesDetails from './roles/RolesData'
import axios from 'axios';
import { getApiUrl } from '../../services/getApi/GetApi'
import { USERS_API } from './UserConfig';
import TableComponent from '../../configurations/tables/TableComponent';
import { tabledata } from './UserConfig';
import { Tdata } from './InnerConfig';



const UserForm = () => {
  const [selectedNavItem, setSelectedNavItem] = useState();
  // const [activeLink, setActiveLink] = useState('');
  const [data, setSearchData] = useState([]);



  // const [searchData, setSearchData] = useState([]);
  

  const handleNavClick = (linkName) => {
    setSelectedNavItem(linkName);
  };

  const searchFun = (recsearchdata) => {
    setSearchData(recsearchdata)

  }

  // const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(getApiUrl(USERS_API));
      console.log('API Response:', response.data);

      setSearchData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };

  useEffect(() => {
    
      fetchData();
      setIsLoading(false)
    
   
  }, []);


  return (
    // <div className=''>


      <div className="roleform bg-white border w-[80%] mx-56 my-20 border-gray-500 shadow-sm rounded  ">
        <div className=' flex'>

          <div className="w-[30%] border-r-2 border-gray-400 h-[64vh] px-2 py-4">
          <SearchableComp SearchConfig={SearchInputConfig}  data={data} searchFunrec={searchFun}/>
            {/* <Sidebar menuConfigs={data} data={data}/> */}
            
             <TableComponent tableConfig={Tdata} data={data}   />
          </div>

          <div className="main-content w-full   ">
          <div className=' h-[9vh] border  shadow-sm'>
        
            <Nav configs={menudata} handleNavClick={handleNavClick} />
            {/* <UserHeaderComponent items = {UserHeaderConfig} handleNavClick={handleNavClick} /> */}
            </div>
               <div className='mx-6 my-6 '>
                     {(selectedNavItem === 'Profile' || selectedNavItem === null) && <ProfileDetails />}
                     {selectedNavItem === 'Apps' && <AppDetails />}
                     {selectedNavItem === 'Policy' && <PolicyDetails />}
                     {selectedNavItem === 'Groups' && <GroupsDetails />}
                     {selectedNavItem === 'Roles' && <RolesDetails />}
               </div>
           
          </div>

        </div>
      </div>



    // </div>

  )
}

export default UserForm