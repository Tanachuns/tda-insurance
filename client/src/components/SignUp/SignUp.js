import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {
  BackgroundImg2,
  Header2,
  BackdropBox2,
  ContainInput,
} from "../StylesPages/SignupStyles";
import { InputBtn, LoginBtn } from "../StylesPages/LoginStyles";

import jwt_decode from "jwt-decode";
// import './CardPackage.css'

const SignUp = (props) => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({});

  const handleChange = (e) => {
    setSignUpData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3002/auth/signup", signUpData).then((res) => {
      let token = res.data.jwt;
      navigate("/");
      localStorage.setItem("jwt", token);
      // document.cookies.set("jwt",token)
    });
  };

  return (
    <BackgroundImg2>
      <BackdropBox2>
        <Header2>Registration form</Header2>
        <ContainInput>
          <form onSubmit={handleSubmit}>
            firstname:{" "}
            <InputBtn type="text" name="firstname" onChange={handleChange} />
            lastname:{" "}
            <InputBtn type="text" name="lastname" onChange={handleChange} />
            <br />
            address:{" "}
            <InputBtn type="text" name="address" onChange={handleChange} />
            telephone:{" "}
            <InputBtn type="text" name="tel" onChange={handleChange} />
            <br />
            username:{" "}
            <InputBtn type="text" name="username" onChange={handleChange} />
            password:{" "}
            <InputBtn type="text" name="password" onChange={handleChange} />
            <br />
            <LoginBtn type="submit">Sign-up</LoginBtn>
          </form>
        </ContainInput>
      </BackdropBox2>
    </BackgroundImg2>
  );
};

export default SignUp;
