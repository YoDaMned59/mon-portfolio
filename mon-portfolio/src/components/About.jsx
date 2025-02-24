import PictureProfile from '../assets/images/seb-1.webp';
import '../styles/about.scss';


export const About = () => {
    return (
        <section id="about">
            <div className="picture left">
                <img src={PictureProfile} alt="Sebastien Duvivier" loading="lazy" />
            </div>
            <div id="about-me">
                <h2 className="about-me__title">A propos de moi</h2>
                <h3 className="about-me__introduction">Devenir intégrateur web a été une évidence pour moi, comme si j'étais destiné à travailler avec les technologies du web.
                    Créer des interfaces fluides, optimiser les performances d'un site et offrir une expérience utilisateur inoubliable, voilà ce qui me passionne au quotidien.
                </h3>
                <p>Nous sommes constamment à la recherche de simplicité et d'efficacité, et dès que nous atteignons cet équilibre, notre seul désir est de le rendre accessible et fluide.
                    C’est ce que je vous propose : créer des interfaces web intuitives et performantes, pour que chaque visiteur puisse vivre une expérience agréable et sans accroc. 
                    Mon objectif est de rendre chaque interaction sur votre site aussi naturelle et satisfaisante que possible, en veillant à ce que tout fonctionne parfaitement et en toute fluidité</p>
            </div>
        </section>
    )
}