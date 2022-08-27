import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">Estatery</Link>
      </div>
      <div className="navbar-tabs">
        <ul>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage Property</li>
          <li>
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
