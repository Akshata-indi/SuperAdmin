

import React from 'react';
import DynamicTable from './DynamicTable';
import TableStyle from './TableStyle';


function TableComponent({ tableConfig, data }) {
  console.log('Data in TableComponent:', data);
  return (
    <div className={TableStyle.centeredTable}> {/* Center the table */}
    <DynamicTable config={tableConfig} data={data} />
  </div>
  );
}

export default TableComponent;
