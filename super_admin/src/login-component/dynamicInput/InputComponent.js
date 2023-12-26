import React from 'react';
import InputStyle from './InputStyle';

const InputComponent = ({ config, formik }) => {
  return (
    <>
      {config.map((input, index) => (
        <div key={index}>
          <input
            type={input.type}
            id={input.label}
            name={input.label}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[input.label]}
            placeholder={input.placeholder || `Enter ${input.label}`}
            className={InputStyle[input.inputcss]}
          />
          {(input.formik) && formik.touched[input.label] && formik.errors[input.label] && (
            <div className="text-red-500">{formik.errors[input.label]}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default InputComponent;