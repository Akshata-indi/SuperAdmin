import React from 'react'
import CheckboxComponent from './CheckboxComponent'

const Checkbox = ({CheckboxConfig}) => {
  return (
    <>
    <div>
        <CheckboxComponent CheckboxConfig = {CheckboxConfig}/>
    </div>
    </>
  )
}

export default Checkbox