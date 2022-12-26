import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";

import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import React from "react";
import Admin from "./components/Admin/Admin";
import Car from "./components/Car/Car";
import SignUp from "./components/SignUp/SignUp";
import Packages from "./components/Packages/Packages";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Link to="/">Test Index</Link>
          <Link to="/admin">--ADmin--</Link>
          <Link to="/signup">--SignUp--</Link>
          <Link to="/login">Test Login</Link>
          <Link to="/car">Test Car</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/car" element={<Car />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/packages/:id" element={<Packages />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
