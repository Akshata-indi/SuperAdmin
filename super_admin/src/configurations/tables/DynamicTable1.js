import React from 'react'
import TableStyle from './TableStyle'

const DynamicTable1 = ({config, demo}) => {
  // if (!config || !data) {
  //   return null; // or display a loading/error message as needed
  // }

  console.log('Received config:', config);
  console.log('Received data:', demo);


  return (
    <div>
        <table className=''>
      <thead>
        <tr>
          {config.map((column) => (
            <th key={column.name} className={TableStyle[column.cssClass]}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {demo.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {config.map((column) => (
              <td key={column.name} className={TableStyle[column.cssClass]}>
                {column.dataType === 'number'
                  ? parseFloat(row[column.name]).toFixed()
                  : row[column.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default DynamicTable1