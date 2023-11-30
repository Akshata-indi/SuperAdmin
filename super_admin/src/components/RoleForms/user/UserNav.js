import React from 'react'
import TableComponent from '../../../configurations/tables/TableComponent';
import columnData from './columnData.json'

const UserNav = () => {
  return (
    <div>
        <div className='pt-10'>
            <TableComponent tableConfig={columnData} />
        </div>
    </div>
  )
}

export default UserNav;