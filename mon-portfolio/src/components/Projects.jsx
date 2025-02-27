import { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [openModalId, setOpenModalId] = useState(null);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des projets :", error);
            });
    }, []);

    const openModal = (projectId) => {
        setOpenModalId(projectId);
    };

    const closeModal = () => {
        setOpenModalId(null);
    };

    return (
        <section id="projects" className="projets">
            <h2 className="title">Projets</h2>
            <Cards data={projects} openModal={openModal} />

            <ProjectModal 
                isOpen={openModalId !== null} 
                project={projects.find(p => p.id === openModalId)} 
                closeModal={closeModal} 
            />
        </section>
    );
};
