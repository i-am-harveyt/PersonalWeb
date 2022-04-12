import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

function Navigations() {
  return (
    <nav id="nav">
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
  let onclick = () => {
    let nav = document.getElementById("nav");
    nav.classList.toggle("active");
  };
  document.onclick = function (e) {
    let nav = document.getElementById("nav");
    if (e.target.id === "nav" || e.target.class === "menu-icon"){
      console.log("Cool!")
      nav.classList.toggle("active");
    }
    if (e.target.id !== "nav" && e.target.className !== "nav-toggle") {
      console.log("Wow!")
      nav.classList.remove("active");
    }
  };

  return (
    <header>
      <button className="nav-toggle" onClick={onclick}>
        {<CgMenu className="menu-icon"/>}
      </button>
      <h1>
        <Link to="/PersonalWeb/" className="link">
          Harvey's Website
        </Link>
      </h1>
      <p></p>
      <NavBar />
    </header>
  );
}
