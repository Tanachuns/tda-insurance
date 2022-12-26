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
      <>
        <form
          method="PUT"
          id={"user" + user.id}
          onSubmit={(e) => handleSubmit(e)}
        ></form>
        <tr key={id}>
          <td>
            <input
              type="text"
              form={"user" + user.id}
              name="id"
              defaultValue={user.id}
              disabled
            />
          </td>
          <td>
            <input
              type="text"
              form={"user" + user.id}
              name="firstname"
              defaultValue={user.firstname}
            />
          </td>
          <td>
            <input
              type="text"
              form={"user" + user.id}
              name="lastname"
              defaultValue={user.lastname}
            />
          </td>
          <td>
            <input
              type="text"
              form={"user" + user.id}
              name="address"
              defaultValue={user.address}
            />
          </td>
          <td>
            <input
              type="text"
              form={"user" + user.id}
              name="tel"
              defaultValue={user.tel}
            />
          </td>
          <td>
            <input
              type="text"
              form={"user" + user.id}
              name="is_admin"
              defaultValue={user.is_admin}
            />
          </td>
          <td>
            <input
              type="text"
              form={"user" + user.id}
              name="username"
              defaultValue={user.username}
            />
          </td>
          <td>
            <input
              type="text"
              form={"user" + user.id}
              name="password"
              defaultValue={user.password}
            />
          </td>
          <td>
            <input
              type="submit"
              form={"user" + user.id}
              name="edit"
              value="edit"
            />
          </td>
          <td>
            <input type="button" value="delete" />
          </td>
        </tr>
      </>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: e.target.elements.id.value,
      firstname: e.target.elements.firstname.value,
      lastname: e.target.elements.lastname.value,
      address: e.target.elements.address.value,
      tel: e.target.elements.tel.value,
      is_admin: e.target.elements.is_admin.value,
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };
    console.log(data);
  };

  return (
    <div>
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
