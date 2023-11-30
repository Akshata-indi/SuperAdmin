import React from 'react';
import InputStyle from './InputStyle';

const DynamicInput = ({ config }) => {
  return (
    <div>
      {config.map((input, index) => (
        <div key={index} >
          {/* <label htmlFor={input.label} >
            {input.label}
          </label> */}
          <input
            type="text"
            id={input.label}
            name={input.label}
            className={InputStyle[input.inputcss]}
            placeholder={input.placeholder || `Enter ${input.label}`}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicInput;
