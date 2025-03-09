import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.scss";

// Initialisation d'EmailJS
emailjs.init("j3KClCUAj9anQTH9k");

export const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_lsyr9n9",
            "template_v16ubxk",
            form.current,
            "j3KClCUAj9anQTH9k"
        )
            .then(
                (result) => {
                    console.log("Email envoyé :", result.text);
                    setStatus("Message envoyé avec succès !");
                    form.current.reset();
                },
                (error) => {
                    console.error("Erreur d'envoi :", error);
                    setStatus("Erreur lors de l'envoi du message. Réessayez !");
                }
            );
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="container">
                <div className="contact-content">
                    <div className="form-container">
                        <span>Une question ?</span>
                        <p> N&apos;hésitez pas à m&apos;écrire ! Je vous répondrai en moins de 24 heures.</p>
                        <form ref={form} onSubmit={sendEmail}>
                                <label htmlFor="name">Nom</label>
                                <input type="text" name="to_name" id="name" required placeholder="Entrez votre nom" />

                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required placeholder="Entrez votre email" />

                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10" required placeholder="Votre message..."></textarea>

                                <input type="submit" value="Envoyer" />
                            </form>

                            {status && <p className="status-message">{status}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};
