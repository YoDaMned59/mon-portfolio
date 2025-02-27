import { FaGithub, FaGlobe } from "react-icons/fa";
import "../styles/projects.scss";

export const Cards = ({ data, openModal }) => {
    return (
        <div className="grid">
            {data.length > 0 &&
                data.map((project) => (
                    <div key={project.id} className="card">
                        <div>{project.title}</div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="card-image"
                        />
                        <button onClick={() => openModal(project.id)} className="open-modal-btn">
                            voir plus
                        </button>
                        <div className="card-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} /> GitHub
                            </a>
                            <a href={project.site} target="_blank" rel="noopener noreferrer" className="site-link">
                                <FaGlobe size={20} /> Voir le site
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    );
};
