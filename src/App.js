// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./basePage";
import Layout from "./modules/layout"
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<div className="gradient-login"><Login /></div>} />
          <Route path="*" element={<Layout><BasePage/></Layout>} />
        </Routes>
      </BrowserRouter>
      {/* <Toast /> */ }
    </>
  );
}

export default App;
