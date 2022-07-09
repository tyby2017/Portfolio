import Header from "../components/Header";
import ProjectsContent from "../components/ProjectsContent";
import projectsImage from "../components/background/projectsImage.jpg";
import Footer from "../components/Footer";



export default function Projects() {
    return <div>
        <Header title="PORTFOLIO" background={projectsImage}/>
        <ProjectsContent />
        <Footer background={projectsImage} />
    </div>

}