import "../styles/home.scss";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Competences } from "../components/Competences";
import { Contact } from "../components/Contact";


export const Home = () => {
    return (
        <div>
            <About />
            <Competences />
            <Projects />
            <Contact />
        </div>
    )
}