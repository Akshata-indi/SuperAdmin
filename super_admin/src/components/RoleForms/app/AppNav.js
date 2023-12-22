import React from 'react'
import EDropComponent from '../../NewGroupForms/EmptyDropDown/EDropComponent'
import appDropdown from './appDropdown.json'
import Modal from '../../../ui-configs/modal/Modal'
import appModal from './appModal.json'
// import CustomDropdown from '../../../ui-configs/Dropdown/CustomDropdown'
// import dropDownData from './dropDownData.json'
// import TableComponent from '../../../configurations/tables/TableComponent'
// import columnData from './columnData.json'

const AppNav = () => {
  return (
    <div>
        <div className='dropdown-container pt-4 pl-8 flex'>
          {/* <CustomDropdown items={dropDownData} /> */}
          <EDropComponent configs={appDropdown.config} />
          <Modal Config={appModal} />
        </div>

        {/* <div className='pt-10'>
          <TableComponent tableConfig={columnData} data={role}/>
        </div> */}
    </div>
  )
}

export default AppNav