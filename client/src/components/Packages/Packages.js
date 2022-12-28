import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "../StylesPages/PagesLayout";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Packages() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [cars, setCars] = useState([]);
  const { id } = useParams();
  const url = "http://localhost:3002/packages/" + id;
 
  let cost = new Intl.NumberFormat().format(packages.cost)
  // fetch api
  async function getPackages() {
    axios
      .get(url)
      .then((res) => {
        setPackages(res.data);
      })

      .catch((err) => console.log(err));
  }
  const myCarList = (userId) => {
    axios
      .get("http://localhost:3002/cars/mycar/" + userId)
      .then((res) => {
        console.log(res.data);

        setCars(res.data);
      })

      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPackages();
    if (localStorage.getItem("jwt") !== null){
      const decoded = jwt_decode(localStorage.getItem("jwt"));
     myCarList(decoded.id);
    }

  }, []);

  console.log(useParams());
  const handleBuy = (e) => {
    e.preventDefault();
    console.log(id);
    axios
      .put("http://localhost:3002/cars/" + e.target.cars.value, {
        insurance_id: id,
      })
      .then((res) => {
        console.log(res.data);
        alert("Buy completed");
        navigate("/");
      })

      .catch((err) => console.log(err));
  };

  const carlist = cars
    .filter((item) => {
      return packages.type.includes(item.type);
    })
    .map((item) => {
      return (
        <option value={`${item.id}`}>
          id : {item.plate_number} brand : {item.brand}
        </option>
      );
    });
  return (
    <Container>
      <h1>{packages.name}</h1>
      <h2>{cost}</h2>
        <img src=""/>
      
      <p>{packages.descript}</p>
      <form onSubmit={handleBuy}>
        Choose a car:
        <select name="cars" id="cars">
          {carlist}
        </select>
        <input type="submit" value="BUY" />
      </form>
    </Container>
  );
}

export default Packages;
