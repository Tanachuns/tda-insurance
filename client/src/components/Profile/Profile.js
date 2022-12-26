import axios from "axios";
import { useEffect, useState } from "react";
import UserCarList from "./UserCarList";

const Profile = () => {
  const url = "http://localhost:3002";
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios.get(url + "/users/10").then((res) => {
      setProfile(res.data);
    });
  }, []);
  const handleEdit = (e) => {
    e.preventDefault();

    const data = {
      id: profile.id,
      firstname: e.target.elements.firstname.value,
      lastname: e.target.elements.lastname.value,
      address: e.target.elements.address.value,
      tel: e.target.elements.tel.value,
      is_admin: e.target.elements.is_admin.checked,
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };
    axios.put(url + "/users/" + data.id, data).then((res) => {
      console.log(res);
      alert("User edited");
      window.location.reload(false);
    });
  };

  return (
    <div>
      <h1>Welcome {profile.firstname}</h1>
      <form
        method="PUT"
        onSubmit={(e) => {
          handleEdit(e);
        }}
      >
        <label>Firstname : </label>
        <input type="text" name="firstname" defaultValue={profile.firstname} />
        <br />
        <label>Lastname : </label>
        <input type="text" name="lastname" defaultValue={profile.lastname} />
        <br />
        <label>Address : </label>
        <input type="text" name="address" defaultValue={profile.address} />
        <br />
        <label>Tel : </label>
        <input type="text" name="tel" defaultValue={profile.tel} />
        <br />
        <label>Admin : </label>
        <input
          type="checkbox"
          name="is_admin"
          defaultChecked={profile.is_admin}
          disabled
        />
        <br />
        <label>Username : </label>
        <input type="text" name="username" defaultValue={profile.username} />
        <br />
        <label>Password : </label>
        <input
          type="password"
          name="password"
          defaultValue={profile.password}
        />
        <br />
        <input type="submit" value="edit" />
      </form>
      <UserCarList userId={profile.id} />
    </div>
  );
};

export default Profile;
