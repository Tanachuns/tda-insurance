import UserDetails from "./UserDetail";
import CarsDetails from "./CarsDetails";
import { useState } from "react";
import PackagesDetails from "./PackagesDetails";
import jwt_decode from "jwt-decode";
import "./Admin.css";

const Admin = () => {
  const [page, setPage] = useState(<UserDetails />);
  const handlePage = (p) => {
    setPage(p);
  };

  if (localStorage.getItem("jwt") !== null) {
    const decoded = jwt_decode(localStorage.getItem("jwt"));
    if (decoded.is_admin) {
      const header = (
        <header>
          <h1>Admin {decoded.username}</h1>
          <button
            className={"dashboardBtn"}
            onClick={() => {
              handlePage(<UserDetails />);
            }}
          >
            Users Detail
          </button>
          <button
            className={"dashboardBtn active"}
            onClick={() => {
              handlePage(<CarsDetails />);
            }}
          >
            Cars Detail
          </button>
          <button
            className={
              page.type.name === "PackagesDetails"
                ? "dashboardBtn active"
                : "dashboardBtn"
            }
            onClick={() => {
              handlePage(<PackagesDetails />);
            }}
          >
            Packages Detail
          </button>
        </header>
      );
      return (
        <div>
          {header}
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
