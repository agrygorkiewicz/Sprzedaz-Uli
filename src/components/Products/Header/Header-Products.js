import React from "react";
import LogoProducts from "./logo-products.js";
import NavProducts from "./nav-products.js";



const HeaderProducts = () => {
    return (
            <header>
                <div className="front">
                    <LogoProducts/>
                    <NavProducts/>
                </div>
            </header>

    )}

export default HeaderProducts;