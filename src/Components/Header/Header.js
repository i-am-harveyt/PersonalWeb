import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

function Navigations() {
  return (
    <nav className="nav">
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
  return <Navigations />;
}

export default function Header() {
  let onclick = () => {};

  return (
    <header>
      <button className="nav-toggle">
        <CgMenu className="menu-icon" />
      </button>
      <a>
        <Link to="/PersonalWeb/">
          <h1>Harvey's Website</h1>
        </Link>
      </a>
      <p></p>
      <NavBar />
    </header>
  );
}
