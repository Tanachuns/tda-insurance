import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";

import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import React from "react";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer>
        <div>
          <Link to="/">Test Index</Link>
          <Link to="/login">Test Login</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
