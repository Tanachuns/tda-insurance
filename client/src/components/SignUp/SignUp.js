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

    axios
      .post("http://localhost:3002/auth/signup", signUpData)
      .then((res) => {
        let token = res.data.jwt;
        navigate("/");
        localStorage.setItem("jwt", token);
        // document.cookies.set("jwt",token)
      })
      .catch((err) => {
        if (err.response.status === 409) {
          alert("username already exists");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <BackgroundImg2>
      <BackdropBox2>
        <Header2>Registration form</Header2>
        <ContainInput>
          <form onSubmit={handleSubmit}>
            firstname:{" "}
            <InputBtn
              type="text"
              name="firstname"
              onChange={handleChange}
              required
            />
            lastname:{" "}
            <InputBtn
              type="text"
              name="lastname"
              onChange={handleChange}
              required
            />
            <br />
            address:{" "}
            <InputBtn
              type="text"
              name="address"
              onChange={handleChange}
              required
            />
            telephone:{" "}
            <InputBtn type="text" name="tel" onChange={handleChange} required />
            <br />
            username:{" "}
            <InputBtn
              type="text"
              name="username"
              onChange={handleChange}
              required
            />
            password:{" "}
            <InputBtn
              type="text"
              name="password"
              onChange={handleChange}
              required
            />
            <br />
            <LoginBtn type="submit">Sign-up</LoginBtn>
          </form>
        </ContainInput>
      </BackdropBox2>
    </BackgroundImg2>
  );
};

export default SignUp;
