import { FaLinkedin } from "react-icons/fa";
import "../styles/footer.scss";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/duviviersebastien"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visiter mon profil LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <p>Phone: <a href="tel:+33646147282">06/46/14/72/82</a></p>
                <p>Email: <a href="mailto:seb.duvivier@outlook.fr">seb.duvivier@outlook.fr</a></p>
                <p>Location: Meteren, 59270</p>
            </div>
        </footer>
    );
};
