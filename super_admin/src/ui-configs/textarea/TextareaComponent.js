import React from 'react';

const TextareaComponent = ({ label, value, onChange, textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea 
        value={value} 
        onChange={onChange}
        className={textcss} 
      />
    </div>
  );
};

export default TextareaComponent;
