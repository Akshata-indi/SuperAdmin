// import Layout from "./layout/Layout"
import { BrowserRouter } from "react-router-dom";
// import DynamicSidebar from "./configurations/navigation/DynamicSidebar"
import Iconbar from "./components/iconbar/Iconbar"

function App() {
  return (
    <div>
      <BrowserRouter>
           {/* <DynamicSidebar/> */}
      <Iconbar/>
      </BrowserRouter>
      {/* <Layout/> */}
      
    </div>
  );
}

export default App;
