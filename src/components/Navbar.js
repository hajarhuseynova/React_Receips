import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Meal Receips
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/create" className="nav-link">
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
