// Button.js

import React from 'react';
import ButtonComponent from './ButtonComponent'; 
import ButtonConfig from './ButtonConfig.json';

const Button = ({ onClick }) => {
  return (
    <div>
      {ButtonConfig.map(({ name, label, type, buttoncss }) => (
        <ButtonComponent
          key={name}
          name={name}
          label={label}
          type={type}
          buttoncss={buttoncss} // Use the correct prop name
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Button;
