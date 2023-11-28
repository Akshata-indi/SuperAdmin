import React from "react";
import { DASHBOARD_ICONBAR_LINKS } from "./IconConfig";
import { NavLink } from "react-router-dom";
import LogoConfig from '../../ui-configs/logo/LogoConfig'

const IconbarComponent = () => {

  const activeLink = "text-[#3e63dd] rounded-md bg-[#E6EDFE]";
  const normalLink = "text-gray-300";

  return (
    <div className="w-12  h-64 flex flex-col items-center justify-between  mt-1">
      <LogoConfig />
      <ul className=" mt-8 w-12 h-72 flex flex-col justify-between items-center   ">
      {DASHBOARD_ICONBAR_LINKS.links.map((links) => (
          <NavLink
            to={links.path}
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          ><li className=" cursor-pointer hover:bg-gray-100 hover:rounded-md "> {links.icon}</li>
          </NavLink>
       
      ))}
      
      </ul>
    </div>
  );
};

export default IconbarComponent;

