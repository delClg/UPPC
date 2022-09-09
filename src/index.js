import logo from "./logo.svg";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Signup from "./components/signup";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Add_Lineman from './components/add_lineman';
import Work_Allocation from './components/work_allocation';


const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/homepage/:name" element={<Homepage />} ></Route>
      </Routes>
      <Routes>
        <Route path="/add_lineman/:JEid" element={<Add_Lineman />} ></Route>
      </Routes>
      <Routes>
        <Route path="/work_allocation/:JEid" element={<Work_Allocation />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
