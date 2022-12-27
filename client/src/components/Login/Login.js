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
  BackdropBox1,
  BackgroundImg1
} from "../StylesPages/LoginStyles";

const NormalText = {
  color: 'white',
  paddingBottom: "10px" 
}
/* eslint-disable react-hooks/exhaustive-deps */
const url = "http://localhost:3002/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("")
      .then((res) => { })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <BackgroundImg1>
      <BackdropBox1>

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
        
        <Link to="/signup" style={NormalText}>First time here ? Let's sign up</Link>
        

      </BackdropBox1>
    </BackgroundImg1>

  );
};

export default Login;
