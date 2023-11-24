import React from 'react';
import ButtonComponent from './ButtonComponent';

const Button = ({ configs }) => {
  return (
    <div>
      {configs.map(({ name, label, type, buttoncss }) => (
        <ButtonComponent
          key={name}
          name={name}
          label={label}
          type={type}
          buttoncss={buttoncss}
        />
      ))}
    </div>
  );
};

export default Button;
