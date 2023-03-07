// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./basePage";
import Layout from "./modules/layout"
import Login from "./pages/login/Login";
import Store from "./pages/store";
import UploadPage from "./pages/uploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<div className=" bg-gradient-to-r from-cyan-50 to-cyan-600"><Login /></div>} /> */}
          {/* <Route path="/uploadPage" element={<UploadPage />} /> */}
          {/* <Route path="*" element={<Layout><BasePage/></Layout>} /> */}
          <Route path="*" element={<div className='w-full h-full'> <Store/></div>} />
        </Routes>
      </BrowserRouter>
      {/* <Toast /> */ }
    </>
  );
}

export default App;
