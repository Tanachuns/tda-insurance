import axios from "axios";
import { useEffect, useState } from "react";
const PackagesDetails = () => {
  const url = "http://localhost:3002";
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    axios.get(url + "/packages").then((res) => {
      setPackages(res.data);
    });
  }, []);
  const packagesElement = packages.map((packageItem, id) => {
    return (
      <tr key={id}>
        <td>{packageItem.id}</td>
        <td>
          <input type="text" defaultValue={packageItem.name} />
        </td>
        <td>
          <input type="text" defaultValue={packageItem.cost} />
        </td>
        <td>
          <input type="text" defaultValue={packageItem.descript} />
        </td>
        <td>
          <input type="text" defaultValue={packageItem.picture} />
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
            <th>Name</th>
            <th>Cost</th>
            <th>Desc</th>
            <th>Img</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>{packagesElement}</tbody>
      </table>
    </div>
  );
};

export default PackagesDetails;
