import React from 'react'
import EDropComponent from '../../NewGroupForms/EmptyDropDown/EDropComponent'
import appDropdown from './appDropdown.json'
import Modal from '../../../ui-configs/modal/Modal'
import appModal from './appModal.json'
// import CustomDropdown from '../../../ui-configs/Dropdown/CustomDropdown'
// import dropDownData from './dropDownData.json'
// import TableComponent from '../../../configurations/tables/TableComponent'
// import columnData from './columnData.json'
import Fmodal from '../../../configurations/form_modal/Fmodal'
// import modalData from '../../../ui-configs/Modal/modalData.json'
import Button from '../../../ui-configs/Buttons/Button'
import { buttonData } from '../Body/buttonData'
import ButtonComponent from '../../../ui-configs/Buttons/ButtonComponent'


const AppNav = () => {
  return (
    <div>
      <div className='dropdown-container pt-2 pl-8 flex'>
        {/* <CustomDropdown items={dropDownData} /> */}
        <EDropComponent configs={appDropdown.config} />
        <ButtonComponent configs={buttonData} />
      </div>

      {/* <div className='pt-10'>
          <TableComponent tableConfig={columnData} data={role}/>
        </div> */}
    </div>
  )
}

export default AppNav