import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigation,
} from "react-router-dom";
import {
  Header,
  InputBtn,
  LoginBtn,
  NormalText,
} from "../StylesPages/LoginStyles";

/* eslint-disable react-hooks/exhaustive-deps */
const url = "http://localhost:3002/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("")
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header>Welcome Back !</Header>

      <form onSubmit={handleSubmit}>
        <InputBtn
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <InputBtn
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <LoginBtn type="submit">Login</LoginBtn>
      </form>
      <NormalText>
        <Link to="/signup">First time here ? Let's sign up</Link>
      </NormalText>
    </div>
  );
};

export default Login;
