import { FaGithub, FaGlobe } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/projects.scss";

export const Cards = ({ data, openModal }) => {
    return (
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        loopAdditionalSlides={1}
        initialSlide={0}
        breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }}
            className="swiper-container"
        >
            {data.map((project) => (
                <SwiperSlide key={project.id}>
                    <h3>{project.title}</h3>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="carousel-image"
                    />
                    <button onClick={() => openModal(project.id)} className="open-modal-btn">
                        Description du projet
                    </button>
                    <div className="carousel-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} /> GitHub
                        </a>
                        <a href={project.site} target="_blank" rel="noopener noreferrer" className="site-link">
                            <FaGlobe size={20} /> Voir le site
                        </a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

Cards.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        site: PropTypes.string.isRequired
    })).isRequired,
    openModal: PropTypes.func.isRequired
};

