import React from 'react'
import Menu from './Menu';
import { Link } from 'react-router-dom';
import MenuStyle from './MenuStyle'
import menuData from './menuData';


const MenuComponent = () => {   
  return (
   
      // <div className=' basis-[10%] h-[100vh] border border-gray-600 '>
    <div className='mx-4 my-6'>
       
       <nav>
          <ul>
            {menuData.submenus.map((submenu, index) => (
              <li key={index}>
                <Link to={submenu.url} className={MenuStyle[submenu.cssClass]}>
                  {submenu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
         {/* </div> */}
        </div>
    
    
  );
}

export default MenuComponent