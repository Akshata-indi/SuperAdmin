import React from 'react';
import InputComponent from './InputComponent';
import InputStyle from './InputStyle';


const Input = ({ config }) => {
  const handleChange = (e) => {
    // Implement your logic to handle input changes here
    console.log(e.target.value);
  };

  return (
    <div>
      {config.map((input, index) => (
        <InputComponent
          key={index}
          label={input.label}
          value={''} // Provide appropriate value based on your state or props
          onChange={handleChange} // Pass your change handler function
          textcss={InputStyle[input.textcss]}
        />
      ))}
    </div>
  );
};

export default Input;
