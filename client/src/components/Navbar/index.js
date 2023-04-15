import React, { useCallback, useState } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

import profileImage from "../.././assets/images/wagstoriches3.png";
//import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div id="nav-logo">
          <img class="mb-5" id="avatar" src={profileImage} alt="wags to riches logo" />
        </div>
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
