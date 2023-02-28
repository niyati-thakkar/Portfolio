import "./styles.css";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import ProjectDoc from "./Docs/ProjectDoc";
function createCards(props, index){
    return (
    <ProjectCard key = {index} title={props.title} content={props.content} lnk={props.lnk} />
    );
}

function Project(){
    return (
        <div>
            <Header />
            <div class="row">
            {ProjectDoc().map((project, index) => createCards(project, index))};
            </div>
        </div>
    );
}

export default Project;