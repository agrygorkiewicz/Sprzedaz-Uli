import React, {useState} from "react";
import "./ContactForm.scss";
import {db} from "../../firebase";



const ContactForm = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(null);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(null);
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
        if (name.length <= 2) {
            setNameError("Imię jest za krótkie");
            setLoader(false);
        } else {
            setNameError(null);
        }
        if (reg.test(email.value)) {
            setEmailError("Email jest nieprawidłowy");

        }
        if (message.length <= 3) {
            setMessageError("Wiadomość jest za krótka")

        }
        if (nameError || emailError || messageError) {
            alert('Błąd');
        }
           else { // if (name && email && message && !nameError && !emailError && !messageError) {
                db.collection("contacts")
                    .add({
                        name: name,
                        email: email,
                        message: message,
                    })
                    .then(() => {
                            alert('Twoja wiadomość została wysłana');
                            setLoader(false);

                    })
                    .catch(() => {
                            alert('Błąd');
                            setLoader(false);

                    });
                setName("");
                setEmail("");
                setMessage("");
            }

    };


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <section className="contact-box">
            <div className="contact-form" id="contact-us">
                <form onSubmit={handleSubmit}>
                    <h1>Napisz do nas!</h1>
                    <div className="form-group">
                        <label className="inputName">imię i nazwisko</label>
                        <input style={{
                            border: nameError ? "1px solid tomato" : "1px solid black",
                        }} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
                               className="form-control"
                               id="inputName" required/>
                        {nameError && <p style={{color: "tomato"}}>{nameError}</p>}
                    </div>
                    <div className="form-group">
                        <label className="inputEmail">adres e-mail</label>
                        <input style={{
                            border: emailError ? "1px solid tomato" : "1px solid black",
                        }} type="email" name="email" value={email}
                               onChange={(e) => setEmail(e.target.value)}

                               className="form-control"
                               id="inputEmail" required/>
                        {emailError && <p style={{color: "tomato"}}>{emailError}</p>}
                    </div>
                    <div className="form-group">
                        <label className="inputMessage">wiadomość</label>
                        <textarea style={{
                            border: messageError ? "1px solid tomato" : "1px solid black",
                        }} className="form-control" name="message" value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  id="inputMessage" rows="5"
                                  required> </textarea>
                        {messageError && <p style={{color: "tomato"}}>{messageError}</p>}
                    </div>
                    <button style={{background : loader ? "#ccc" : "green"  }}  onClick={togglePopup} type="submit" className="btn btn-primary btn-block"><i
                        className="fa fa-paper-plane" > </i> Wyślij
                    </button>



                </form>

            </div>
        </section>
    )
}

export default ContactForm;