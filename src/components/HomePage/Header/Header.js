import React from "react";
import Logo from "./logo.js";
import Nav from "./nav.js";



const Header = () => {
    return (
            <header>
                <div className="front">
                    <Logo/>
                    <Nav/>
                </div>
            </header>

    )}

export default Header;