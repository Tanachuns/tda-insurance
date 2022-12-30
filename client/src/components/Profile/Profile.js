import axios from "axios";
import { useEffect, useState } from "react";
import UserCarList from "./UserCarList";
import jwt_decode from "jwt-decode";
import { HeaderProfile, EditBtn, Border, ContainerFlex, InputBox, Label } from "../StylesPages/ProfileStyles";
import { InputBtn } from "../StylesPages/LoginStyles";
const config = require("../../config.json");

const Profile = () => {
  const url = config.url;
  const [profile, setProfile] = useState({});
  var decoded = jwt_decode(localStorage.getItem("jwt"));
  console.log(decoded);
  useEffect(() => {
    axios
      .get(url + "/users/" + decoded.id, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => {
        console.log(res.data);
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
    axios
      .put(url + "/users/" + data.id, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => {
        console.log(res);
        alert("User edited");
        window.location.reload(false);
      });
  };
  const isAdmin = (
    <section>
      <label>Admin : </label>
      <input
        type="checkbox"
        name="is_admin"
        defaultChecked={profile.is_admin}
        disabled
      />
    </section>
  );
  return (
    <>
      <Border>
        <HeaderProfile>Welcome {profile.firstname}</HeaderProfile>
        <form
          method="PUT"
          onSubmit={(e) => {
            handleEdit(e);
          }}
        >
          <ContainerFlex>
            <InputBox>
              <Label>Firstname</Label>
              <InputBtn type="text" name="firstname" defaultValue={profile.firstname} />
            </InputBox>

            <InputBox>
              <Label>Lastname</Label>
              <InputBtn type="text" name="lastname" defaultValue={profile.lastname} />
            </InputBox>

            <InputBox>
              <Label>Address</Label>
              <InputBtn type="text" name="address" defaultValue={profile.address} />
            </InputBox>

            <InputBox>
              <Label>Tel</Label>
              <InputBtn type="text" name="tel" defaultValue={profile.tel} />
            </InputBox>

            <InputBox>
              <Label>Username</Label>
              <InputBtn type="text" name="username" defaultValue={profile.username} />
            </InputBox>

            <InputBox>
              <Label>Password</Label>
              <InputBtn
                type="password"
                name="password"
                defaultValue={profile.password}
              />
            </InputBox>
            
          </ContainerFlex>
          <br />
          <EditBtn type="submit">Login</EditBtn>
        </form>
      </Border>

      <h2>My Cars</h2>
      <UserCarList userId={profile.id} />
    </>
  );
};

export default Profile;
