import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">Estatery</div>
      <div className="navbar-tabs">
        <ul>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage Property</li>
          <li>Resources</li>
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
