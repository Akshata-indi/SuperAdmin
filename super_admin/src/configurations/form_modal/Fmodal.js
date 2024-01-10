import React from 'react'
import ReadFormModal from './ReadFormModal'
// import modalData from '../../ui-configs/Modal/modalData.json'

const Fmodal = ({configs,iconfig,handleSubmit}) => {
  return (
    <div>
        <ReadFormModal config={configs} inputconfig={iconfig} handleSubmit={handleSubmit}/>
    </div>
  )
}
export default Fmodal