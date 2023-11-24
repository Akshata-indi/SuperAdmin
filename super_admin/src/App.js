// import Layout from "./layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DynamicSidebar from "./configurations/navigation/DynamicSidebar"
import Iconbar from "./components/iconbar/Iconbar"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Iconbar/>
      {/* <Routes>
        <Route path="/user" element={<UserSidebar />} />

        

      </Routes> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
