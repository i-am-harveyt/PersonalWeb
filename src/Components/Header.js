import React from "react";
import ReactDom from "react-dom";
import "./Header.css";


function Navigations(){
    return(
        <div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <label for="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
            <nav>
                <ul className="list-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}


export default function Header(){
    return(
        <header>
            <h1>Harvey's Personal Site</h1>
            <Navigations/>
        </header>
    )
}
