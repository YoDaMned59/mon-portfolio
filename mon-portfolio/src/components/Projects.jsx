import { useEffect, useState } from "react";
import { Cards } from "./Cards";

export const Projects = () => {
    const [projects, setProjects] = useState([]);

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

    return (
        <section id="projects" className="projets">
            <h2 className="title">Projets</h2>
            <Cards data={projects} />
        </section>
    );
};
