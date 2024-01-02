import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../sidebarConfigs/AppsmenuConfig";
import { useStyleContext } from "../menusContext/StyleContext";

const AppMenus = () => {
  const { activeLink, normalLink, button } = useStyleContext();
  
// const activeLink = "text-black mt-2 rounded-md bg-[#E6E8EB] ";
// const normalLink = "mt-2 ";
  
  return (
    <>
     {/* <div className=' h-[700px] bg-blue-500  mx-6  '> */}
      
        <ul className="   w-[281px]  border-r   ">
          {DASHBOARD_SIDEBAR_LINKS.default.submenus.map((items) => (
            
            <NavLink to={items.path} className={({isActive}) => 
              isActive ? activeLink : normalLink
             }>
              <button className={button}>{items.label}</button>
            </NavLink>
          ))}
        </ul>
      {/* </div> */}
          <Outlet />
    </>
  );
};

export default AppMenus;
