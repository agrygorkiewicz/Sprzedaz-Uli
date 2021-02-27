import React from "react";
import "./FrontPage.scss";
import {Link} from "react-router-dom";

const FrontPage = () => {
    return (
        <section className="opening">
            <div className="front-page">

                <p>Produkcja uli styropianowych, wytwarzanych w profesjonalnych formach. Tworzone dla
                    prywatnych
                    hodowców oraz dla zawodowych pasiek produkcyjnych.</p>
                <Link to="/products">
                <button>Sprawdź nasze produkty</button>
                </Link>
            </div>
        </section>
    )
}

export default FrontPage;