import React from 'react'
import ReadFormModal from './ReadFormModal'
// import modalData from '../../ui-configs/Modal/modalData.json'

const Fmodal = ({configs}) => {
  return (
    <div>
        <ReadFormModal config={configs}/>
    </div>
  )
}
export default Fmodal