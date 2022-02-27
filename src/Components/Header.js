import React from "react";
import ReactDom from "react-dom";
import "./Header.css";


function Navigations(){
    return(
        <nav>
            <ul className="list-items">
                <li><a href="../PersonalWeb">Home</a></li>
                <li><a href="../pages/About.html">About</a></li>
                <li><a href="../pages/Works">Works</a></li>
                <li><a href="../pages/Contact">Contact</a></li>
            </ul>
        </nav>
    )
}


function NavBar(){
    return(
        <div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <label for="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
            <Navigations/>
        </div>
    )
}


export default function Header(){
    return(
        <header>
            <h1>Harvey's Personal Site</h1>
            <NavBar/>
        </header>
    )
}
