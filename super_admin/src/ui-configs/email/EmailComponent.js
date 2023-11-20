import React from 'react';

const EmailComponent = ({ label, value, onChange, textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="email"
        value={value}
        onChange={onChange}
        className={textcss}
        />
    </div>
  );
};

export default EmailComponent;
