import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getApiUrl } from '../../api/getApi/GetApi'
import { USERS_API } from './UserConfig'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import Table from '../../configurations/tables/Table'
import  {tableContent}  from  '../../configurations/tables/Tabledata'
import FormModal from '../../components/userForm/modalForm/FormModal'
import modalContent from './UserConfig'
import CustomDropdown from '../../components/NewGroupForms/Drop Down Menu/CustomDropdown'
import dropDownData from '../../components/NewGroupForms/Drop Down Menu/DropDown.json'
import SearchableComp from '../../configurations/search/SearchableComp'
import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'
import TableComponent from '../../configurations/tables/TableComponent'




const UserComponent = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(getApiUrl(USERS_API));
      console.log('API Response:', response.data);

      setData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setIsLoading(false)
    }, 2000);
   
  }, []);

  console.log("oooooooooooooooo")
  console.log(data)
  return (
    <div >

      <div className='btn-container mb-2 mx-8 flex justify-end mr-20 my-12'>
        <FormModal Configs={modalContent} />
      </div>

      <form className="bg-white border w-[90%] mx-4 border-gray-300 shadow-sm rounded">
        <div className=' bg-gray-100 shadow-sm h-[8vh]   '>

          <div className='flex justify-start '>

          <CustomDropdown items={dropDownData} />

          <div className='flex justify-end  ml-24 '>

            <SearchableComp SearchConfig={SearchInputConfig} />
          </div> 
        </div>

        </div>
        <div className=" ">
          <TableComponent tableConfig={tableContent} data={data}/>



         
        </div>
      </form >



    </div>
  )
}
  


export default UserComponent



      // {/* <ul>
      //   {
      //     isLoading ?
      //     <Skeleton count={10} height={20} /> 
      //     :
      //     <Table tableConfig={tableContent} data1={data}/>
      //     // data.map(user => (
      //       //   <li key={user.id}>{user.name}</li>))
      //   }
      // </ul> */}
      //     {/* <UserFormBody data={data}/> */}
    