import React from 'react'
import ColumnContent from './ColumnContent.json'
import TableComponent from './TableComponent'
// import Example from './Example.json'


const Render = () => {
  return (
    <div>

<TableComponent tableConfig={ColumnContent} />
    </div>
  )
}

export default Render