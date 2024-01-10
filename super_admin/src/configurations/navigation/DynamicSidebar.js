import React from 'react'
// import Menu from './Menu.json'
import { NavLink } from 'react-router-dom';
import Style from './Style';

const DynamicSidebar = ({ menuConfig, onGroupSelect }) => {
  const handleGroupClick = (group) => {
    onGroupSelect(group); // Trigger the onGroupSelect function with the selected group
  };
  return (

    // <div className=' basis-[10%] h-[100vh] border border-gray-600 '>
    <div className='mx-4 my-6'>

      <nav>
        <ul>
          {menuConfig.map((submenu, index) => (
            <li key={index} onClick={() => handleGroupClick(submenu)}>
              <NavLink to={submenu.path} className={Style[submenu.cssClass]}>
                {submenu.label}
              </NavLink>
            </li>
          ))}
        </ul>

      </nav>
      {/* </div> */}
    </div>


  );
}

export default DynamicSidebar