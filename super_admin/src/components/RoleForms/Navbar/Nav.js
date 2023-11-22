
import React from 'react';
import NavComponent from './NavComponent';

const Nav = ({configs}) => {
  return (
    <div>
      <NavComponent config={configs}/>
    </div>
  );
};

export default Nav;
