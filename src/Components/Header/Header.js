import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Navigations() {
  return (
    <nav>
      <ul className="list-items">
        <li>
          <Link to="/PersonalWeb/about">About</Link>
        </li>
        <li>
          <Link to="/PersonalWeb/work">Work</Link>
        </li>
        <li>
          <Link to="/PersonalWeb/contact">Contact</Link>
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
      <a>
        <Link to="/PersonalWeb/">
          <h1>Harvey's Website</h1>
        </Link>
      </a>
      <NavBar />
    </header>
  );
}
