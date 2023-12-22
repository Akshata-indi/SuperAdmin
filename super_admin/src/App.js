import { Outlet, Route, Routes } from "react-router-dom";
import routesConfig from './routing/RoutingConfig'
import StyleProvider from "./components/SidebarMenus/menusContext/StyleProvider";

function App() {
  const renderRoutes = (routes) => {
    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} index={route.index}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ))
  };
  return (
    <>
      <div>
        <StyleProvider>
          <Routes>{renderRoutes(routesConfig)}</Routes>
        </StyleProvider>
        <Outlet />
      </div>
    </>
  );
}

export default App;
