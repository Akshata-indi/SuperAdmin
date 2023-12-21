import React from 'react'
import ReadFormModal from './ReadFormModal'
// import modalData from '../../ui-configs/Modal/modalData.json'

const Fmodal = ({configs,iconfig}) => {
  return (
    <div>
        <ReadFormModal config={configs} inputconfig={iconfig}/>
    </div>
  )
}
export default Fmodal