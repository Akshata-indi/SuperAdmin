import React from 'react';

const TimeComponent = ({ label, value, onChange, textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="time" 
        value={value} 
        onChange={onChange} 
        className={textcss}
        />
    </div>
  );
};

export default TimeComponent;
