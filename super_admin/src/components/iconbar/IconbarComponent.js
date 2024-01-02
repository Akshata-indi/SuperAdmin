import React from "react";
import { DASHBOARD_ICONBAR_LINKS } from "./IconConfig";
import { NavLink } from "react-router-dom";
import LogoConfig from "../../ui-configs/logo/LogoConfig";

const IconbarComponent = () => {
  const activeLink = "text-[#3e63ed] rounded-md bg-black  ";
  const normalLink = "text-gray-300 hover:bg-gray-100 hover:rounded-md";

  return (
    <>
      <div className="flex justify-center mt-2 mb-4">
        <LogoConfig />
      </div>
      <div className="w-12  h-[645px] flex flex-col justify-between items-center ">
        <div>
          <ul >
            {DASHBOARD_ICONBAR_LINKS.links.map((links, index) => (
              <NavLink
                key={index}
                to={links.path}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <li className=" cursor-pointer my-3"> {links.icon}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="mb-5">
          <ul>
            {DASHBOARD_ICONBAR_LINKS.footerIcon.map((links, index) => (
              <NavLink
                key={index}
                to={links.path}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <li className=" cursor-pointer my-3  "> {links.icon}</li>
              </NavLink>
            ))}
          </ul>
                
        </div>
      </div>
    </>
  );
};

export default IconbarComponent;

