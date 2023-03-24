
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./basePage";
import Store from "./pages/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<div className='w-full h-full'> <Store/></div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
