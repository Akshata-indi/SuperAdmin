import Iconbar from '../../components/Iconbar/Iconbar'
// import SidebarMenu from "../configuration/sidebarMenus/SidebarMenu";

import routesConfig from '../../routing/RoutingConfig'
import Header from '../Header/Header2'

import { Routes, Route } from 'react-router-dom'

const Layout = () => {
  const renderRoutes = (routes) => {
    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} index={route.index}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ))
  };
  return (
    <>
    <div className=" flex ">
      <div className="border-r border-black">
        <Iconbar />
      </div>
      <div>
      <div>
        <Header />
      </div>
    
      <div className='  flex w-[1467px] h-[690px] bg-white bg-green-500 border-r'>
       

     <Routes>{renderRoutes(routesConfig)}</Routes>
      </div>
    
      </div>


     
  </div>
      
    </>
  );
};

export default Layout;