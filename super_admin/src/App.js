

import Role from "./components/RoleForms/Body/Role";

import { Outlet, Route, Routes } from "react-router-dom";
import routesConfig from './routing/RoutingConfig'
import StyleProvider from "./components/SidebarMenus/menusContext/StyleProvider";


// import Layout from "./components/layout/Layout";

import Layout from "./components/layout/Layout";
import RoleComponent from "./pages/roles/RoleComponent";
import UserComponent from "./pages/userContent/UserComponent";
import UserForm from "./pages/userContent/UserForm";
// import TableWithData from "./configurations/tables/TableWithData";


import Groups from './pages/groups/Groups'

function App()  {
  return (
    <div>
      <Layout/>
      {/* <TableWithData /> */}
    {/* <UserForm/> */}
    {/* <UserComponent /> */}
    {/* <Role /> */}
    {/* <UserHeader /> */}
    {/* <DSearch /> */}
    {/* <Groups /> */}
    </div>
    



 
  );
}

export default App;
