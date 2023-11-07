import React from 'react';
import FormComponent from './FormComponent'; // Import your configuration
import configForm from '../forms/configForm.json'


const Form = () => {
  return (
    <form className={FormComponent.form}>
      {configForm.map((field, index) => (
        <div className="mb-4" key={index}>
          <label className={FormComponent.label} htmlFor={field.label}>
            {field.label}
          </label>
          <input
            className={FormComponent.input}
            type={field.type}
            id={field.label}
            placeholder={`Enter your ${field.label}`}
          />
        </div>
      ))}

      <button className={FormComponent.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
