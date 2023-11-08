import React from 'react'
import FormComponent from './FormComponent';
import formData from './formData.json'

const Form = () => {
  return (
    <div>
        
      <h1>Form</h1>
      <FormComponent config={formData} />
    
    </div>
  )
}

export default Form;
