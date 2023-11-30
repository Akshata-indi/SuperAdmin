import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getApiUrl } from '../../api/getApi/GetApi'
import { USERS_API } from './UserConfig'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Table from '../../configurations/tables/Table'
import { tableContent } from './UserConfig'


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

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {/* {
          isLoading ?
            <Skeleton count={10} height={20} /> 
            :
            // data.map(user => (
            //   <li key={user.id}>{user.name}</li>))
            <Table tableConfig={tableContent} data1={data}/>
        } */}
      </ul>

    </div>
  );
}

export default UserComponent