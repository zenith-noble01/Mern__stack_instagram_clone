import React from "react";
import "./App.scss";
import { Navbar } from "./Components";
import {
  Explore,
  Home,
  Login,
  Register,
  Direct,
  Notfound,
  Profile,
} from "./Pages";
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
          minHeight:
            pathname === "login" || pathname === "register" ? "100vh" : "90vh",
        }}
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="explore" element={<Explore />}>
            <Route path=":id" element={<Explore />} />
          </Route>
          <Route path="direct" element={<Direct />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
