import React from 'react'
import InputComponent from './InputComponent'
import { RegisterInputConfig } from '../register/RegisterConfig'

const Input = ({ config, formik }) => {
  return (
    <>
    <div>
        <InputComponent  config = {config } formik = {formik} />
    </div>
    </>
  )
}

export default Input