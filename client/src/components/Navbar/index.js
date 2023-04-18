import React from "react";
import { Nav, NavLink, NavMenu, Avatar } from "./NavbarElements";

import logoImage from "../.././assets/images/crown-logo.png";
import Auth from "../../utils/Auth"

const Navbar = () => {
 
const isloggedin = !!localStorage.getItem("id_token")
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
          
          {!isloggedin  ? (
         <> <NavLink to="/signup" activeStyle>
            Sign Up!
          </NavLink>
            <NavLink to="/login" activeStyle>
              Log In!
            </NavLink> </>
          ) : (
            <NavLink onClick={() => Auth.logout()}>Logout</NavLink>
          )}
          <NavLink to="/donate" activeStyle>
            Donate!
          </NavLink>
          {isloggedin && (
            <NavLink to="/donate" activeStyle title={"logged In"}>
              Account
            </NavLink>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
