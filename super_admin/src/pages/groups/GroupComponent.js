import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getApiUrl } from '../../api/getApi/GetApi'
import { GROUP_API } from './GroupConfig'
import 'react-loading-skeleton/dist/skeleton.css'
import { tableContent } from '../../components/GroupForm/Body/roleData'
import Fmodal from '../../configurations/form_modal/Fmodal'
import roleModal from '../../components/GroupForm/Body/roleModal.json'
import rolemodalData from '../../components/GroupForm/Body/rolemodalData.json'
import CustomDropdown from '../../components/NewGroupForms/Drop Down Menu/CustomDropdown'
import dropDownData from '../../components/NewGroupForms/Drop Down Menu/DropDown.json'
import SearchableComp from '../../configurations/search/SearchableComp'
import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'
import TableComponent from '../../configurations/tables/TableComponent'


const GroupComponent = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.0.144:8080/api/getAll/Group/getall");
      console.log('API Response123:', response.data);

      setData(response.data);
    } catch (error) {
      console.error(`Error fetching ${GROUP_API} data:`, error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setIsLoading(false)
    }, 2000);

  }, []);

  // const role = [
  //   { roleId:101, roleName: 'Role 1', description: 'Description 1',  },
  //   { roleId:102, roleName: 'Role 2', description: 'Description 2',  },
  //   { roleId:103, roleName: 'Role 3', description: 'Description 3',  },
  //   { roleId:104, roleName: 'Role 4', description: 'Description 4',  },
  //   { roleId:105, roleName: 'Role 5', description: 'Description 5',  },
  //   { roleId:106, roleName: 'Role 6', description: 'Description 6',  },
  //   { roleId:107, roleName: 'Role 7', description: 'Description 7',  },
  //   { roleId:108, roleName: 'Role 8', description: 'Description 8',  },
  // ];
  // console.log(role)

  return (
    <div >

      <div className='btn-container mb-2 mx-8 flex justify-end mr-20 my-12'>
        <Fmodal configs={roleModal} iconfig={rolemodalData} />
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



