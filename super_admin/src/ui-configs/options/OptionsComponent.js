import React from 'react';

const OptionsComponent = ({ label, value, options, onChange, textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <select 
        value={value} 
        onChange={onChange}
        className={textcss}
        >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsComponent;
