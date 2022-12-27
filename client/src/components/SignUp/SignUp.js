import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
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
      console.log("jwt : " + token);
      let decode = jwt_decode(token)
      console.log(decode);
      navigate("/");
      localStorage.setItem("jwt", token);
      // document.cookies.set("jwt",token)
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      firstname: <input type="text" name="firstname" onChange={handleChange} />
      <br />
      lastname: <input type="text" name="lastname" onChange={handleChange} />
      <br />
      address: <input type="text" name="address" onChange={handleChange} />
      <br />
      telephone: <input type="text" name="tel" onChange={handleChange} />
      <br />
      username: <input type="text" name="username" onChange={handleChange} />
      <br />
      password: <input type="text" name="password" onChange={handleChange} />
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignUp;
