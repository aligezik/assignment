import React from "react";
import { Link } from "react-router-dom";
import NavbarStyle from "../styles/NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div>
        <Link className="navbar-left" to="/">
          React Movie App
        </Link>
      </div>

      <div className="navbar-right">
        <Link className="right-link" to="login">
          Login
        </Link>
        <Link className="right-link" to="register">
          Register
        </Link>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
