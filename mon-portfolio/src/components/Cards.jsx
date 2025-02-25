import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import "../styles/projects.scss";

export const Cards = ({ data }) => {
    const [openModalId, setOpenModalId] = useState(null); 

    const openModal = (projectId) => {
        setOpenModalId(projectId); 
    };

    const closeModal = () => {
        setOpenModalId(null); 
    };

    return (
        <div className="grid">
            {data.length > 0 && 
                data.map((project) => (
                    <div key={project.id} className="card">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="card-image"
                        />
                        <div className="card-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} />
                            </a>
                            <a href={project.site} target="_blank" rel="noopener noreferrer">
                                Voir le site
                            </a>
                        </div>
                        <div className="description-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p><strong>Compétences développées :</strong> {project.skills}</p>
                            </div>
                    </div>
                ))
            }
        </div>
    );
};
