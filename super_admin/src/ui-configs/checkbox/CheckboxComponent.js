import React from 'react';
import CheckboxStyles from './CheckboxStyle';

const CheckboxComponent = ({ CheckboxConfig }) => {
  return (
    <div>
      {CheckboxConfig.map((element, index) => {
        return (
          <div key={index}>
            <input
              type='checkbox'
              id={element.label}
              name={element.label}
              value={element.value}
              className={CheckboxStyles[element.css]}
              defaultChecked={element.value} 
            />

            <label className={CheckboxStyles[element.css]}>{element.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxComponent;