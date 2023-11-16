import React from 'react';

const PasswordComponent = ({ label, value, onChange,textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="password" 
        value={value} 
        onChange={onChange}
        className={textcss}
     />
    </div>
  );
};

export default PasswordComponent;
