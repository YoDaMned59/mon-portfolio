import Modal from "react-modal";
import { useState, useEffect } from "react";
import { FaReact, FaJs, FaSass, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiMongodb, SiExpress, SiJest } from "react-icons/si";
import PropTypes from "prop-types";
import "../styles/projectmodal.scss";

Modal.setAppElement("#root");

export const ProjectModal = ({ isOpen, project, closeModal }) => {
    const [skills, setSkills] = useState([]);
    const [imageSrc, setImageSrc] = useState(project?.descriptionImage);

    useEffect(() => {
        fetch("/data/skills.json")
            .then((response) => response.json())
            .then((data) => setSkills(data))
            .catch((error) => console.error("Erreur de chargement des compétences:", error));
    }, []);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth <= 600) {
                setImageSrc(project?.smallImage || project?.descriptionImage);
            } else if (window.innerWidth <= 1024) {
                setImageSrc(project?.mediumImage || project?.descriptionImage);
            } else {
                setImageSrc(project?.descriptionImage);
            }
        };

        updateImage();
        window.addEventListener("resize", updateImage);
        return () => window.removeEventListener("resize", updateImage);
    }, [project]);

    if (!project) return null;

    const skillIcons = {
        React: FaReact,
        JavaScript: FaJs,
        SCSS: FaSass,
        HTML5: FaHtml5,
        CSS3: FaCss3Alt,
        "Node.js": FaNodeJs,
        Redux: SiRedux,
        MongoDB: SiMongodb,
        Express: SiExpress,
        Jest: SiJest,
    };

    const projectSkills = project.skills ? project.skills.split(", ") : [];
    const filteredSkills = skills.filter(skill => projectSkills.includes(skill.name));

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Détails du projet">
            <div className="modal-body">
                <h2>{project.title}</h2>

                <p className="modal-description">{project.description}</p>
                <img src={imageSrc} className="modal-image" alt="Aperçu du projet" />

                <p className="modal-skills">
                    <strong>Compétences développées :</strong>
                </p>

                <div className="competences-list">
                    {filteredSkills.map((skill, index) => {
                        const IconComponent = skillIcons[skill.name];
                        return (
                            <div key={index} className="competence-item">
                                {IconComponent && <IconComponent size={50} color={skill.color} />}
                                <h3>{skill.name}</h3>
                            </div>
                        );
                    })}
                </div>

                <button onClick={closeModal} className="close-modal-btn">
                    Fermer
                </button>
            </div>
        </Modal>
    );
};

ProjectModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    project: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionImage: PropTypes.string,
        smallImage: PropTypes.string,
        mediumImage: PropTypes.string,
        skills: PropTypes.string,
    }),
    closeModal: PropTypes.func.isRequired,
};
