import React from 'react'
import FormComponent from './FormComponent';
import formData from './formData.json'

const Form = () => {
  return (
    <div>
        
      <h1>Form components</h1>
        <FormComponent config={formData} />
    
    </div>
  )
  }

export default Form;

