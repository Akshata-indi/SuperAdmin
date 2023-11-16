import React, { useState } from 'react';
import  formData from "./formData.json"
import DateComponent from './date/DateComponent';
// import DateStyle from './date/DateStyle';
import TextComponent from './text/TextComponent';
import TextStyle from './text/TextStyle';
import CheckboxComponent from './checkbox/CheckboxComponent';
import EmailComponent from './email/EmailComponent';
import FileComponent from './file/FileComponent';
import OptionsComponent from './options/OptionsComponent';
import PasswordComponent from './password/PasswordComponent';
import RadioComponent from './radio_button/RadioComponent';
import TextareaComponent from './textarea/TextareaComponent';
import TimeComponent from './time/TimeComponent';


const FormComponent = () => {
    const [values, setValues] = useState({});
  
    const handleChange = (name, value) => {
      setValues({ ...values, [name]: value });
    };
  
    return (
      <form>
        {formData.map((field, index) => (
          <div key={index}>
            {field.type === "text" && (
              <TextComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]} // Access textStyle.textcss
              />
            )}
            {field.type === "date" && (
              <DateComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "email" && (
              <EmailComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "password" && (
              <PasswordComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "tel" && (
              <TextComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'checkbox' && (
              <CheckboxComponent
                label={field.label}
                checked={formData[field.label] || false}
                onChange={(e) => handleChange(field.label, e.target.checked)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'radio' && (
              <RadioComponent
                label={field.label}
                value={field.value}  // Replace 'value' with the correct property name from your formData
                checked={formData[field.label] === field.value}
                onChange={() => handleChange(field.label, field.value)}
                textcss={TextStyle[field.textcss]}
               />
            )}

            {field.type === 'options' && (
              <OptionsComponent
                label={field.label}
                value={formData[field.label] || ''}
                options={field.options}  // Replace 'options' with the correct property name from your formData
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}

            {field.type === 'time' && (
              <TimeComponent
                label={field.label}
                value={formData[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'file' && (
              <FileComponent
                label={field.label}
                onChange={(e) => handleChange(field.label, e.target.files[0])}
                textcss={TextStyle[field.textcss]}

              />
            )}
            {field.type === 'textarea' && (
              <TextareaComponent
                label={field.label}
                value={formData[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}

              />
            )}
          </div>
        ))}
      </form>
    );
  };
  
  export default FormComponent;
  
  