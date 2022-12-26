import React, { useEffect,useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, Navigation } from "react-router-dom";

/* eslint-disable react-hooks/exhaustive-deps */
const url = 'http://localhost:3002/auth';

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sentUsername = () => {

    axios
    .put(url)
    .then((res) => {
      console.log(res.data);
      setUsername(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const sentPassword = () => {
    axios
    .put(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }
  sentUsername();
  sentPassword();

  return (
    <div>
      <h1>test Login</h1>
      <h2>Log in</h2>

      <form>
        <input type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button >Login</button>
      </form>

    </div>

  )
};

export default Login;
