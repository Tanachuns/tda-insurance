import UserDetails from "./UserDetail";
import CarsDetails from "./CarsDetails";
import { useState } from "react";
import PackagesDetails from "./PackagesDetails";
import jwt_decode from "jwt-decode";
import { InputBtn } from "../StylesPages/LoginStyles";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const [page, setPage] = useState(<UserDetails />);
  const handlePage = (p) => {
    setPage(p);
  };

  if (localStorage.getItem("jwt") !== null) {
    const decoded = jwt_decode(localStorage.getItem("jwt"));
    if (decoded.is_admin) {
      return (
        <div>
          <header>
            <h1>Admin{decoded.username}</h1>
            <button
              onClick={() => {
                handlePage(<UserDetails />);
              }}
            >
              Users Detail
            </button>
            <button
              onClick={() => {
                handlePage(<CarsDetails />);
              }}
            >
              Cars Detail
            </button>
            <button
              onClick={() => {
                handlePage(<PackagesDetails />);
              }}
            >
              Packages Detail
            </button>
          </header>
          <main>{page}</main>
        </div>
      );
    }
    return (
      <div>
        <h1>You're not admin.</h1>
      </div>
    );
  } else {
    return <h1>Unauthorized</h1>;
  }
};

export default Admin;
