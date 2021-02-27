import React from 'react';
import "./Home.scss";
import Benefits from "./Benefits/Benefits";
import HowToStart from "./How to start/HowToStart";
import ContactForm from "./ContactForm/ContactForm";
import FrontPage from "./FrontPage/FrontPage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


const Home = () => {

    return (
        <>

            <div className="container">
                <Header/>
                <FrontPage/>
                <Benefits/>
                <HowToStart/>
                <ContactForm/>
                <Footer/>
            </div>

        </>
    )
}


export default Home;