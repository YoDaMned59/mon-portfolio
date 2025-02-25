import "../styles/home.scss";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Competences } from "../components/Competences";
import { Contact } from "../components/Contact";
import { Formation } from "../components/Formation";


export const Home = () => {
    return (
        <div>
            <About />
            <Competences />
            <Projects />
            <Formation />
            <Contact />
        </div>
    )
}