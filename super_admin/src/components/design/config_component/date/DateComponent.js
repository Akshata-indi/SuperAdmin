// src/components/DateComponent.js
import React from 'react';

const DateComponent = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="date" value={value} onChange={onChange} />
    </div>
  );
};

export default DateComponent;
