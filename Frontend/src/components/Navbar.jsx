import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Student Management System</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Student List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add Student</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
