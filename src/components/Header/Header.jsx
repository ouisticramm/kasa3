import React from "react";
import "../../assets/sass/Components/Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/">
        <div className="logo">
          <img src="kasa-logo.svg" alt="logo de kasa" />
        </div>
      </NavLink>
      <NavLink to="/" className="nav-link">
        Acceuil
      </NavLink>
      <NavLink to="/about" className="nav-link">
        A propos
      </NavLink>
    </nav>
  );
}

export default Header;
