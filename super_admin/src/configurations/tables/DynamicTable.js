import React from 'react';

import TableStyle from './TableStyle'


function DynamicTable({ config, data }) {
  return (
    
    <table className='mx-4  ' >
      <thead className=''>
        <tr >
          {config.map((column) => (
            <th key={column.name} className={TableStyle[column.clmncss]}>
              {column.label}               
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (      
          // <tr key={rowIndex} className={TableStyle.style3}>
          <tr key={rowIndex}  >
            {config.map((column) => (
              <td key={column.name} className={TableStyle[column.cssClass]}>
                {column.dataType === 'number' ? parseFloat(row[column.name]).toFixed() : row[column.name]}
              </td>
            ))}
            <td className='border-b-2'>
            <button
                                                      // onClick={() => deleteUser(index)}
                 className="text-red-600 mx-20 px-8 py-1 border border-red-100 text-sm rounded-md bg-red-50 "
                >
          Archive
            </button>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
  
  );
}

export default DynamicTable;
