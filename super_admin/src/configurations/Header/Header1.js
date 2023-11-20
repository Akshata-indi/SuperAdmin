// Header1.js
import React from 'react';

const Header1 = ({ componentMap, jsonData }) => {
  const { componentNames } = jsonData;

  return (
    <div className="flex justify-between p-4 bg-gray-200">
      {componentNames.map((componentName, index) => {
        const Component = componentMap[componentName];
        return Component ? <Component key={index} /> : null;
      })}
    </div>
  );
};

export default Header1;
