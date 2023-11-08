import React from 'react';
import { DASHBOARD_SIDEBAR_LINKS } from '../components/userForms/UserFormConfig';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="bg-white basis-[4%]">
      <div className='my-4 mx-4'>
        <ul>
          {DASHBOARD_SIDEBAR_LINKS.links.map((links) => (
            <li key={links.key}>
              <Link to={links.path}>
                {links.icon}
                {links.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
