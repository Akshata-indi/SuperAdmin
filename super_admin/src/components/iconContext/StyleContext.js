// StyleContext.js
import React, { createContext, useContext } from 'react';

const StyleContext = createContext();

const useStyleContext = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyleContext must be used within a StyleProvider');
  }
  return context;
};

export  { StyleContext, useStyleContext };
