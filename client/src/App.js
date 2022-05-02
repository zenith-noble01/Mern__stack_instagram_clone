import React from "react";
import "./App.scss";
import { Navbar } from "./Components";
import { Home } from "./Pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app__wrapper">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
