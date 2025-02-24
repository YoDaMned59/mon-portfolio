import "../styles/home.scss";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Competences } from "../components/Competences";


export const Home = () => {
    return (
        <div>
            <About />
            <Competences />
            <Projects />
        </div>
    )
}