import React from 'react'
import Menu from './Menu';
import { Link } from 'react-router-dom';
import Style from './Style';

const DynamicSidebar = () => {   
  return (
   
      // <div className=' basis-[10%] h-[100vh] border border-gray-600 '>
    <div className='mx-4 my-6'>
       
       <nav>
          <ul>
            {Menu.submenus.map((submenu, index) => (
              <li key={index}>
                <Link to={submenu.url} className={Style[submenu.cssClass]}>
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

export default DynamicSidebar