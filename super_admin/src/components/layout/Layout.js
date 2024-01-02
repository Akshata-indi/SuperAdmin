
import Iconbar from '../../components/Iconbar/Iconbar'

// import Iconbar from '../../components/iconbar/Iconbar'
// import SidebarMenu from "../configuration/sidebarMenus/SidebarMenu";



import Header2 from '../../configurations/Header/Header2'

import StyleProvider from '../iconContext/StyleProvider'

import { Routes, Route, Outlet } from 'react-router-dom'
// import StyleProvider from '../../components/menusContext/StyleProvider'

const Layout = () => {
  
  return (
    <>
    <div className=" flex ">
      <div className="border-r border-gray-400">
        <Iconbar />
      </div>
      <div>
      <div>
        <Header2 />
      </div>
    
      <div className='  flex w-[1487px] h-[690px] border-r border-gray-400'>
  <Outlet />

     {/* <Routes>{renderRoutes(routesConfig)}</Routes> */}
      </div>
    
      </div>


     
  </div>
      
    </>
  );
};

export default Layout;