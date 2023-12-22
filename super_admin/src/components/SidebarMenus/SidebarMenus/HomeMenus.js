import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../sidebarConfigs/HomemenuConfig";
import { useStyleContext } from "../menusContext/StyleContext";

const HomeMenus = () => {
  const { activeLink, normalLink, button } = useStyleContext();

// const activeLink = "rounded-md  text-left text-[13px] py-2  bg-[#E6E8EB] ";
// const normalLink = "rounded-md  w-60 text-left py-2 my-1 hover:bg-gray-100 text-[13px] ";
  
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

export default HomeMenus;
