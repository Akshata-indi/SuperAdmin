import React, { useState } from 'react';
import  formData from "./formData.json"
import DateComponent from './date/DateComponent';
import DateStyle from './date/DateStyle';
import TextComponent from './text/TextComponent';
import TextStyle from './text/TextStyle';

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
              <TextComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "email" && (
              <TextComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "password" && (
              <DateComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                datecss={DateStyle[field.datecss]}
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
          </div>
        ))}
      </form>
    );
  };
  
  export default FormComponent;
  
  