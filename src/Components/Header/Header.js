import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Navigations() {
  return (
    <nav>
      <ul className="list-items">
        <li>
          <Link to="/PersonalWeb">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function NavBar() {
  return (
    <div>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <Navigations />
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <h1>Harvey's Personal Site</h1>
      <NavBar />
    </header>
  );
}
