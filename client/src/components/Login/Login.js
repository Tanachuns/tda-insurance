import React, { useEffect,useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, Navigation } from "react-router-dom";

/* eslint-disable react-hooks/exhaustive-deps */
const url = 'http://localhost:3002/auth';

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault()

  }
  

  return (
    <div>
      <h1>test Login</h1>
      <h2>Log in</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}/> <br/>
        <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/> <br/>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">First time here ? Let's sign up</Link>

    </div>

  )
};

export default Login;
