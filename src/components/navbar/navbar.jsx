// import React from "react";

import "./navbar.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link className="title-1" to="">
          OH
        </Link>
        <Link className="title-2" to="">
          JUZ JASNO
        </Link>
      </div>

      <div className="buttons-all-nav-2">
        <div className="buttons-all-nav-1">
          <Link className="city-button" to="/miasto">
            Miasto
          </Link>
          <Link className="newsletter-button" to="/newsletter">
            Newsletter
          </Link>
          <Link className="dodaj-button" to="dodaj">
            Dodaj
          </Link>
        </div>
        <input
          className="szukaj-input"
          type="search"
          placeholder="Szukaj..."
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
