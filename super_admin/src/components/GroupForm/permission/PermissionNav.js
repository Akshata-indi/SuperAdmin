import React from 'react'
import TableComponent from '../../../configurations/tables/TableComponent';
import columnData from './columnData.json'
import PermissionsComponent from '../../NewGroupForms/Permissions/Permissions';
import permissionsData from '../../NewGroupForms/Permissions/PermissionsConfig.json';

const PermissionNav = () => {
  return (
    <div>
      <div className='pt-10'>
        {/* <TableComponent tableConfig={columnData} /> */}
        <PermissionsComponent items={permissionsData} />

      </div>
    </div>
  )
}

export default PermissionNav;
