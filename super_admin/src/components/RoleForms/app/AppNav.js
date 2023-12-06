import React from 'react'
import CustomDropdown from '../../NewGroupForms/Drop Down Menu/CustomDropdown'
import dropDownData from '../../NewGroupForms/Drop Down Menu/DropDown.json'
import TableComponent from '../../../configurations/tables/TableComponent'
import columnData from './columnData.json'

const AppNav = () => {
  return (
    <div>
        <div className='dropdown-container pt-4 pl-8'>
        <CustomDropdown items={dropDownData} />
        </div>

        <div className='pt-10'>
        {/* <TableComponent tableConfig={columnData} /> */}
        </div>
    </div>
  )
}

export default AppNav