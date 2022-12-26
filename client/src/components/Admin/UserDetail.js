import axios from "axios";
import { useEffect, useState } from "react";
const UserDetails = () => {
  const url = "http://localhost:3002";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(url + "/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  const usersElement = users.map((user, id) => {
    return (
      <tr key={id}>
        <td>
          <input type="text" form="edit" defaultValue={user.id} disabled />
        </td>
        <td>
          <input type="text" form="edit" defaultValue={user.firstname} />
        </td>
        <td>
          <input type="text" form="edit" defaultValue={user.lastname} />
        </td>
        <td>
          <input type="text" form="edit" defaultValue={user.address} />
        </td>
        <td>
          <input type="text" form="edit" defaultValue={user.tel} />
        </td>
        <td>
          <input type="text" form="edit" defaultValue={user.is_admin} />
        </td>
        <td>
          <input type="text" form="edit" defaultValue={user.username} />
        </td>
        <td>
          <input type="text" form="edit" defaultValue={user.password} />
        </td>
        <td>
          <input type="submit" form="edit" value="edit" />
        </td>
        <td>
          <input type="button" value="delete" />
        </td>
      </tr>
    );
  });

  const handleSubmit = (e) => {};

  return (
    <div>
      <form method="PUT" id="edit"></form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>address</th>
            <th>tel</th>
            <th>is_admin</th>
            <th>username</th>
            <th>password</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>{usersElement}</tbody>
      </table>
    </div>
  );
};

export default UserDetails;
