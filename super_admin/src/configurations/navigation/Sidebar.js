import React from 'react'
import DynamicSidebar from './DynamicSidebar'

const Sidebar = ({menuConfigs}) => {
  return (
    <>
    <DynamicSidebar menuConfig={menuConfigs} />
    </>
  )
}

export default Sidebar