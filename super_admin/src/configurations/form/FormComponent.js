import React, { useState } from 'react';
import axios from 'axios';
import DateComponent from '../../ui-configs/date/DateComponent';
// import DateStyle from './date/DateStyle';
import TextComponent from '../../ui-configs/text/TextComponent';
import TextStyle from '../../ui-configs/text/TextStyle';
import CheckboxComponent from '../../ui-configs/checkbox/CheckboxComponent';
import EmailComponent from '../../ui-configs/email/EmailComponent';
import FileComponent from '../../ui-configs/file/FileComponent';
import OptionsComponent from '../../ui-configs/options/OptionsComponent';
import PasswordComponent from '../../ui-configs/password/PasswordComponent';
import RadioComponent from '../../ui-configs/radio_button/RadioComponent';
import TextareaComponent from '../../ui-configs/textarea/TextareaComponent';
import TimeComponent from '../../ui-configs/time/TimeComponent';

const FormComponent = ({ config }) => {
  const [values, setValues] = useState([]);
  
  
  const handleChange = (name, value) => {
    
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:3001/formData', values);
      console.log('Data sent:', response.data); 
    
    } catch (error) {
      console.error('Error:', error); 
      
    }
  };
  
    return (
      <form onSubmit={handleSubmit}>
        {config.map((field, index) => (
          <div key={index}>
            {field.type === "text" && (
              <TextComponent
                label={field.label}
                name={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]} // Access textStyle.textcss
              />
            )}
            {field.type === "date" && (
              <DateComponent
                label={field.label}
                name={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "email" && (
              <EmailComponent
                label={field.label}
                name={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "password" && (
              <PasswordComponent
                label={field.label}
                name={field.label}
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
                checked={config[field.label] || false}
                onChange={(e) => handleChange(field.label, e.target.checked)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'radio' && (
              <RadioComponent
                label={field.label}
                value={field.value}  // Replace 'value' with the correct property name from your config
                checked={config[field.label] === field.value}
                onChange={() => handleChange(field.label, field.value)}
                textcss={TextStyle[field.textcss]}
               />
            )}

            {field.type === 'options' && (
              <OptionsComponent
                label={field.label}
                value={config[field.label] || ''}
                options={field.options}  // Replace 'options' with the correct property name from your config
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}

            {field.type === 'time' && (
              <TimeComponent
                label={field.label}
                value={config[field.label] || ''}
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
                value={config[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}

              />
            )}
          </div>
        ))}
          <button type="submit">Submit</button>
    </form>
    );
  };
  
  export default FormComponent;
  
  