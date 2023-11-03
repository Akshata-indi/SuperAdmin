import React from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from '../components/userForms/UserFormConfig'

const Sidebar = () => {
  return (
    <div className="bg-white  basis-[4%]">
    
    <div className='my-4 mx-4'>
          {/* <h2 className="text-2xl font-bold">Sidebar Links</h2> */}
          <ul>
            {DASHBOARD_SIDEBAR_LINKS.links.map((links) => (
              <li key={links.key}>
                <a href={links.path}>
                  {links.icon}
                  {links.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
  </div>
  )
}

export default Sidebar