import React from "react";
import "./nav.scss";
import {Link} from "react-router-dom";
import {Link as Link2} from 'react-scroll'

const Nav = () => {
    return (
        <>
            <section className="navigation">
                <nav>
                    <ul>
                        <Link to="/products">
                            <li>nasze produkty</li>
                        </Link>
                        <Link2 to="contact-us" smooth={true} duration={1000}> napisz do nas</Link2>
                        <Link2 to="contact" smooth={true} duration={1000}> kontakt</Link2>

                    </ul>
                </nav>
            </section>
        </>
    )
}
export default Nav;

