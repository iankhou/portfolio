import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const NavBar = () => (
  <nav className="navbar">
    <h1>
      <Link to="/" className="name">
        Ian Hou
      </Link>
    </h1>
    <ul className="nav_ul">
      <li className="nav_item">
        <Link to="/" className="nav_link_text">
          Home
        </Link>
      </li>
      <li className="nav_item">
        <Link to="/professional" className="nav_link_text">
          Professional
        </Link>
      </li>
      <li className="nav_item">
        <Link to="/personality" className="nav_link_text">
          Personal
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
