// Button without the left & right icon,  left & right position not working we'll sort it out later
import React from 'react';
import { ButtonConfig, iconComponents } from './ButtonConfig'; // Importing iconComponents
import ButtonStyle from './ButtonStyle'; // Importing ButtonStyle

// to override the warnings of ButtonConfig you can use like this configs = ButtonConfig
const ButtonComponent = ({ configs }) => {
  const renderIcon = (icon) => {
    if (!icon || !icon.render) return null;

    const IconComponent = iconComponents[icon.component];
    return icon.render(); // Directly call the render function from ButtonConfig.js
  };

  return (
    <div>
      {configs.map(({ name, label, type, buttoncss, icon }) => (
        <button
          key={name}
          name={name}
          label={label}
          type={type}
          className={`${ButtonStyle[buttoncss]}`}
        >
          {renderIcon(icon)}
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonComponent; 
