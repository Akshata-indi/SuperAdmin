import React, {useEffect, useState } from 'react'
import TableComponent from '../../../configurations/tables/TableComponent';
import columnData from './columnData.json'
import axios from 'axios'
import { getApiUrl } from '../../../services/getApi/GetApi'
import { USERS_API } from '../../../pages/userContent/UserConfig'
import EDropComponent from '../../NewGroupForms/EmptyDropDown/EDropComponent';
import userDropdown from './userDropdown.json'

import Modal from '../../../ui-configs/modal/Modal'
import userModal from './userModal.json'

import { buttonData } from '../Body/buttonData'
import ButtonComponent from '../../../ui-configs/Buttons/ButtonComponent'


const UserNav = () => {

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
    
      fetchData();
      setIsLoading(false)
    
   
  }, []);

    // const role = [
    //   { name: 'John Doe', email: 'aa@gmail.com',  },
    //   { name: 'Jane Smith', email: 'aa@gmail.com' },
    //   {  name: 'Bob Johnson',  email: 'aa@gmail.com'},
    //   { name: 'Bob Johnson',  email: 'aa@gmail.com'},
    //   {  name: 'Bob Johnson', email: 'aa@gmail.com' },
    // ];

      console.log('role:',data)
    //   console.log('columnData:',columnData)

  return (
    <div>
        <div className='dropdown-container pt-2 pl-8 flex'>
          {/* <CustomDropdown items={dropDownData} /> */}
          <EDropComponent configs={userDropdown.config} />
          <ButtonComponent configs={buttonData} />
        </div>

        <div className='table-container h-[35vh] pt-4 overflow-y-auto'>
          <TableComponent tableConfig={columnData} data={data}/>
        </div>
    </div>
  )
}

export default UserNav;