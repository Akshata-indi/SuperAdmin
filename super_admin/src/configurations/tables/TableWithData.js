import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import {tableContent} from './Tabledata'
import DynamicTable1 from './DynamicTable1';
import TableComponent from './TableComponent'
import ColumnContent from '../../configurations/tables/ColumnContent.json'
// import { tableContent } from '../../pages/userContent/UserConfig';
import Table from './Table';


const TableWithData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        console.log('API Response:', jsonData);
        setData(jsonData);
        // console.log(jsonData)
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    setIsLoading(false)
    
  }, []);

  return (
    <div>
        <h1>Table with Data</h1>
      {isLoading ? (
        <Skeleton count={10}/>
      ) : (
        <Table tableConfig={tableContent} data1={data}/>
      )}
      
    </div>
  )
}

export default TableWithData