import React from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from './IconbarConfig'
import { Link } from 'react-router-dom';

const IconbarComponent = () => {
   
  return (
    <div>
        <div className="bg-white ">
      <div className='my-4 mx-4'>
        <ul>
          {DASHBOARD_SIDEBAR_LINKS.links.map((links) => (
            <li key={links.key}>
              <Link to={links.path}>
                <div className={links.style}>
                {links.icon}
                </div>
                {links.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default IconbarComponent