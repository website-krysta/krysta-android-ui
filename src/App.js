import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}> 
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
             
             
            </Route>
            <Route path="orderslist">
              <Route index element={<List />} />
          
             
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
