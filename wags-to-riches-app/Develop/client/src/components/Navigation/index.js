import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">Wags to Riches</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/faves">
              <div class="nav-font">Favorites!</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/signup">
              <div class="nav-font">Sign Up!</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/login">
              <div class="nav-font">Log In!</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/donate">
              <div class="nav-font">Donate!</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;