import React from 'react'
import ColumnContent from './ColumnContent.json'
import TableComponent from './TableComponent'
import { tableContent } from './Tabledata'
// import Example from './Example.json'


const Render = () => {
  return (
    <div>

<TableComponent tableConfig={tableContent} />
    </div>
  )
}

export default Render