import React, { useState } from 'react';
import { DASHBOARD_SIDEBAR_LINKS } from './IconbarConfig';
import { NavLink } from 'react-router-dom';
import IconbarStyle from './IconbarStyle';

const IconbarComponent = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (key) => {
    setActiveIcon(key === activeIcon ? null : key);
  };

  return (
    <div>
      <div className="bg-white w-20">
        <div className="my-4 mx-4">
          <ul>
            {DASHBOARD_SIDEBAR_LINKS.links.map((link) => (
              <li key={link.key}>
                <NavLink
                  to={link.path}
                  activeClassName={IconbarStyle.LogoStyle}
                  className={IconbarStyle.Style1}
                  onClick={() => handleIconClick(link.key)}
                >
                  <div
                    className={`${IconbarStyle.Style1} ${
                      activeIcon === link.key ? IconbarStyle.ActiveStyle : ''
                    }`}
                  >
                    {link.icon}
                  </div>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IconbarComponent;