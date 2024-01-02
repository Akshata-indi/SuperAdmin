// import React from 'react'
// import axios from 'axios'
// import { getApiUrl } from '../../services/getApi/GetApi'
// import { USERS_API } from './UserConfig'
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// // import Table from '../../configurations/tables/Table'
// import  {tableContent}  from  '../../configurations/tables/Tabledata'
// import FormModal from '../../components/userForm/modalForm/FormModal'
// import modalContent from './UserConfig'
// import CustomDropdown from '../../components/NewGroupForms/Drop Down Menu/CustomDropdown'
// import dropDownData from '../../components/NewGroupForms/Drop Down Menu/DropDown.json'
// import SearchableComp from '../../configurations/search/SearchableComp'
// import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'
// import TableComponent from '../../configurations/tables/TableComponent'



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getApiUrl } from '../../services/getApi/GetApi';
import { Button1, USERS_API } from './UserConfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import FormModal from '../../components/userForm/modalForm/FormModal';
import modalContent from './UserConfig';
import SearchableComp from '../../configurations/search/SearchableComp';
import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'
import TableComponent from '../../configurations/tables/TableComponent';
import EDropComponent from '../../components/NewGroupForms/EmptyDropDown/EDropComponent';
import { drpdwncontent, tabledata } from './UserConfig';



const UserComponent = () => {
  const [data, setData] = useState([]);
  
  const [searchData, setSearchData] = useState([]);
  
 
  const fetchData = async () => {
    try {
      const response = await axios.get(getApiUrl(USERS_API));
      // const response = await axios.get("http://192.168.0.134:8080/api/getAll/User/getall");
      console.log('API Response:', response.data);
      setData(response.data);
      setSearchData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };

  
 

  
  useEffect(() => {
    fetchData();
    
  }, []);
  
  const searchFun = (recsearchdata) =>{
    setSearchData(recsearchdata)
    
  }
  console.log("99999999999999999999")
  console.log(searchData)
 
  

  return (
    <div className='w-full'>
      <div className='btn-container mb-1 flex justify-end mr-16 my-8'>
        <FormModal Configs={modalContent} />
      </div>

      <form className="bg-white border w-[88%] mx-20 border-gray-300 shadow-sm rounded-md">
      <div className='bg-gray-100 h-[9vh] flex items-center'>
      <p className='mx-6 text-xs font-normal text-gray-700'>Showing </p>

<div className='w-[60%] '>
  <EDropComponent configs={drpdwncontent} />
</div>

<div className='ml-auto my-10'>
  <SearchableComp SearchConfig={SearchInputConfig}  data={data} searchFunrec={searchFun}/>
</div>
</div>
        <div className="table-container h-[48vh]  overflow-y-auto">
          <TableComponent tableConfig={tabledata} data={searchData}   />
          
        </div>
      </form>
    </div>
  );
};

export default UserComponent;
