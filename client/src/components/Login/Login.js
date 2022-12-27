import React, { useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom'
import axios from "axios";
import jwt_decode from "jwt-decode"
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

const Login = () => {
  
  const url = "http://localhost:3002/";
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState("");
  
  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
      e.preventDefault()
      axios.post(url +"auth/login", loginData)
      .then(res => {
        let token = res.data.jwt;
     
      let decode = jwt_decode(token)
      console.log("decode jwt " + decode.username);
        navigate("/");
        localStorage.setItem("jwt", token);
      
      })
   
  }

  return (

    <BackgroundImg1>
      <BackdropBox1>

        <Header>Welcome Back !</Header>

        <form onSubmit={handleSubmit}>
          <InputBtn
            type="text"
            placeholder="Username"
            name="username"
            // value={username}
            onChange={handleChange}
          />{" "}
          <br />
          <InputBtn
            type="password"
            placeholder="Password"
            name="password"
            // value={password}
            onChange={handleChange}
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
