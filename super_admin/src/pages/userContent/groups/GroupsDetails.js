import React, {useEffect, useState } from 'react'
import TableComponent from '../../../configurations/tables/TableComponent';
import axios from 'axios'
import { getApiUrl } from '../../../services/getApi/GetApi'
import { USERS_API } from '../UserConfig'
import { appdata, groupdata, policydata, userdata } from '../InnerConfig';

const GroupsDetails = () => {

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

   

  return (
    <div>
        

        <div className='table-container h-[46vh] w-[100%] pt-4 mx-6 overflow-y-auto'>
          <TableComponent tableConfig={groupdata} data={data}/>
        </div>
    </div>
  )
}

export default GroupsDetails;