import React from 'react';
import Menu from './Menu';

const MenuComponent = ({configs}) => {
  return (
    <div>
     <Menu config={configs}/>
    </div>
  );
};

export default MenuComponent;
