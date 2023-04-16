import React, { useCallback, useState } from "react";
import { Nav, NavLink, NavMenu, Avatar } from "./NavbarElements";

import logoImage from "../.././assets/images/crown-logo.png";


const Navbar = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("store"))?.user);
  const logout = useCallback(() => {
    const store = JSON.parse(localStorage.getItem("store"));
    localStorage.setItem("store", JSON.stringify({ ...store, user: null }));
    setUser(null);
  },[]);

  return (
    <>
      <Nav>
      <NavLink to="/home" activeStyle>
      <Avatar id="navbar-logo" src={logoImage} alt="wags to riches logo" />
      </NavLink>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/favedogs" activeStyle>
            Saved Dogs
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up!
          </NavLink>
          {!user ? (
            <NavLink to="/login" activeStyle>
              Log In!
            </NavLink>
          ) : (
            <NavLink onClick={() => logout()}>Logout</NavLink>
          )}
          <NavLink to="/donate" activeStyle>
            Donate!
          </NavLink>
          {user && (
            <NavLink to="/donate" activeStyle title={user?.email}>
              Account
            </NavLink>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
