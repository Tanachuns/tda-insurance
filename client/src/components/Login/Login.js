import React, { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigation,
} from "react-router-dom";
=======
import { BrowserRouter, Routes, Route, Link, Navigation } from "react-router-dom";
import  { Header, InputBtn, LoginBtn, NormalText }  from "../StylesPages/LoginStyles";
>>>>>>> b951863b1c01699c701d5db6d43ef7ac33f152df

/* eslint-disable react-hooks/exhaustive-deps */
const url = "http://localhost:3002/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
<<<<<<< HEAD
    e.preventDefault();
  };
=======

    e.preventDefault()
    axios
    .post('')
    .then((res) => {

    })
    .catch((err) => {
      console.log(err)
    })
  }
  
>>>>>>> b951863b1c01699c701d5db6d43ef7ac33f152df

  return (
    <div>
      <Header>Welcome Back !</Header>

      <form onSubmit={handleSubmit}>
<<<<<<< HEAD
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">First time here ? Let's sign up</Link>
=======
        
        <InputBtn type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}/> <br/>
        <InputBtn type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/> <br/>

        <LoginBtn type="submit">Login</LoginBtn>
        
      </form>
      <NormalText>
        <Link to="/signup">First time here ? Let's sign up</Link>
      </NormalText>

>>>>>>> b951863b1c01699c701d5db6d43ef7ac33f152df
    </div>
  );
};

export default Login;
