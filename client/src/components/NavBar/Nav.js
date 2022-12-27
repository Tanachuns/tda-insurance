import React, { useState } from "react";
import {
  NavBar,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  Bars,
} from "../StylesPages/NavBarStyles";

function Nav() {
  const [showToggle, setShowToggle] = useState(false);
<<<<<<< HEAD

  if (localStorage.getItem("jwt") !== null) {
    console.log(localStorage.getItem("jwt"));
    return (
      // Use React Fragment
      <>
        {/* Use components from NavBar-Style */}
        <NavBar showToggle={showToggle}>
          <Bars onClick={() => setShowToggle(!showToggle)} />
=======
  const handleLogOut = (e) =>{
    localStorage.removeItem("jwt")
  }
  return (
    // Use React Fragment
    <>
      {/* Use components from NavBar-Style */}
      <NavBar showToggle={showToggle}>
        <Bars onClick={() => setShowToggle(!showToggle)} />
>>>>>>> 9d7f7d09da2767c4d7893bb784e49568af3339d3

          <NavLogo to="/">
            <img
              style={{ height: "70px" }}
              src="https://drive.google.com/uc?id=1C_LXEXZfAW3s7UwHXST5GZu8iEJX0zAf&authuser=0"
            />
          </NavLogo>

<<<<<<< HEAD
          <NavMenu showToggle={showToggle}>
            <NavList>
              <NavLink to="/profile">Profile</NavLink>
            </NavList>
          </NavMenu>
        </NavBar>
      </>
    );
  }
=======
        <NavMenu showToggle={showToggle}>
          <NavList>
            <NavLink to="/admin">Admin</NavLink>
          </NavList>
          <NavList>
            <NavLink to="/signup">Sign Up</NavLink>
            </NavList>
          
          <NavList>
            <NavLink onClick={handleLogOut}>Log Out</NavLink>
          </NavList>
       
         
          <NavList>
          <NavLink to="/login">Login</NavLink>
        </NavList>
          
           
          <NavList>
            <NavLink to="/profile">Profile</NavLink>
          </NavList>
        </NavMenu>
      </NavBar>
    </>
  );
>>>>>>> 9d7f7d09da2767c4d7893bb784e49568af3339d3
}
return <div>Test</div>;

export default Nav;
