import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getApiUrl } from '../../api/getApi/GetApi'
import { USERS_API } from './UserConfig'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TableComponent from '../../configurations/tables/TableComponent'
import { tableContent } from './UserConfig'
import TableWithData from '../../configurations/tables/TableWithData'

const TrialComponent = () => {
    const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(getApiUrl(USERS_API));
      // console.log(response.data)
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
        {/* <TableComponent tableConfig={tableContent} /> */}

        <ul>
        {isLoading ? (
          <Skeleton  count={10}/>
        ) : (
            // <TableWithData/>
          data.map((user) => (
            
            <li key={user.id}> {/* Assuming 'id' is a unique identifier */}
              {tableContent.map((column) => (
                <span key={column.name}>
                  {user[column.name]}
                  {/* Optionally add a separator between columns, e.g., `,` */}
                </span>
                
              ))}
            </li>
            
          )
          )
        )}
      </ul>

    </div>
  )
}

export default TrialComponent