// StyleProvider.js
import React, { createContext, useState } from 'react';
import { StyleContext } from './StyleContext';

const StyleProvider = ({ children }) => {
  const [commonStyles, setCommonStyles] = useState({
     activeLink : "rounded-md  text-left text-[13px] py-2  bg-[#E6E8EB] ",
     normalLink : "rounded-md  w-60 text-left py-2 my-1 hover:bg-gray-100 text-[13px] ",
     button: "rounded-md  w-60 mx-4 text-left p-1.5 my-1 text-[13px]"
    
  });

  return (
    <StyleContext.Provider value={commonStyles}>
      {children}
    </StyleContext.Provider>
  );
};

export default StyleProvider;
