import React, { useState } from 'react';
import { NavBar, NavLogo, NavMenu, NavList, NavLink , Bars} from '../StylesPages/NavBarStyles';

function Nav() {

  const [showToggle, setShowToggle] = useState(false);

  return (
    // Use React Fragment
    <> 
      {/* Use components from NavBar-Style */}
      <NavBar showToggle={showToggle}>

        <Bars onClick={() => setShowToggle(!showToggle)}/>
      
        <NavLogo to="/">
          <img style={{height:"70px"}} src="https://drive.google.com/uc?id=1i9xWWGRy-16YlZgpjGHmQscdz75rR1Zb&authuser=0" />
        </NavLogo>

        <NavMenu showToggle={showToggle}>
            <NavList>
                <NavLink to="/">Test Index</NavLink>
            </NavList>
            <NavList>
                <NavLink to="/admin">Admin</NavLink>
            </NavList>
            <NavList>
                <NavLink to="/signup">Sign Up</NavLink>
            </NavList>
            <NavList>
                <NavLink to="/login">Test Login</NavLink>
            </NavList>
            <NavList>
                <NavLink to="/car">Test Car</NavLink>
            </NavList>
        </NavMenu>
      </NavBar>
    </>
  )
}

export default Nav