import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.scss";

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
            <div className="container">
                <div className="form-container">
                    <span>Une question ? Une demande de devis ?</span>
                    <p> N’hésitez pas à m’écrire ! Je vous répondrai en moins de 24 heures.</p>
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="to_name" id="name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" required></textarea>

                        <input type="submit" value="Envoyer" />
                    </form>

                    {/* Message de confirmation ou d'erreur */}
                    {status && <p className="status-message">{status}</p>}
                </div>
            </div>
        </section>
    );
};
