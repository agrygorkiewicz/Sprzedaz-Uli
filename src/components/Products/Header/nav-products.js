import React from "react";
import "./nav.scss";
import {Link} from "react-router-dom";


const NavProducts = () => {
    return (
        <>
            <section className="navigation">
                <nav>
                    <ul>
                        <Link to="/products">
                            <li>nasze produkty</li>
                        </Link>
                        <Link to="/" className="header-nav-link"> napisz do nas</Link>
                        <Link to="/" className="header-nav-link"> kontakt</Link>

                    </ul>
                </nav>
            </section>
        </>
    )
}
export default NavProducts;

