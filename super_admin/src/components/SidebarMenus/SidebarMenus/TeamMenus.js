import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../sidebarConfigs/TeamMenusConfig";
import { useStyleContext } from "../menusContext/StyleContext";

const TeamMeanus = () => {
  const { activeLink, normalLink, button } = useStyleContext();

// const activeLink = "text-black mt-2 rounded-md bg-[#E6E8EB] ";
// const normalLink = "mt-2 ";
  
  return (
    <>
     <div className='  bg-red-500    '>
      
        <ul className="   w-[281px]  border-r   ">
          {DASHBOARD_SIDEBAR_LINKS.default.submenus.map((items) => (
            
            <NavLink to={items.path} className={({isActive}) => 
              isActive ? activeLink : normalLink
             }>
              <button className={button}>{items.label}</button>
            </NavLink >
          ))}
        </ul>
      </div>
          <Outlet />
    </>
  );
};

export default TeamMeanus;
