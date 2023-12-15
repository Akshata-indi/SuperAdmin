import React from 'react'
import Permissions from '../../NewGroupForms/Permissions/Permissions';
import permissionsData from './permissionData.json'
// import TableComponent from '../../../configurations/tables/TableComponent';
// import columnData from './columnData.json'

const PermissionNav = () => {
  return (
    <div>
        <div className='pt-10'>
        <Permissions items={permissionsData} />
        {/* <TableComponent tableConfig={columnData} /> */}
        </div>
    </div>
  )
}

export default PermissionNav;
