import React from "react";
import ReactDom from "react-dom";
import "./Header.css";


function Navigations(){
    return(
        <ul className="list-items">
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
        </ul>
    )
}


export default function Header(){
    return(
        <div className="nav-items">
            <h1 className="nav-title">Harvey's Personal Site</h1>
            <Navigations/>
        </div>
    )
}
