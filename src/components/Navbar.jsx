import React from "react";
import abnbLogo from '/src/assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={abnbLogo}/>
        </nav>
    )
}