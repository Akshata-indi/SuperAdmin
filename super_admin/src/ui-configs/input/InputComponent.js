
import React from 'react';


const InputComponent = ({ label, value, onChange, textcss }) => {
   
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

export default InputComponent;
