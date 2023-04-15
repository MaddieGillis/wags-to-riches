import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

    import logo from "../.././assets/images/logo-crown.png";
    //import 'bootstrap/dist/css/bootstrap.min.css';
  
const Navbar = () => {
  return (
    <>
      <Nav>
      <div id="nav-logo">
        <img className="navbar-brand" src={logo} alt="wags to riches logo"/>
        </div>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/favedogs" activeStyle>
            Saved Dogs
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up!
          </NavLink>
          <NavLink to="/login" activeStyle>
            Log In!
          </NavLink>
          <NavLink to="/donate" activeStyle>
            Donate!
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;