import React, { useEffect, useState } from 'react'
import TableComponent from '../../../configurations/tables/TableComponent';
import columnData from './columnData.json'
// import CustomDropdown from '../../NewGroupForms/Drop Down Menu/CustomDropdown';
// import dropDownData from '../../NewGroupForms/Drop Down Menu/DropDown.json'
import axios from 'axios'
import { getApiUrl } from '../../../api/getApi/GetApi'
import { USERS_API } from '../../../pages/userContent/UserConfig'
import EDropComponent from '../../NewGroupForms/EmptyDropDown/EDropComponent';
import userDropdown from './userDropdown.json'
import Modal from '../../../ui-configs/modal/Modal'

import userModal from './userModal.json'

const UserNav = () => {

  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(getApiUrl(USERS_API));
  //     console.log('API Response:', response.data);

  //     setData(response.data);
  //   } catch (error) {
  //     console.error(`Error fetching ${USERS_API} data:`, error);
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchData();
  //     setIsLoading(false)
  //   }, 2000);

  // }, []);

  const role = [
    { name: 'John Doe', email: 'aa@gmail.com', },
    { name: 'Jane Smith', email: 'aa@gmail.com' },
    { name: 'Bob Johnson', email: 'aa@gmail.com' },
    { name: 'Bob Johnson', email: 'aa@gmail.com' },
    { name: 'Bob Johnson', email: 'aa@gmail.com' },
  ];

  console.log('role:', role)
  console.log('columnData:', columnData)

  return (
    <div>
      <div className='dropdown-container pt-4 pl-8 flex'>
        {/* <CustomDropdown items={dropDownData} /> */}
        <EDropComponent configs={userDropdown.config} />
        <Modal Config={userModal} />
      </div>

      <div className='pt-10'>
        <TableComponent tableConfig={columnData} data={role} />
      </div>
    </div>
  )
}

export default UserNav;