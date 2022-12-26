import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";

import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import React from "react";
import Car from "./components/Car/Car";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/car" element={<Car />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <footer>
        <div>
          <Link to="/">Test Index</Link>
          <Link to="/login">Test Login</Link>
          <Link to="/car">Test Car</Link>
          <Link to="/admin">admin</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
