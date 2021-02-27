import React from "react";
import "./HowToStart.scss";

const HowToStart = () => {
    return (
        <section className="how-to-start">
            <div className="start-text">
                <h1>Od czego zacząć?</h1>
                <p>Chciałbyś zacząć swoja przygodę z pszczołami, ale nie wiesz jak? Chciałbyś założyć własna pasiekę? <br />
                   <span>Skontaktuj się z nami!</span>  <br/>
                    Pomożemy Ci wybrać odpowiedni dla Ciebie ul i uniknąć błędów. Powiemy wszystko, co powinieneś wiedzieć zaczynając własną hodowlę.
                </p>
                {/*<button>Dowiedz się więcej</button>*/}
            </div>
        </section>
    )
}

export default HowToStart;