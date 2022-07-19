import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      {/* <ul>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
      </ul> */}

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        PROJECTS
      </NavLink>
    </nav>
  );
}
