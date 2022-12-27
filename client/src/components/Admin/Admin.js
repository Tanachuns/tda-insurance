import UserDetails from "./UserDetail";
import CarsDetails from "./CarsDetails";

import { useState } from "react";
import PackagesDetails from "./PackagesDetails";

const Admin = () => {
  const [page, setPage] = useState(<UserDetails />);
  const handlePage = (p) => {
    setPage(p);
  };
  return (
    <div>
      <header>
        <h1>Admin</h1>
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
};

export default Admin;
