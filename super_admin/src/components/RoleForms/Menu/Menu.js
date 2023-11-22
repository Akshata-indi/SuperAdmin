import React from 'react';
import MenuComponent from './MenuComponent';

const Menu = ({configs}) => {
  return (
    <div>
     <MenuComponent config={configs}/>
    </div>
  );
};

export default Menu;