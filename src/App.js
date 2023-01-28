// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./basePage";
import Layout from "./modules/layout"
import Login from "./pages/login/Login";
import UploadPage from "./pages/uploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<div className=" bg-gradient-to-r from-cyan-50 to-blue-500"><Login /></div>} />
          <Route path="/uploadPage" element={<UploadPage />} />
          <Route path="*" element={<Layout><BasePage/></Layout>} />
        </Routes>
      </BrowserRouter>
      {/* <Toast /> */ }
    </>
  );
}

export default App;
