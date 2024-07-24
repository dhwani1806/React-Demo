import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/dashboard/Dashboard";
import Login from "../src/components/login/login";
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path={"/"} element={<Dashboard />} />
        <Route exact path={"/home"} element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
