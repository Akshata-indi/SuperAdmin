import React, { useState } from 'react';
import DateComponent from './DateComponent';
// import FormConfig from './FormConfig';
import Css from './Css.js'


const FormComponent = ({ config }) => {
  const [formData, setFormData] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  console.log("ppppppp")
  console.log(config.cssClass)

  return (
    <form>
      {config.map((field) => {
        const { type, name, label, cssClass} = field;
        return (
          <div key={name} >
            
            {type === 'date' && (
              <DateComponent
                label={label}
                value={formData[name] || ''}
                classname={Css[cssClass]}
                onChange={(e) => handleFieldChange(name, e.target.value)}
              />
            )}
          </div>
        );
      })}
      
    </form>
  );
};

export default FormComponent;
