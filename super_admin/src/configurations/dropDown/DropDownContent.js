import React, { useState } from 'react';
import DropDown from './DropDown';
import Content from './Content.json'

const DropDownContent = () => {
 

  const [selectedOption, setSelectedOption] = useState('all');

  const handleSelect = (selectedValue) => {
    setSelectedOption(selectedValue);
    
  };

  return (
    <div>
      
      <DropDown options={Content} defaultValue={selectedOption} onSelect={handleSelect} />
    </div>
  );
};

export default DropDownContent;
