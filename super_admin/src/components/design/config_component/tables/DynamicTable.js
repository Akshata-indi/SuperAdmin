import React from 'react';
import ColumnsConfig from './ColumnsConfig'; 
import TableStyle from './TableStyle.json'

function DynamicTable({ data }) {
  return (
    <table >
      <thead>
        <tr >
          {ColumnsConfig.map((column) => (
            <th key={column.name} className={TableStyle[column.cssClass]}>
              {column.label}               
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (      
          // <tr key={rowIndex} className={TableStyle.style3}>
          <tr key={rowIndex} >
            {ColumnsConfig.map((column) => (
              <td key={column.name} className={TableStyle[column.cssClass]}>
                {column.dataType === 'number' ? parseFloat(row[column.name]).toFixed() : row[column.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
