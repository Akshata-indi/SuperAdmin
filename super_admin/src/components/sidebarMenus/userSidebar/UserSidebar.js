import React from 'react'
import Sidebar from '../../../configurations/navigation/Sidebar'
import userSidebarConfig from './userSidebarConfig.json'

const UserSidebar = () => {
  return (
    <div>
        <Sidebar menuConfigs = {userSidebarConfig}/>

    </div>
  )
}

export default UserSidebar