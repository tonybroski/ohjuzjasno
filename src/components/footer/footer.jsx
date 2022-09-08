import "./footer.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-all">
      <div>
        <Link className="contact-button" to="/kontakt">
          Kontakt
        </Link>
        <Link className="about-us-button" to="onas">
          O nas
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
