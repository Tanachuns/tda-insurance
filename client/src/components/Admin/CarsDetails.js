import axios from "axios";
import { useEffect, useState } from "react";
const CarsDetails = () => {
  const url = "http://localhost:3002";
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get(url + "/cars").then((res) => {
      setCars(res.data);
    });
  }, []);
  const carsElement = cars.map((car, id) => {
    return (
      <tr key={id}>
        <td>{car.id}</td>
        <td>
          <input type="text" defaultValue={car.user_id} />
        </td>
        <td>
          <input type="text" defaultValue={car.plate_number} />
        </td>
        <td>
          <input type="text" defaultValue={car.brand} />
        </td>
        <td>
          <input type="text" defaultValue={car.year} />
        </td>
        <td>
          <input type="text" defaultValue={car.insurance_id} />
        </td>
        <td>
          <input type="text" defaultValue={car.type} />
        </td>

        <td>
          <input type="submit" value="edit" />
        </td>
        <td>
          <input type="submit" value="delete" />
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Owner ID</th>
            <th>Plate Number</th>
            <th>Brand</th>
            <th>Year</th>
            <th>Package ID</th>
            <th>Type</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>{carsElement}</tbody>
      </table>
    </div>
  );
};

export default CarsDetails;
