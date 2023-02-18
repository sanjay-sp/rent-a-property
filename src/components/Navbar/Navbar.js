import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img className="main-logo" src={logo} />
          Estatery
        </Link>
      </div>
      <div className="navbar-tabs">
        <ul>
          <li className={location.pathname == "/" ? "active" : ""}>
            <Link to="/">Rent</Link>
          </li>
          <li className={location.pathname == "/favorites" ? "active" : ""}>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
