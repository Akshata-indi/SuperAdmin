import React from 'react';
import Nav from './Nav';

const NavComponent = ({configs}) => {
  return (
    <div>
      <Nav config={configs}/>
    </div>
  );
};

export default NavComponent;
