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

  if (localStorage.getItem("jwt") !== null) {
    console.log(localStorage.getItem("jwt"));
    return (
      // Use React Fragment
      <>
        {/* Use components from NavBar-Style */}
        <NavBar showToggle={showToggle}>
          <Bars onClick={() => setShowToggle(!showToggle)} />

          <NavLogo to="/">
            <img
              style={{ height: "70px" }}
              src="https://drive.google.com/uc?id=1C_LXEXZfAW3s7UwHXST5GZu8iEJX0zAf&authuser=0"
            />
          </NavLogo>

          <NavMenu showToggle={showToggle}>
            <NavList>
              <NavLink to="/profile">Profile</NavLink>
            </NavList>
          </NavMenu>
        </NavBar>
      </>
    );
  }
  return <div>Test</div>;
}

export default Nav;
