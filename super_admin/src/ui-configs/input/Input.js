import React, { useState } from 'react';
import axios from 'axios';
import InputComponent from './InputComponent';
import InputStyle from './InputStyle';

const Input = ({ config }) => {
  const [inputValues, setInputValues] = useState([]);

  const handleChange = (e, label) => {
    setInputValues({
      ...inputValues,
      [label]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/inputData', inputValues);
      console.log('Data sent:', response.data);
      // Optionally, you can handle success here
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can handle errors here
    }
  };

  return (
    <div>
      {config.map((input, index) => (
        <InputComponent
          key={index}
          label={input.label}
          value={inputValues[input.label] || ''}
          onChange={(e) => handleChange(e, input.label)}
          textcss={InputStyle[input.textcss]}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
