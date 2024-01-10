import React, { useEffect, useState } from 'react'
import axios from 'axios'
// eslint-disable-next-line
import { GROUP_API, tableContent, groupModal, groupModalData, dropDownData, SearchInputConfig } from './GroupConfig'

import { getApiUrl } from '../../services/getApi/GetApi'


import 'react-loading-skeleton/dist/skeleton.css'


import { tableContent } from '../roles/RoleConfig'
import Fmodal from '../../configurations/form_modal/Fmodal'
import roleModal from '../../components/groupForm/groupModal.json'
import rolemodalData from '../../components/groupForm/groupmenuData.json'

import CustomDropdown from '../../components/NewGroupForms/Drop Down Menu/CustomDropdown'
import SearchableComp from '../../configurations/search/SearchableComp'
import TableComponent from '../../configurations/tables/TableComponent'
import Fmodal from '../../configurations/form_modal/Fmodal'

// import { tableContent } from '../../components/GroupForm/Body/GroupData'
// import groupModal from '../../components/GroupForm/Body/groupModal.json'`
// import groupModalData from '../../components/GroupForm/Body/groupmodalData.json'
// import dropDownData from '../../components/NewGroupForms/Drop Down Menu/DropDown.json'
// import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'



const GroupComponent = () => {
  const [data, setData] = useState([])
  // eslint-disable-next-line
  // const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.0.104:8081/api/getAll/Group/getall");
      console.log('API Response123:', response.data);

      setData(response.data);
    } catch (error) {
      console.error(`Error fetching ${GROUP_API} data:`, error);
    }
  };


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div >

      <div className='btn-container mb-2 mx-8 flex justify-end mr-20 my-12'>
        <Fmodal configs={groupModal} iconfig={groupModalData} handleSubmit={fetchData} />
      </div>

      <form className="bg-white border w-[90%] mx-4 border-gray-300 shadow-sm rounded h-[60vh] overflow-y-auto">
        <div className='bg-gray-100 shadow-sm h-[8vh]'>
          <div className='flex justify-start'>
            <CustomDropdown items={dropDownData} />
            <div className='flex justify-end ml-24 '>
              {/* <SearchableComp SearchConfig={SearchInputConfig} /> */}
            </div>
          </div>
        </div>
        <div className=" ">
          <TableComponent tableConfig={tableContent} data={data} />
        </div>
      </form>
    </div>
  )
}

export default GroupComponent



