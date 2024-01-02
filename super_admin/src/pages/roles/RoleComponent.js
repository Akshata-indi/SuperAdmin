  import React, { useEffect, useState } from 'react'
  import axios from 'axios'

  import { getApiUrl } from '../../api/getApi/GetApi'
  import { ROLE_API } from './RoleConfig'
  import 'react-loading-skeleton/dist/skeleton.css'
  import  {tableContent}  from  '../../components/RoleForms/Body/roleData'
  import Fmodal from '../../configurations/form_modal/Fmodal'
  import roleModal from '../../components/RoleForms/Body/roleModal.json'
  import rolemodalData from '../../components/RoleForms/Body/rolemodalData.json'
  import CustomDropdown from '../../components/NewGroupForms/Drop Down Menu/CustomDropdown'
  import dropDownData from '../../components/NewGroupForms/Drop Down Menu/DropDown.json'
  import SearchableComp from '../../configurations/search/SearchableComp'
 import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'
  import TableComponent from '../../configurations/tables/TableComponent'


  
  // import { ROLE_API , tableContent, roleModal, rolemodalData, dropDownData ,SearchInputConfig} from './RoleConfig'

  // import { getApiUrl } from '../../services/getApi/GetApi'
  // import { ROLE_API } from './RoleConfig'

  // import 'react-loading-skeleton/dist/skeleton.css'
  // import CustomDropdown from '../../components/NewGroupForms/Drop Down Menu/CustomDropdown'
  // import SearchableComp from '../../configurations/search/SearchableComp'
  // import TableComponent from '../../configurations/tables/TableComponent'
  // import Fmodal from '../../configurations/form_modal/Fmodal'
  
  // import  {tableContent}  from  '../../components/RoleForms/Body/roleData'
  // import roleModal from '../../components/RoleForms/Body/roleModal.json'
  // import rolemodalData from '../../components/RoleForms/Body/rolemodalData.json'
  // import dropDownData from '../../components/NewGroupForms/Drop Down Menu/DropDown.json'
  // import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'

  const RoleComponent = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/roles");
        console.log('API Response123:', response.data);

        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${ROLE_API} data:`, error);
      }
    };
    console.log("sssssss")
    //get updated data of form
    // const handleSubmit = async (values) => {
    //   try {
    //     // Here, you can perform actions after the form submission, like fetching updated data
    //     const response = await axios.get("http://localhost:3001/roles");
    //     setData(response.data);
    //   } catch (error) {
    //     console.error(`Error fetching ${ROLE_API} data:`, error);
    //   }
    // };

    useEffect(() => {
      fetchData()
    }, [])
        
    return (
      <div >

        <div className='btn-container mb-2 mx-8 flex justify-end mr-20 my-12'>
          <Fmodal configs={roleModal} iconfig={rolemodalData} handleSubmit={fetchData}/>
        </div>

        <div className="bg-white border w-[90%] mx-4 border-gray-300 shadow-sm rounded h-[60vh] overflow-y-auto">
        <div className='bg-gray-100 shadow-sm h-[8vh]'>
        <div className='flex justify-start'>
          <CustomDropdown items={dropDownData} />
        <div className='flex justify-end ml-24 '>
          {/* <SearchableComp SearchConfig={SearchInputConfig} /> */}
        </div>
      </div>
    </div>
    <div className=" ">
      <TableComponent tableConfig={tableContent} data={data}/>
     
    </div>
  </div>
  </div>
    )
  }
    
  export default RoleComponent



      