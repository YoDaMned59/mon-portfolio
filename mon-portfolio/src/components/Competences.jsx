import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaDocker, FaGit, FaSass } from 'react-icons/fa'; 
import "../styles/competences.scss";

export const Competences = () => {
  return (
    <section id="competences">
      <h2 className="competences-title">Mes Compétences</h2>
      <div className="competences-list">
        <div className="competence-item">
          <FaHtml5 size={50} color="#e34f26" /> 
          <h3>HTML5</h3>
        </div>
        <div className="competence-item">
          <FaCss3Alt size={50} color="#1572b6" /> 
          <h3>CSS3</h3>
        </div>
        <div className="competence-item">
          <FaJs size={50} color="#f7df1e" /> 
          <h3>JavaScript</h3>
        </div>
        <div className="competence-item">
          <FaReact size={50} color="#61dafb" /> 
          <h3>React</h3>
        </div>
        <div className="competence-item">
          <FaGithub size={50} color="#333" /> 
          <h3>GitHub</h3>
        </div>
        <div className="competence-item">
          <FaGit size={50} color="#f14e32" /> 
          <h3>Git</h3>
        </div>
        <div className="competence-item">
          <FaSass size={50} color="#c69" /> 
          <h3>Sass</h3>
        </div>
      </div>
    </section>
  );
};