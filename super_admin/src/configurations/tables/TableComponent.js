import React from 'react';
import DynamicTable from './DynamicTable';



function TableComponent({tableConfig, data}) {



  return (
    <div >
      
      <DynamicTable config= {tableConfig} data={data}  />
    </div>
  );
}

export default TableComponent; 