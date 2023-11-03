
import React, { useState } from 'react';
import formConfig from './formConfig.json';

const FormComponent = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <div key={field.id} className="mb-4">
          <label className=" text-gray-700" htmlFor={field.id}>
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.id] || ''}
            onChange={handleInputChange}
            className="border-b-2 border-gray-200 px-3 py-2 mt-1"
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
