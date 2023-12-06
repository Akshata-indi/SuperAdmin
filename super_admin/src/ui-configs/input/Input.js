import React from 'react'

import DynamicInput from './DynamicInput'

export const Input = ({ inputConfigs }) => {
  return (
    <div>

      <DynamicInput config={inputConfigs} />
    </div>
  );
};

export default Input;
