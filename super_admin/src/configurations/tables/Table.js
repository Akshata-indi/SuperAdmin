import React from 'react'
import DynamicTable1 from './DynamicTable1'

const Table = ({tableConfig, data1}) => {
 
        return (
   
      <div>
      <DynamicTable1 config= {tableConfig} demo={data1}/>
    </div>
  
    
  )
}

export default Table