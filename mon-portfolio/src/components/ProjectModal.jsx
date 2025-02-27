import Modal from "react-modal";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

export const ProjectModal = ({ isOpen, project, closeModal }) => {
    if (!project) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Détails du projet"
            style={{
                overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                content: {
                    padding: "20px",
                    borderRadius: "10px",
                    maxWidth: "500px",
                    margin: "auto",
                    backgroundColor: "#222",
                    color: "#fff"
                }
            }}
        >
            <div className="modal-body">
                <h2>{project.title}</h2>
                <p className="modal-description">{project.description}</p>
                <p className="modal-skills">
                    <strong>Compétences développées :</strong> {project.skills}
                </p>
                <button onClick={closeModal} className="close-modal-btn">
                    Fermer
                </button>
            </div>
        </Modal>
    );
};

ProjectModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    project: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
};
