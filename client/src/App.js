import React from "react";
import "./App.scss";
import { Navbar } from "./Components";
import { Home, Login, Register } from "./Pages";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  return (
    <div className="app">
      {pathname === "login" || pathname === "register" ? null : <Navbar />}
      <div
        className="app__wrapper"
        style={{
          minHeight: pathname === "login" || pathname === "register" ? "100vh" : "90vh",
        }}
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
