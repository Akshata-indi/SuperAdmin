// StyleProvider.js
import React, { createContext, useState } from 'react';
import { StyleContext } from './StyleContext';

const StyleProvider = ({ children }) => {
  const [commonStyles, setCommonStyles] = useState({
    activeLink: "text-[#3e63dd] rounded-md bg-[#E6EDFE]",
    normalLink: "text-gray-300 hover:bg-gray-100 hover:rounded-md",
    
  });

  return (
    <StyleContext.Provider value={commonStyles}>
      {children}
    </StyleContext.Provider>
  );
};

export default StyleProvider;
