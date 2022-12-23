import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";

import Index from "./components/Index/Index";

import React from "react";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </main>
      <footer>
        <div>
          <Link to="/">Test Index</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
