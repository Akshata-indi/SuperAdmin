// src/components/DateComponent.js
import React from 'react';

const DateComponent = ({ label, value, onChange, datecss }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={datecss}
      />
    </div>
  );
};

export default DateComponent;
