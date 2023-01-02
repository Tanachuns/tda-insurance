import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "../StylesPages/PagesLayout";
import { 
  BoxCard, GridArea, GridBox, ImgPackage, H1, H2, BuyBtn, CarList, TxtLorem
} from "../StylesPages/PackagesStyles";
import { DescriptTxt } from "../StylesPages/CardPackageStyles";
import axios from "axios";
import jwt_decode from "jwt-decode";
const config = require("../../config.json");

function Packages() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [cars, setCars] = useState([]);
  const { id } = useParams();
  const url = config.url;
  let cost = new Intl.NumberFormat().format(packages.cost);
  async function getPackages() {
    axios
      .get(url + "/packages/" + id)
      .then((res) => {
        setPackages(res.data);
      })

      .catch((err) => console.log(err));
  }
  const myCarList = (userId) => {
    axios
      .get(url + "/cars/mycar/" + userId)
      .then((res) => {
        console.log(res.data);

        setCars(res.data);
      })

      .catch((err) => console.log(err));
  };
  console.log(packages.type);
  useEffect(() => {
    getPackages();
    if (localStorage.getItem("jwt") !== null) {
      const decoded = jwt_decode(localStorage.getItem("jwt"));
      myCarList(decoded.id);
    }
  }, []);

  console.log(useParams());
  const handleBuy = (e) => {
    e.preventDefault();
    console.log(id);
    axios
      .put(url + "/cars/" + e.target.cars.value, {
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
          id : {item.plate_number} brand : {item.brand} type: {item.type}
        </option>
      );
    });
  const buyForm = ( 
    <form onSubmit={handleBuy}>
      Choose a car: 
      <CarList name="cars" id="cars">
        {carlist}
      </CarList>
      <BuyBtn type="submit" value="BUY" />
    </form>
  );
  console.log(localStorage.getItem("jwt"));
  return (
    <Container>
      <BoxCard>
        <ImgPackage src={packages.picture} />
          <H1>{packages.name}</H1>
          <H2>{cost} Baht / Year</H2>
        <GridArea>
          <GridBox>
            <b>for </b>
            {packages.type === undefined ? null : packages.type.join(",")}
            <DescriptTxt>{packages.descript}</DescriptTxt>
            {localStorage.getItem("jwt") === null ? <h3>Login to buy</h3> : buyForm}
          </GridBox>
          <GridBox>
            <TxtLorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tincidunt purus. Aliquam iaculis maximus nunc, vitae blandit sapien tristique quis. In tristique euismod augue, et accumsan diam hendrerit sed. In pulvinar cursus sem quis rhoncus. </TxtLorem> 
            <TxtLorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tincidunt purus. Aliquam iaculis maximus nunc, vitae blandit sapien tristique quis.</TxtLorem>
          </GridBox>
        </GridArea>

      </BoxCard>
    </Container>
  );
}

export default Packages;
