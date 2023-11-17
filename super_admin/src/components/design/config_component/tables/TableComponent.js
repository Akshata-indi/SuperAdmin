import React from 'react';
import DynamicTable from './DynamicTable';

const data = [
  { id: 1, name: 'John Doe', age: 30 , salary: 500000000, address: 'Hubli Dharwad sirsi '},
  { id: 2, name: 'Jane Smith', age: 25, salary: 50000 },
  { id: 3, name: 'Bob Johnson', age: 40, salary: 50000 },
  { id: 3, name: 'Bob Johnson', age: 40 , salary: 50000 },
  { id: 3, name: 'Bob Johnson hgghh', age: 40, salary: 50000 },
];




function TableComponent() {
  return (
    <div>
      
      <DynamicTable data={data}  />
    </div>
  );
}

export default TableComponent; 